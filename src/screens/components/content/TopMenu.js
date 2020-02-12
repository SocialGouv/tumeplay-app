import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';
import PropTypes from 'prop-types';

TopMenu.propTypes = {
  selectedTheme: PropTypes.object,
  onPress: PropTypes.func,
};

export default function TopMenu(props) {
  const [activeFilter, setActiveFilter] = useState(1);
  const [selectedTheme] = useState(props.selectedTheme);
  const [showMore, setShowMore] = useState(false);
  const [wrapperPadding, setWrapperPadding] = useState(false);
  const {width} = Dimensions.get('window');

  function _filterContents(key) {
    setActiveFilter(key);
    props.onPress(key);
  }

  function showMoreIfNeeded(contentWidth) {
    const needMore = contentWidth > width;
    setShowMore(needMore);
    setWrapperPadding(true);
  }

  const menuStyle = StyleSheet.create({
    itemButton: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      flexShrink: 1,
      flexGrow: 1,
      minWidth: 105,
      width: '20%',
      paddingTop: 4,
      paddingBottom: 4,
    },
    itemText: {
      color: '#FFFFFF',
      textAlign: 'center',
      textDecorationLine: 'underline',
      fontFamily: Colors.textFont,
    },
    normalItemButton: {
      backgroundColor: Colors.backgroundColor,
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
      paddingTop: 8,
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
          _filterContents(item.id);
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
    <View style={{flex: 0.2, maxHeight: 80}}>
      <View style={{flex: 0.65, maxHeight: 40}}>
        <Text style={Styles.tunnelTitle}>{selectedTheme.value}</Text>
      </View>
      {!selectedTheme.isSpecial && (
        <View
          style={[
            {position: 'relative'},
            wrapperPadding ? {paddingRight: 50} : undefined,
          ]}>
          <ScrollView
            horizontal={true}
            style={[menuStyle.scrollWrapper]}
            onContentSizeChange={(width) => {
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
  );
}
