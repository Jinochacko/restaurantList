import React, {Component} from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../common/Styles';
import Rating from './Rating';
import { DEFAULT_IMAGE } from '../common/constants';

export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({}),
        loadDetails: PropTypes.func,
        noodleImage: PropTypes.string
    };
  
    static defaultProps = {
        index: 0,
        loadDetails: () => {},
        noodleImage: null
    };

    constructor(props){
        super(props);
        this.state= {
            imageLoading: true
        }
    }

    loadDetails = () => {
        const {item, noodleImage, loadDetails} = this.props;
        loadDetails({...item, noodleImage});
    }
    
    render(){
        const { imageLoading } = this.state;
        const {item: { Brand, Variety, Style, Country, Stars, "Top Ten": TopTen }, noodleImage} = this.props;
        return (<TouchableOpacity onPress={()=>{this.loadDetails()}} style={[styles.mainWrap, styles.rowContent]}>
                    <View style={styles.profileInfo}>
                        <View style={[styles.rowContent, styles.alignCenter]}>
                            <View style={[styles.alignCenter, styles.avatarWrap]}>
                                <View style={styles.avatarStyle}>
                                    <Image 
                                        style={styles.listAvatar} 
                                        source={{uri: noodleImage ? noodleImage: DEFAULT_IMAGE}}                                        
                                        onLoadEnd={() => {
                                            this.setState({ imageLoading: false });
                                        }}
                                    />
                                    {imageLoading && <View style={[styles.listAvatar,styles.activityIndicatorWrap]}><ActivityIndicator style={styles.listAvatar} color="#ccc" /></View>}
                                </View>
                            </View>
                            <View style={styles.nameWrap}>
                                <Text style={[styles.textBold]}>{Brand}</Text>
                                <Rating value={Stars != "NaN" ? Stars: 0} size={15} />
                                <Text>{Country} | Style - {Style}</Text>
                                <Text>{Variety}</Text>
                                {TopTen != "NaN" ? <Text style={styles.phone}>{TopTen}</Text>: null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>);
    }
}