import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  I18nManager,
} from 'react-native';
import PropTypes from 'prop-types';

import SliderPagination from '../../screens/components/slider/SliderPagination';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';

const {width, height} = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);
const isAndroidRTL = I18nManager.isRTL && Platform.OS === 'android';

AppSlider.propTypes = {
  slides: PropTypes.array,
  onSlideChange: PropTypes.func,
  onSkip: PropTypes.func,
  renderItem: PropTypes.func,
  buttonTextStyle: PropTypes.object,
  bottomButton: PropTypes.bool,
  buttonStyle: PropTypes.object,
};

export default function AppSlider(props) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const [flatList, setFlatList] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(pageNum) {
    setActiveIndex(pageNum);
    flatList.scrollToOffset({
      offset: _rtlSafeIndex(pageNum) * dimensions.width,
    });
  }

  function _onPaginationPress(index) {
    const activeIndexBeforeChange = activeIndex;
    goToSlide(index);
    props.onSlideChange && props.onSlideChange(index, activeIndexBeforeChange);
  }

  function _renderItem(flatListArgs) {
    const localProps = {...flatListArgs, dimensions: {width, height}};

    const localStyle =
      Platform.OS == 'web'
        ? {
            width: dimensions.width,
            height: dimensions.height,
            minHeight: Dimensions.get('window').height * 0.7,
            marginBottom: 70,
            flex: 1,
          }
        : {width, flex: 1};

    return <View style={localStyle}>{props.renderItem(localProps)}</View>;
  }

  function _renderButton(name, onPress) {
    const show = props[`show${name}Button`];
    const content = props[`render${name}Button`]
      ? props[`render${name}Button`]()
      : _renderDefaultButton(name);

    return show && _renderOuterButton(content, name, onPress);
  }

  function _renderDefaultButton(name) {
    let content = (
      <Text style={[Styles.bottomButtonText, props.buttonTextStyle]}>
        {props[`${name.toLowerCase()}Label`]}
      </Text>
    );
    if (props.bottomButton) {
      content = (
        <View style={[Styles.bottomButton, props.buttonStyle]}>{content}</View>
      );
    }
    return content;
  }

  function _renderOuterButton(content, name, onPress) {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
      </View>
    );
  }

  function _renderSkipButton() {
    // scrollToEnd does not work in RTL so use goToSlide instead
    return _renderButton('Skip', () =>
      props.onSkip ? props.onSkip() : goToSlide(props.slides.length - 1),
    );
  }
  function _renderPagination() {
    const skipBtn = _renderSkipButton();

    return (
      <SliderPagination
        isIphoneX={isIphoneX}
        activeIndex={activeIndex}
        skipBtn={skipBtn}
        slides={props.slides}
        onPress={_onPaginationPress}
      />
    );
  }

  function _rtlSafeIndex(i) {
    return isAndroidRTL ? props.slides.length - 1 - i : i;
  }

  function _onMomentumScrollEnd(e) {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = _rtlSafeIndex(Math.round(offset / width));

    if (newIndex === activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = activeIndex;
    setActiveIndex(newIndex);
    props.onSlideChange && props.onSlideChange(newIndex, lastIndex);
  }

  return (
    <View style={styles.flexOne}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
        }}>
        <Image
          source={require('../../assets/pictures/boarding-logo.png')}
          style={{marginTop: 20, width: 200, height: 55, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 6, backgroundColor: Colors.backgroundColor}}>
        <FlatList
          ref={ref => setFlatList(ref)}
          data={props.slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          renderItem={_renderItem}
          onScrollEndDrag={_onMomentumScrollEnd}
          extraData={(width, height)}
          onLayout={event => {
            const {width, height} = event.nativeEvent.layout;
            setDimensions({width: width, height: height});
          }}
          contentContainerStyle={{}}
          //{...otherProps}
        />
      </View>
      <View style={{flex: 1.5}}>{_renderPagination()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    flexDirection: 'column',
    /*height: '100%',
    flexBasis: '100%',
    alignItems: 'stretch',
    alignSelf: 'stretch',*/
    backgroundColor: Colors.backgroundColor,
  },
  flatList: {
    flex: 1,
    /*flexBasis: '100%',*/

    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    //height: '100%',
  },
});
