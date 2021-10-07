import React, {Component} from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../common/Styles';
import Rating from '../components/Rating';

export default class NoodlesDetails extends Component {
    static propTypes = {
        route: PropTypes.shape({}),
    };

    static defaultProps = {
        route: {},
    };

    constructor(props){
        super(props);
        this.state= {
            imageLoading: true
        }
    }
    
    render(){
        const { imageLoading } = this.state;
        const {Brand, Variety, Style, Country, Stars, "Top Ten": TopTen, noodleImage} = this.props.route.params;
        return (
            <View>
                <View>
                    <Image 
                        style={styles.detailsImage} 
                        source={{uri: noodleImage}}                                        
                        onLoadEnd={() => {
                            this.setState({ imageLoading: false });
                        }}
                    />
                    {imageLoading && <View style={[styles.detailsImage,styles.activityIndicatorWrap]}><ActivityIndicator style={styles.listAvatar} color="#ccc" /></View>}
                </View>
                <View style={styles.detailsContainer}>                    
                    <Text style={[styles.textBold, styles.detailsBrand]}>{Brand}</Text>
                    <Rating value={Stars != "NaN" ? Stars: 0} size={20} />
                    <Text style={styles.detailsItem}>{Country} | Style - {Style}</Text>
                    <Text style={styles.detailsItem}>{Variety}</Text>
                    {TopTen != "NaN" ? <Text style={[styles.phone,styles.detailsItem]}>{TopTen}</Text>: null}
                </View>
            </View>
        );
    }
}