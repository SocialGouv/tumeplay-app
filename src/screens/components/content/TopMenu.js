import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  YellowBox,
  StyleSheet,
} from 'react-native';

import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _onReadMoreClick = () => {
    const content = this.state.content;

    if (content.numberOfLines == 0) {
      content.numberOfLines = 3;
    } else {
      content.numberOfLines = 0;
    }

    this.setState({content: content});
  };

  render() {
    const menuStyle = StyleSheet.create({
      itemButton: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        flexShrink: 1,
        flexGrow: 1,
      },
      itemText: {
        color: '#FFFFFF',
        textAlign: 'center',
      },
      normalItemButton: {
        backgroundColor: Colors.backgroundColor,
      },
      activeItemButton: {
        backgroundColor: Colors.mainButton,
      },
      activeItemText: {},
    });

    const _menuItems = [
      {id: 0, key: 0, text: 'A poils'},
      {id: 1, key: 0, text: 'Les WTF'},
      {id: 2, key: 0, text: 'Sexploration'},
      {id: 3, key: 0, text: 'Nos droits'},
      {id: 4, key: 0, text: 'Sexysanté'},
    ];

    const _currentActive = this.state.activeFilter;

    const _menuButtons = _menuItems.map((item, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={[
            menuStyle.itemButton,
            _currentActive == key
              ? menuStyle.activeItemButton
              : menuStyle.normalItemButton,
            {alignSelf: 'flex-start'},
          ]}
          onPress={this._onDone}>
          <Text style={menuStyle.itemText}>{item.text}</Text>
        </TouchableOpacity>
      );
    });

    return (
      <View style={{flex: 0.1, maxHeight: 60}}>
        <View style={{flex: 0.7}}>
          <Text style={Styles.tunnelTitle}>Tes premières fois</Text>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
          }}>
          <View
            style={{
              flex: 1,
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
}
