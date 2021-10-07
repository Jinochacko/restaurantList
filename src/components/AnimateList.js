
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View } from 'react-native';

export default class AnimateList extends Component {
  static propTypes = {
    index: PropTypes.number,
    renderContent: PropTypes.any,
    direction: PropTypes.string
  };

  static defaultProps = {
    index: 0,
    renderContent: <View />,
    direction: "x"
  };

  constructor(props) {
    super(props);
    this.delayValue = 1000;
    this.state = {
      animatedValue: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    Animated.spring(this.state.animatedValue, {
      toValue: 1,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { index, renderContent, direction } = this.props;
    this.delayValue = (index + 1) * 1000;
    const translate = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.delayValue, 1],
    });
    const translateValue = direction == "x" ? { translateX : translate} : { translateY : translate};

    return (
      <Animated.View style={{ transform: [ translateValue ] }}>
        {renderContent}
      </Animated.View>
    );
  }
}
