import React from 'react';
import {Text, View, TouchableOpacity, YellowBox, Image} from 'react-native';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
const {detect} = require('detect-browser');
const browser = detect();
let tumetitlestyle, infostyle;
if (browser) {
  tumetitlestyle = {
    flex: 0.4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  };
  infostyle = {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  };
} else {
  tumetitlestyle = {flex: 0.1, paddingLeft: 10, paddingRight: 10};
  infostyle = {flex: 0.12, paddingLeft: 10, paddingRight: 10};
}

export default class TunnelCartSummary extends React.Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  _onDone = () => {
    this.props.navigation.navigate('TunnelOrderConfirm');
  };

  _goBack = () => {
    this.props.navigation.navigate('TunnelUserAddress');
  };

  render() {
    return (
      <View
        style={[
          Styles.flexOne,
          {
            backgroundColor: Colors.backgroundColor,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          },
        ]}>
        <View style={{flex: 0.06}}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingTop: 2,
              paddingBottom: 2,
              width: '100%',
              maxHeight: 70,
            }}
            onPress={this._goBack}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}>
              <Image
                style={{
                  width: 17,
                  height: 17,
                  marginRight: 10,
                  resizeMode: 'contain',
                }}
                source={require('../../assets/pictures/left-arrow.png')}
              />

              <Text style={{color: '#FFFFFF'}}>Etape 4</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tumetitlestyle}>
          <Text style={Styles.tunnelTitle}>Ton récapitulatif</Text>
        </View>
        <View style={infostyle}>
          <Text style={Styles.labelText}>Tes articles</Text>
        </View>
        <View style={infostyle}>
          <Text style={Styles.labelText}>Adresse de livraison</Text>
        </View>
        <View style={infostyle}></View>
        <View style={infostyle}>
          <Text style={Styles.labelText}>
            Nous t&apos;enverrons un mail pour t&apos;informer de
            l&apos;expédition de ta commande à :
          </Text>
          <Text style={Styles.labelText}>john@mail.com</Text>
        </View>
        <View style={Styles.viewopacitytunneletap4}>
          <View
            style={{
              flex: 0.5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 40,
            }}>
            <Text style={Styles.placeholderText}>
              * Livraison prévue entre le XX et le XX
            </Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, paddingBottom: 2, width: '50%'}}
            onPress={this._onDone}>
            <View style={Styles.tunnelButton}>
              <Text style={Styles.tunnelButtonText}>Valider</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
