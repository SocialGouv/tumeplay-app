import React from 'react';
import {View, SafeAreaView, ScrollView, YellowBox} from 'react-native';

import Styles from '../../styles/Styles';

import RemoteApi from '../../services/RemoteApi';

import CustomFooter from '../CustomFooter';
import ContactButton from '../components/global/ContactButton';
import ProductCard from '../components/tunnel/ProductCard';
import ProductModal from '../components/tunnel/ProductModal';

export default class TunnelProductSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localProducts: [],
      selectedItem: false,
      showModal: false,
      modalObject: false,
    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  componentDidMount() {
    this._isMounted = true;
    this._fetchProducts();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _fetchProducts = async () => {
    const _products = await RemoteApi.fetchProducts();

    if (this._isMounted) {
      this.setState({localProducts: _products});
    }
  };

  _onDone = () => {
    this.props.navigation.navigate('LandingScreen');
  };

  _onProductClicked = clickedProduct => {
    console.log(clickedProduct);
    this.modalObject._updateProductBox(clickedProduct);
    this.modalObject._toggleModal();
  };

  _renderProductsCards = () => {
    return this.state.localProducts.map((item, key) => {
      return (
        <ProductCard
          key={key}
          item={item}
          onPress={() => this._onProductClicked(item)}
        />
      );
    });
  };

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
          <ScrollView style={{flex: 0.9}}>
            {this._renderProductsCards()}

            <ContactButton />

            <CustomFooter />
          </ScrollView>
          <ProductModal
            ref={modal => {
              this.modalObject = modal;
            }}
            showModal={this.state.showModal}
            item={this.state.selectedItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}
