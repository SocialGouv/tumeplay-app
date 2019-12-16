import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import Backlink from '../components/tunnel/Backlink';

/*TunnelDeliverySelect.propTypes = {
  navigation: PropTypes.object,
}; */

export default class TunnelDeliverySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: this.props.navigation.state.params.selectedItem,
    };
  }

  _onDone = deliveryType => {
    if (deliveryType == 'home') {
      this.props.navigation.navigate('TunnelUserAddress', {
        selectedItem: this.state.selectedItem,
        deliveryType: deliveryType,
      });
    } else {
      this.props.navigation.navigate('TunnelPickupSelect', {
        selectedItem: this.state.selectedItem,
        deliveryType: deliveryType,
      });
    }
  };

  _goBack = () => {
    this.props.navigation.navigate('TunnelProductSelect');
  };

  render() {
    console.log(Styles.tunnelButton);
    return (
      <View
        style={[
          Styles.flexOne,
          {
            flexBasis: 'auto',
            backgroundColor: Colors.backgroundColor,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
            paddingBottom: 15,
          },
        ]}>
        <Backlink step={1} onPress={this._goBack} />

        <View style={{flex: 0.4}}>
          <Text style={Styles.tunnelTitle}>Choisis le mode de livraison</Text>
          <Text style={{color: '#FFFFFF', fontSize: 16, marginTop: 15}}>
            Nous te livrons sous 4 jours à domicile ou en points relais ! Nos
            boîtes sont 100% discrètes ;)
          </Text>
        </View>
        <View style={{flex: 0.4}}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingTop: 2,
              paddingBottom: 2,
              width: '50%',
              maxHeight: 70,
              alignSelf: 'center',
            }}
            onPress={() => {
              this._onDone('home');
            }}>
            <View style={Styles.tunnelButton}>
              <Text style={Styles.tunnelButtonText}>A domicile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingTop: 2,
              paddingBottom: 2,
              width: '50%',
              maxHeight: 70,
              alignSelf: 'center',
            }}
            onPress={() => {
              this._onDone('pickup');
            }}>
            <View style={Styles.tunnelButton}>
              <Text style={Styles.tunnelButtonText}>En point relais</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
