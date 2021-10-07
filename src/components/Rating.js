import React, {Component} from 'react';
import { View, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../common/Styles';
import {ENABLED_STAR, DISABLED_STAR} from '../common/constants';

export default class Rating extends Component {    
    static propTypes = {
        size: PropTypes.number,
        value: PropTypes.number
    };

    static defaultProps = {
        size: 20,
        value: 0
    };
    render(){

        const {value, size} = this.props;
        const ratingData = [1,2,3,4,5];
        return (
            <View style={styles.ratingContainer}>
                <View style={styles.ratingWrap}>
                    <FlatList 
                        data={ratingData} 
                        horizontal 
                        showsHorizontalScrollIndicator={false}  
                        keyExtractor={index=>'disabled'+index} 
                        renderItem={()=>(<Image style={styles.ratingImage(size)} source={{uri: DISABLED_STAR}} />)} 
                    />
                </View>
                <View style={styles.rating(size * value)}>
                    <FlatList data={ratingData} 
                        horizontal 
                        showsHorizontalScrollIndicator={false} 
                        keyExtractor={index=>'enabled'+index} 
                        renderItem={()=>(<Image style={styles.ratingImage(size)} source={{uri: ENABLED_STAR}} />)} 
                    />
                </View>
            </View>
        );
    }
}