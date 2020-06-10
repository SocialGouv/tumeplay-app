import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import useIsMounted from '../../../hooks/isMounted';
import TopMenuPortal from './Portal';

import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';
import PropTypes from 'prop-types';

TopMenu.propTypes = {
  selectedTheme: PropTypes.object,
  onPress: PropTypes.func,
  navigation: PropTypes.object,
};

export default function TopMenu(props) {
  const [activeFilter, setActiveFilter] = useState(1);
  const [selectedTheme] = useState(props.selectedTheme);
  const [showMore, setShowMore] = useState(false);
  const [wrapperPadding, setWrapperPadding] = useState(false);
  const [forceRender, setForceRender] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const {width} = Dimensions.get('window');
  const isMounted = useIsMounted();
  const topMenuRef = useRef();
  let useAbsolute = false;

  useEffect(() => {
    if (isMounted.current) {
      const handleScroll = event => {
        if (topMenuRef.current) {
          topMenuRef.current.measure((fx, fy, width, height, px, py) => {
            const scrollTop = event.target.scrollingElement.scrollTop;

            if (py - height < 14) {
              if (!useAbsolute) {
                useAbsolute = true;
                setForceRender(useAbsolute);
              } else {
                if (scrollTop < 50) {
                  useAbsolute = false;
                  setForceRender(useAbsolute);
                }
              }
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMounted]);

  const willFocusSubscription = props.navigation.addListener(
    'willFocus',
    () => {
      setIsMenuVisible(true);
      setForceRender(false);
      useAbsolute = false;
    },
  );

  const willBlurSubscription = props.navigation.addListener('willBlur', () => {
    setForceRender(false);
    useAbsolute = false;
    setIsMenuVisible(false);

    willFocusSubscription.remove();
    willBlurSubscription.remove();
  });

  function _filterContents(key, text) {
    setActiveFilter(key);
    props.onPress(key, text);
  }

  function showMoreIfNeeded(contentWidth) {
    const needMore = contentWidth > width;
    setShowMore(needMore);
    setWrapperPadding(true);
  }

  const menuStyle = StyleSheet.create({
    itemButton: {
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
      flexShrink: 1,
      flexGrow: 1,
      minWidth: 50,
      paddingTop: 9,
      paddingBottom: 7,
      paddingLeft: 18,
      paddingRight: 18,
      borderRadius: 16,
    },
    itemText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontFamily: Colors.textFont,
    },
    normalItemButton: {
      backgroundColor: '#281F22',
    },
    activeItemButton: {
      backgroundColor: Colors.mainButton,
    },
    activeItemText: {
      textDecorationLine: 'none',
      fontFamily: Colors.textFontBold,
    },
    scrollWrapper: {
      flex: 1,
      paddingTop: 3,
      marginTop: 5,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'stretch',
    },
    moreWrapper: {
      position: 'absolute',
      top: 13,
      right: 3,
      zIndex: 1,
      backgroundColor: Colors.backgroundColor,
      padding: 5,
    },
    morePicture: {
      width: 30,
      height: 15,
      resizeMode: 'contain',
    },
  });

  const _menuItems = [
    {id: 1, key: 1, text: 'A poils'},
    {id: 2, key: 2, text: 'Les WTF'},
    {id: 3, key: 3, text: 'Sexploration'},
    {id: 4, key: 4, text: 'Nos droits'},
    {id: 5, key: 5, text: 'Sexysanté'},
  ];

  const _menuButtons = _menuItems.map((item, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={[
          menuStyle.itemButton,
          activeFilter === item.id
            ? menuStyle.activeItemButton
            : menuStyle.normalItemButton,
          {alignSelf: 'flex-start'},
        ]}
        onPress={() => {
          _filterContents(item.id, item.text);
        }}>
        <Text
          style={[
            menuStyle.itemText,
            activeFilter === item.id ? menuStyle.activeItemText : false,
          ]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View>
      <View style={{flex: 0.65, maxHeight: 40, paddingLeft: 15}}>
        <Text style={Styles.tunnelTitle}>{selectedTheme.value}</Text>
      </View>

      {isMenuVisible && (
        <TopMenuPortal portalClass={'top-menu-portal'}>
          <View
            style={{
              position: 'absolute',
              top: 90,
              paddingLeft: 15,
              paddingRight: 15,
              flex: 0.2,
              height: 80,
            }}>
            {!selectedTheme.isSpecial && (
              <View
                style={[
                  forceRender
                    ? {
                        position: 'fixed',
                        top: 45,
                        width: 'calc(100% - 30px)',
                        backgroundColor: 'rgb(17, 7, 11)',
                        paddingTop: 5,
                        paddingBottom: 8,
                      }
                    : {top: 5, position: 'relative'},
                  wrapperPadding ? {paddingRight: 50} : undefined,
                ]}
                ref={topMenuRef}
                forceRender={forceRender}>
                <ScrollView
                  horizontal={true}
                  style={[menuStyle.scrollWrapper]}
                  onContentSizeChange={width => {
                    showMoreIfNeeded(width);
                  }}
                  scrollEventThrottle={16}
                  onScroll={evt => {
                    if (wrapperPadding) {
                      const {
                        contentOffset,
                        contentSize,
                        layoutMeasurement,
                      } = evt.nativeEvent;
                      const {x} = contentOffset;
                      const {width} = contentSize;

                      if (width - x <= layoutMeasurement.width) {
                        setShowMore(false);
                      } else {
                        setShowMore(true);
                      }
                    }
                  }}>
                  {_menuButtons}
                </ScrollView>

                {showMore && (
                  <View style={menuStyle.moreWrapper}>
                    <Image
                      source={require('../../../assets/pictures/menu.show-more.png')}
                      style={menuStyle.morePicture}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </TopMenuPortal>
      )}
    </View>
  );
}
