import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
          _onDone(item.id);
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
      <View>
        <ScrollView
          horizontal={true}
          style={{
            flex: 1,
            paddingTop: 8,
            marginTop: 5,
            flexDirection: 'row',
            // justifyContent: 'center',
            flexWrap: 'nowrap',
            alignContent: 'stretch',
          }}>
          {_menuButtons}
        </ScrollView>
      </View>
    </View>
  );
}
