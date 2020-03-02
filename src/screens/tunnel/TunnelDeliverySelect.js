import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import Backlink from '../components/tunnel/Backlink';

TunnelDeliverySelect.propTypes = {
  navigation: PropTypes.object,
};

export default function TunnelDeliverySelect(props) {
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [selectedProducts] = useState(
    props.navigation.state.params.selectedProducts,
  );

  function _onDone(deliveryType) {
    const _params = {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
      deliveryType: deliveryType,
    };
    if (deliveryType == 'home') {
      props.navigation.navigate('TunnelUserAddress', _params);
    } else {
      props.navigation.navigate('TunnelPickupSelect', _params);
    }
  }

  function _goBack() {
    props.navigation.navigate('TunnelProductSelect');
  }

  return (
    <View
      style={[
        Styles.flexOne,
        {
          flexBasis: 'auto',
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
          paddingBottom: 15,
        },
      ]}>
      <Backlink step={1} onPress={_goBack} />

      <View style={{flex: 0.4}}>
        <Text style={Styles.tunnelTitle}>Choisis le mode de livraison</Text>
        <Text style={{color: '#FFFFFF', fontSize: 16, marginTop: 15}}>
          Nous ferons de notre mieux pour te livrer au plus vite ! Nos box sont
          100% discrètes ;)
        </Text>
      </View>
      <View style={{flex: 0.4, marginTop: 30}}>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingTop: 2,
            paddingBottom: 2,
            width: '50%',
            height: 60,
            maxHeight: 60,
            alignSelf: 'center',
          }}
          onPress={() => _onDone('home')}>
          <View style={Styles.tunnelButton}>
            <Text style={Styles.tunnelButtonText}>A domicile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 60,
            maxHeight: 60,
            paddingTop: 2,
            paddingBottom: 2,
            width: '50%',
            alignSelf: 'center',
          }}
          onPress={() => _onDone('pickup')}>
          <View style={Styles.tunnelButton}>
            <Text style={Styles.tunnelButtonText}>En point relais</Text>
          </View>
        </TouchableOpacity>
        <Text style={{color: '#FFFFFF', fontSize: 16, marginTop: 15}}>
          Actuellement la commande de box est disponible en Seine-et-Marne et en
          Nouvelle-Aquitaine.
        </Text>
      </View>
    </View>
  );
}
