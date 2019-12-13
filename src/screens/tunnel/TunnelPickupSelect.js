import React from 'react';
import {Text, Image, View, TouchableOpacity, YellowBox} from 'react-native';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
const {detect} = require('detect-browser');
const browser = detect();
let stylevalide;

if (browser) {
  stylevalide = {
    flex: 1,
    position: 'absolute',
    top: 430,
    left: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };
} else {
  stylevalide = {
    flex: 1,
    position: 'absolute',
    bottom: 45,
    left: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };
}
export default class TunnelPickupSelect extends React.Component {
  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  _onDone = () => {
    this.props.navigation.navigate('TunnelUserAddress');
  };

  _goBack = () => {
    this.props.navigation.navigate('TunnelDeliverySelect');
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
        <View style={{flex: 0.05}}>
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

              <Text style={{color: '#FFFFFF'}}>Etape 2</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.3, paddingTop: 15}}>
          <Text style={Styles.tunnelTitle}>Choisis le lieu de livraison</Text>
          <Text style={Styles.textLeft}>Affichage de la carte</Text>
        </View>
        <View style={stylevalide}>
          <TouchableOpacity
            style={[Styles.bottomButton, {borderRadius: 25}]}
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
