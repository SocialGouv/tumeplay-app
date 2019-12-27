import React from 'react';

import {
  Image,
  Linking,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

CustomFooter.propTypes = {
  containerStyle: PropTypes.object,
};
export default function CustomFooter(props) {
  // @TODO : Pass this in global configuration
  function _contactMail() {
    Linking.openURL(
      'mailto:contact.tumeplay@fabrique.social.gouv.fr?subject=Tumeplay > Demande de contact',
    );
  }

  const footerStyle = StyleSheet.create({
    text: {
      color: '#FFFFFF',
    },
    link: {
      flexShrink: 1,
      flexGrow: 1,
    },
    textDecoration: {
      textDecorationColor: '#FFFFFF',
      textDecorationLine: 'underline',
      textAlign: 'center',
      fontSize: 13,
    },
  });
  const containerStyle = {
    flex: 0.1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 15,
  };
  return (
    <View style={[containerStyle, props.containerStyle]}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 0.2}}>
          <Image
            source={require('../assets/pictures/logo-ministere.png')}
            style={{marginRight: 15, width: 60, height: 60}}
          />
        </View>
        <View style={{flex: 0.8, paddingLeft: 10}}>
          <View style={{flex: 1, flexDirection: 'column', paddingTop: 3}}>
            <View>
              <Image
                source={require('../assets/pictures/header-left-logo.png')}
                style={{marginRight: 15, width: 115, height: 22}}
              />
            </View>
            <View>
              <Text style={footerStyle.text}>
                Tumeplay est une initiative du Ministère des Solidarités et de
                la Santé.
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 15}}>
          <TouchableOpacity style={footerStyle.link} onPress={_contactMail}>
            <Text style={[footerStyle.text, footerStyle.textDecoration]}>
              Nous contacter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={footerStyle.link}>
            <Text style={[footerStyle.text, footerStyle.textDecoration]}>
              Trouver les lieux utiles
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={footerStyle.link}>
            <Text style={[footerStyle.text, footerStyle.textDecoration]}>
              Lire notre charte
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
