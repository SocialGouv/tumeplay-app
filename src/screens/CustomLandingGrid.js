import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  YellowBox,
} from 'react-native';

export default class CustomHeaderLeft extends React.Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  _goBackToContent = () => {
    console.log(this.props);
    this.props.navigation.navigate('LandingScreen');
  };

  render() {
    const _backPicture = require('../assets/pictures/back-arrow.png');
    const _logoPicture = require('../assets/pictures/full-logo.png');
    const _localStyle = StyleSheet.create({
      logo: {
        marginLeft: 15,
        width: 150,
        height: 32,
      },
      back: {
        marginTop: -7,
        marginLeft: 15,
        height: 16,
        width: 16,
      },
    });
    if (this.props.withBack) {
      return (
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={this._goBackToContent}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={_backPicture} style={_localStyle.back} />

            <Image
              source={_logoPicture}
              style={[_localStyle.logo, {marginLeft: 5}]}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return <Image source={_logoPicture} style={_localStyle.logo} />;
    }
  }
}
