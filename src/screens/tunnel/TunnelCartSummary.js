import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';

import Backlink from '../components/tunnel/Backlink';
import ProductContentList from '../components/tunnel/ProductContentList';
import PropTypes from 'prop-types';

import Styles from '../../styles/Styles';

import TunnelCartSummaryStyle from '../../styles/components/TunnelCartSummary';

const {detect} = require('detect-browser');
const browser = detect();

/*
TunnelCartSummary.propTypes = {
  navigation: PropTypes.object,
}; */

export default class TunnelCartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: this.props.navigation.state.params.selectedItem,
      userAdress: this.props.navigation.state.params.userAdress,
    };
  }

  _onDone = () => {
    this.props.navigation.navigate('TunnelOrderConfirm', {
      selectedItem: this.state.selectedItem,
      userAdress: this.state.userAdress,
    });
  };

  _goBack = () => {
    this.props.navigation.navigate('TunnelUserAddress', {
      selectedItem: this.state.selectedItem,
      userAdress: this.state.userAdress,
    });
  };

  render() {
    const selectedProduct = this.state.selectedItem;
    return (
      <ScrollView style={[Styles.flexOne, TunnelCartSummaryStyle.container]}>
        <Backlink step={4} onPress={this._goBack} />

        <View style={{flex: 0.1}}>
          <Text style={Styles.tunnelTitle}>Ton récapitulatif</Text>
        </View>
        <View style={TunnelCartSummaryStyle.splitterWrapper}>
          <Image
            style={TunnelCartSummaryStyle.splitterPicture}
            source={require('../../assets/pictures/splitter.png')}
          />
        </View>
        <View style={{flex: 0.2, marginBottom: 15}}>
          <Text style={TunnelCartSummaryStyle.title}>Tes articles</Text>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 7,
              justifyContent: 'center',
            }}>
            <View style={{flex: 0.35}}>
              <Image
                source={selectedProduct.picture}
                style={{
                  height: 150,
                  borderTopLeftRadius: 7,
                  borderBottomLeftRadius: 7,
                  resizeMode: 'cover',
                  width: '100%',
                }}
              />
            </View>
            <View style={{flex: 0.65, paddingLeft: 5}}>
              <Text style={TunnelCartSummaryStyle.productTitle}>
                {selectedProduct.title}
              </Text>
              <ProductContentList shortMode={true} item={selectedProduct} />
            </View>
          </View>
        </View>
        <View style={TunnelCartSummaryStyle.splitterWrapper}>
          <Image
            style={TunnelCartSummaryStyle.splitterPicture}
            source={require('../../assets/pictures/splitter.png')}
          />
        </View>
        <View style={{flex: 0.15}}>
          <View style={{flex: 0.2}}>
            <Text style={TunnelCartSummaryStyle.title}>
              Adresse de livraison
            </Text>
          </View>
          <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
            <View>
              <Image
                style={TunnelCartSummaryStyle.pictureAndTextPicture}
                source={require('../../assets/pictures/map-pin.png')}
              />
            </View>
            <View>
              <Text
                style={[
                  TunnelCartSummaryStyle.subTitle,
                  TunnelCartSummaryStyle.emailAdress,
                ]}>
                {this.state.userAdress.firstName}{' '}
                {this.state.userAdress.lastName}
              </Text>
              <Text style={[TunnelCartSummaryStyle.subTitle]}>
                {this.state.userAdress.adress}
              </Text>
            </View>
          </View>
        </View>
        <View style={TunnelCartSummaryStyle.splitterWrapper}>
          <Image
            style={TunnelCartSummaryStyle.splitterPicture}
            source={require('../../assets/pictures/splitter.png')}
          />
        </View>
        <View style={{flex: 0.15}}>
          <Text style={[TunnelCartSummaryStyle.subTitle, {marginBottom: 8}]}>
            Nous t&apos;enverrons un mail pour t&apos;informer de
            l&apos;expédition de ta commande à :
          </Text>
          <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
            <Image
              style={TunnelCartSummaryStyle.pictureAndTextPicture}
              source={require('../../assets/pictures/letterbox.png')}
            />

            <Text
              style={[
                TunnelCartSummaryStyle.subTitle,
                TunnelCartSummaryStyle.emailAdress,
              ]}>
              {this.state.userAdress.emailAdress}
            </Text>
          </View>
          <Text style={[TunnelCartSummaryStyle.subTitle, {marginTop: 10}]}>
            * Livraison prévue entre le XX et le XX
          </Text>
        </View>

        <View style={{flex: 0.25, height: 60, marginTop: 15, marginBottom: 25}}>
          <TouchableOpacity
            style={{
              flex: 1,

              paddingTop: 2,
              paddingBottom: 2,
              width: '50%',
              maxHeight: 70,
              alignSelf: 'center',
            }}
            onPress={this._onDone}>
            <View style={Styles.tunnelButton}>
              <Text style={Styles.tunnelButtonText}>Valider</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
