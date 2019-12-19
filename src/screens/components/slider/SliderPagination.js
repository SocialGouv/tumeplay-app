import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../../styles/Color';

SliderPagination.propTypes = {
  onPress: PropTypes.func,
  slides: PropTypes.array,
  isIphoneX: PropTypes.bool,
  activeIndex: PropTypes.number,
  skipBtn: PropTypes.object,
  paginationStyle: PropTypes.object,
};

export default function SliderPagination(props) {
  const defaultProps = {
    activeDotStyle: {
      backgroundColor: Colors.activeDot,
    },
    dotStyle: {
      backgroundColor: Colors.inactiveDot,
    },
    paginationStyle: null,
  };

  const styles = StyleSheet.create({
    paginationContainer: {
      flex: 1,
      //flexDirection: 'column',
      position: 'absolute',
      bottom: 26 + (props.isIphoneX ? 34 : 0),
      left: 16,
      right: 16,
      backgroundColor: undefined,
    },
    paginationDots: {
      height: 16,
      margin: 16,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 4,
    },
  });

  return (
    <View style={[styles.paginationContainer, props.paginationStyle]}>
      <View style={[styles.paginationDots]}>
        {props.slides.length > 1 &&
          props.slides.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.dot,
                i === props.activeIndex
                  ? // @TODO : Inject _rtlSafeIndxe ? _rtlSafeIndex(i) === activeIndex
                    defaultProps.activeDotStyle
                  : defaultProps.dotStyle,
              ]}
              onPress={() => props.onPress(i)}
            />
          ))}
      </View>
      {props.skipBtn}
    </View>
  );
}
