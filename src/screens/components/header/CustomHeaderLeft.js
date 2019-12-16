import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

CustomHeaderLeft.propTypes = {
  navigation: PropTypes.object,
  withBack: PropTypes.object,
};

export default function CustomHeaderLeft(props) {
  function _goBackToContent() {
    props.navigation.navigate('LandingScreen');
  }

  const _backPicture = require('../../../assets/pictures/header-left-arrow.png');
  const _logoPicture = require('../../../assets/pictures/header-left-logo.png');
  const _localStyle = StyleSheet.create({
    logo: {
      marginLeft: 15,
      width: 160,
      height: 30,
    },
    back: {
      marginTop: 3,
      marginLeft: 20,
      height: 15,
      width: 15,
    },
  });

  //@TODO : Improve this part. A lot.
  if (props.withBack) {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={_goBackToContent}
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
