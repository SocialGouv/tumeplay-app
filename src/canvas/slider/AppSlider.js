import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  I18nManager,
} from 'react-native';

import DefaultSlide from './DefaultSlide';
import Colors 		from '../../styles/Color';
import Styles 		from '../../styles/Styles';

const slideHeight 	= 0;
const { width, height } = Dimensions.get('window');

const isIphoneX 	= Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || width === 812);
const isAndroidRTL 	= I18nManager.isRTL && Platform.OS === 'android';

export default class AppSlider extends React.Component 
{
  static defaultProps = 
  {
    activeDotStyle: 
    {
      backgroundColor: Colors.activeDot,
    },
    dotStyle: 
    {
      backgroundColor: Colors.inactiveDot,
    },
    skipLabel		: 'Passer',
    doneLabel		: 'Terminer',
    nextLabel		: 'Suivant',
    prevLabel		: 'Retour',
    buttonStyle		: null,
    buttonTextStyle	: null,
    paginationStyle	: null,
    showDoneButton	: true,
    showNextButton	: true,
    showSkipButton	: true,
  };
  
  state = 
  {
    width,
    height,
    activeIndex: 0,
    slideHeight,
  };

  goToSlide = pageNum => {
    this.setState({ activeIndex: pageNum });
    this.flatList.scrollToOffset({
      offset: this._rtlSafeIndex(pageNum) * this.state.width,
    });
  };

  // Get the list ref
  getListRef = () => this.flatList;

  _onNextPress = () => {
    this.goToSlide(this.state.activeIndex + 1);
    this.props.onSlideChange &&
      this.props.onSlideChange(this.state.activeIndex + 1, this.state.activeIndex);
  };
  _onPrevPress = () => {
    this.goToSlide(this.state.activeIndex - 1);
    this.props.onSlideChange &&
      this.props.onSlideChange(this.state.activeIndex - 1, this.state.activeIndex);
  };

  _onPaginationPress = index => {
    const activeIndexBeforeChange = this.state.activeIndex;
    this.goToSlide(index);
    this.props.onSlideChange && this.props.onSlideChange(index, activeIndexBeforeChange);
  };

  _renderItem = flatListArgs => {
    const { width, height, slideHeight } = this.state;
    const props = { ...flatListArgs, dimensions: { width, height } };
    
    return (
      <View style={{ width }}>
        {this.props.renderItem ? (
          this.props.renderItem(props)
        ) : (
          <DefaultSlide bottomButton={this.props.bottomButton} {...props} />
        )}
      </View>
    );
  };

  _renderButton = (name, onPress) => {
    const show 		= this.props[`show${name}Button`];
    const content 	= this.props[`render${name}Button`] ? this.props[`render${name}Button`]() : this._renderDefaultButton(name);
    
    return show && this._renderOuterButton(content, name, onPress);
  };

  _renderDefaultButton = name => {
    let content = (
      <Text style={[Styles.bottomButtonText, this.props.buttonTextStyle]}>
        {this.props[`${name.toLowerCase()}Label`]}
      </Text>
    );
    if (this.props.bottomButton) {
      content = (
        <View
          style={[
            Styles.bottomButton,
            this.props.buttonStyle,
          ]}
        >
          {content}
        </View>
      );
    }
    return content;
  };

  _renderOuterButton = (content, name, onPress) => {
    return (
      <View style="">
        <TouchableOpacity
          onPress={onPress}
          //style={this.props.bottomButton ? styles.flexOne : this.props.buttonStyle}
          //style={ styles.flexOne }
          
        >
          {content}
        </TouchableOpacity>
      </View>
    );
  };

  _renderNextButton = () => this._renderButton('Next', this._onNextPress);

  _renderPrevButton = () => this._renderButton('Prev', this._onPrevPress);

  _renderDoneButton = () => this._renderButton('Done', this.props.onDone && this.props.onDone);

  _renderSkipButton = () =>
    // scrollToEnd does not work in RTL so use goToSlide instead
    this._renderButton('Skip', () =>
      this.props.onSkip ? this.props.onSkip() : this.goToSlide(this.props.slides.length - 1)
    );

  _renderPagination = () => {
    const isLastSlide = this.state.activeIndex === this.props.slides.length - 1;
    const isFirstSlide = this.state.activeIndex === 0;

    const skipBtn =
      (!isFirstSlide && this._renderPrevButton()) || (!isLastSlide && this._renderSkipButton());
    const btn = isLastSlide ? this._renderDoneButton() : this._renderNextButton();

    return (
      <View style={[styles.paginationContainer, this.props.paginationStyle]}>
        <View style={styles.paginationDots}>
          {this.props.slides.length > 1 &&
            this.props.slides.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.dot,
                  this._rtlSafeIndex(i) === this.state.activeIndex
                    ? this.props.activeDotStyle
                    : this.props.dotStyle,
                ]}
                onPress={() => this._onPaginationPress(i)}
              />
            ))}
        </View>
        {btn}
        {skipBtn}
      </View>
    );
  };

  _rtlSafeIndex = i => (isAndroidRTL ? this.props.slides.length - 1 - i : i);

  _onMomentumScrollEnd = e => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = this._rtlSafeIndex(Math.round(offset / this.state.width));
    if (newIndex === this.state.activeIndex) {
      // No page change, don't do anything
      return;
    }
    const lastIndex = this.state.activeIndex;
    this.setState({ activeIndex: newIndex });
    this.props.onSlideChange && this.props.onSlideChange(newIndex, lastIndex);
  };

  _onLayout = () => {
    const { width, height } = Dimensions.get('window');
    if (width !== this.state.width || height !== this.state.height) {
      // Set new width to update rendering of pages
      
      let slideHeight = height * 0.8;
      
      this.setState({ width, height, slideHeight });
      // Set new scroll position
      const func = () => {
        this.flatList.scrollToOffset({
          offset: this._rtlSafeIndex(this.state.activeIndex) * width,
          animated: false,
        });
      };
      Platform.OS === 'android' ? setTimeout(func, 0) : func();
    }
  };

  render() {
    // Separate props used by the component to props passed to FlatList
    const {
      hidePagination,
      activeDotStyle,
      dotStyle,
      skipLabel,
      doneLabel,
      nextLabel,
      prevLabel,
      buttonStyle,
      buttonTextStyle,
      renderItem,
      data,
      ...otherProps
    } = this.props;

    return (
      <View style={ Styles.flexOne }>
      	<View style={{ flex: 6 }}>
	        <FlatList
	          ref={ref => (this.flatList = ref)}
	          data={this.props.slides}
	          horizontal
	          pagingEnabled
	          showsHorizontalScrollIndicator={false}
	          bounces={false}
	          style={styles.flatList}
	          renderItem={this._renderItem}
	          onMomentumScrollEnd={this._onMomentumScrollEnd}
	          extraData={this.state.width}
	          onLayout={this._onLayout}
	          //{...otherProps}
	        />
        </View>
        <View style={{ flex : 2 }}>
        	{!hidePagination && this._renderPagination()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    flexDirection: 'column',
  },
  flatList: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 1,
    flexShrink: 0,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',  
    //height: '100%',
  },
  paginationContainer: {
	flex: 1,
	//flexDirection: 'column',
	position: 'absolute',
    bottom: 36 + (isIphoneX ? 34 : 0),
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
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