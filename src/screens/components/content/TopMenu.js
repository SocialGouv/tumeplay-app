import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';
import PropTypes from 'prop-types';

TopMenu.propTypes = {
  selectedTheme: PropTypes.object,
  onPress: PropTypes.func,
};

export default function TopMenu(props) {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedTheme] = useState(props.selectedTheme);

  function _onDone(key) {
    setActiveFilter(key);
    props.onPress(key);
  }

  const menuStyle = StyleSheet.create({
    itemButton: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      flexShrink: 1,
      flexGrow: 1,

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
  });

  const _menuItems = [
    {id: 0, key: 0, text: 'A poils'},
    {id: 1, key: 0, text: 'Les WTF'},
    {id: 2, key: 0, text: 'Sexploration'},
    {id: 3, key: 0, text: 'Nos droits'},
    {id: 4, key: 0, text: 'Sexysanté'},
  ];

  const _menuButtons = _menuItems.map((item, key) => {
    return (
      <TouchableOpacity
        key={key}
        style={[
          menuStyle.itemButton,
          activeFilter == key
            ? menuStyle.activeItemButton
            : menuStyle.normalItemButton,
          {alignSelf: 'flex-start'},
        ]}
        onPress={() => {
          _onDone(key);
        }}>
        <Text
          style={[
            menuStyle.itemText,
            activeFilter == key ? menuStyle.activeItemText : false,
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
      <View
        style={{
          flex: 0.35,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,
            paddingTop: 8,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            alignContent: 'stretch',
          }}>
          {_menuButtons}
        </View>
      </View>
    </View>
  );
}
