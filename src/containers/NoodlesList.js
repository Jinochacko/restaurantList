import React, { Component } from 'react';
import { View, FlatList, TextInput, Text, ActivityIndicator } from 'react-native';
import styles from '../common/Styles';
import AnimateList from '../components/AnimateList';
import ListItem from '../components/ListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNoodles } from '../actions/noodles';
import { getImages } from '../actions/images';

class NoodlesList extends Component {
    static propTypes = {
        navigation: PropTypes.shape({}),
        noodles: PropTypes.array,
        images: PropTypes.array,
        getNoodles: PropTypes.func,
        getImages: PropTypes.func,
        isFetching: PropTypes.bool
    };

    static defaultProps = {
        navigation: {},
        noodles: [],
        images: [],
        getNoodles: () => {},
        getImages: () => {},
        isFetching: false
    };

    constructor(props){
        super(props);
        this.state = {
            search: '',
            sortt: null,
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = () => {
        const { getNoodles, getImages } = this.props;
        getImages();
        getNoodles();
    }

    loadDetails = item => {
        const { navigation } = this.props;
        navigation.navigate('NoodlesDetails', item);
    }
    
    renderItem = ({item, index}) => {
        const { images } = this.props;
        const noodleImage = index < images.length ? images[index]: images[index%images.length];
        return (
            <AnimateList
                index={index}
                direction="x"
                renderContent={<ListItem item={item} noodleImage={(noodleImage && noodleImage.Image) ? noodleImage.Image: ''} loadDetails={this.loadDetails} />}
            />
        );
    }

    getItems = () => {
        const { noodles } = this.props;
        const { search } = this.state;
        let items = noodles;
        if(search){
            items = items.filter(item=>item.Brand.toLowerCase().includes(search.toLowerCase()));
        }
        return items;
    }

    getSortedItems = (dir) => {
        const noodles = this.getItems();
        let items = noodles.sort((a, b) => {
            const bStar = b.Stars != 'NaN' ? b.Stars: 0;
            const aStar = a.Stars != 'NaN' ? a.Stars: 0;
            return dir == 'asc' ? aStar - bStar: bStar - aStar;
        });

        return items;
    }

    sort = () => {
        const { sort } = this.state;
        let items = [];
        if(sort && sort == 'asc'){
            this.setState({sort: 'desc'});
        } else if(sort && sort == 'desc'){
            this.setState({sort: 'asc'});
        } else {
            this.setState({sort: 'asc'});
        }
    }

    render(){
        const { search, sort } = this.state;
        const { isFetching } = this.props;
        let noodles = this.getItems();
        if(sort){
            noodles = this.getSortedItems(sort);
        }
        return (
            <View style={styles.page}> 
            {isFetching ? <ActivityIndicator color="#171717" />:
                <View>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text=>{this.setState({search: text})}}
                            value={search}
                            placeholder="Search by brand"
                        />
                        <Text onPress={()=>{this.sort()}} style={styles.sort}>Sort</Text>
                    </View>
                    {noodles.length > 0 ? 
                        (<FlatList data={noodles} extraData={sort} renderItem={this.renderItem} />):
                        <Text style={styles.itemNotAvailable}>Item not available</Text>
                    }
                </View>
            }
            </View>
        );
    }
}

function bindAction(dispatch) {
    return {
        getNoodles: () => dispatch(getNoodles()),
        getImages: () => dispatch(getImages())
    };
}
const mapStateToProps = state => ({
    noodles: state.noodles.list.data,
    isFetching: state.noodles.list.isFetching,
    images: state.images.images
});

export default connect(
    mapStateToProps,
    bindAction,
)(NoodlesList);