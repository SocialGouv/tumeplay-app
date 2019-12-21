import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import Backlink from '../components/tunnel/Backlink';

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

TunnelPickupSelect.propTypes = {
  navigation: PropTypes.object,
};
export default function TunnelPickupSelect(props) {
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [selectedProducts] = useState(
    props.navigation.state.params.selectedProducts,
  );

  function _onDone() {
    props.navigation.navigate('TunnelUserAddress', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
    });
  }

  function _goBack() {
    props.navigation.navigate('TunnelDeliverySelect', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
    });
  }

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
      <Backlink step={2} onPress={_goBack} />

      <View style={{flex: 0.3, paddingTop: 15}}>
        <Text style={Styles.tunnelTitle}>Choisis le lieu de livraison</Text>
        <Text style={Styles.textLeft}>Affichage de la carte</Text>
      </View>
      <View style={stylevalide}>
        <TouchableOpacity
          style={[Styles.bottomButton, {borderRadius: 25}]}
          onPress={_onDone}>
          <View style={{paddingTop: 8, paddingBottom: 8}}>
            <Text style={Styles.tunnelButtonText}>Valider</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
