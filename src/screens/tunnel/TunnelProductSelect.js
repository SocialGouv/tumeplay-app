import React, {useState, useEffect, forwardRef} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import Styles from '../../styles/Styles';

import RemoteApi from '../../services/RemoteApi';

import CustomFooter from '../CustomFooter';
import ContactButton from '../components/global/ContactButton';
import ProductCard from '../components/tunnel/ProductCard';
import ProductModal from '../components/tunnel/ProductModal';
import ProductSelectHeader from '../components/tunnel/ProductSelectHeader';

import useIsMounted from '../../hooks/isMounted';
import autoScrollToTop from '../../hooks/autoScrollToTop';

TunnelProductSelect.propTypes = {
  navigation: PropTypes.object,
};
export default function TunnelProductSelect(props) {
  const [selectedItem, setSelectedItem] = useState({});
  const [localBoxs, setLocalBoxs] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const isMounted = useIsMounted();

  autoScrollToTop(props);

  useEffect(() => {
    async function _fetchBoxs() {
      const _boxs = await RemoteApi.fetchBoxsData();

      if (isMounted.current) {
        setLocalBoxs(_boxs.boxs);
        setAllProducts(_boxs.products);
      }
    }

    _fetchBoxs();
  }, [isMounted]);

  function _onBoxClicked(selectedItem) {
    setSelectedItem(selectedItem);
    setShowModal(true);
  }

  function _toggleModal() {
    setShowModal(!showModal);
  }

  const ForwardedBoxModal = forwardRef(() => (
    <ProductModal
      onOrder={_onOrder}
      showModal={showModal}
      item={selectedItem}
      allProducts={allProducts}
      onClose={_toggleModal}
    />
  ));

  function _onOrder(selectedProducts) {
    setShowModal(false);

    props.navigation.navigate('TunnelDeliverySelect', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
    });
  }

  function _renderBoxsCards() {
    return localBoxs.map((item, key) => {
      return (
        <ProductCard
          key={key}
          item={item}
          onPress={() => _onBoxClicked(item)}
        />
      );
    });
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={[Styles.safeAreaViewInner, {flex: 1}]}>
        <ScrollView style={{flex: 0.9}}>
          <ProductSelectHeader />

          {_renderBoxsCards()}

          <ContactButton />

          <CustomFooter containerStyle={{paddingLeft: 0, paddingRight: 0}} />
        </ScrollView>
        <ForwardedBoxModal />
      </View>
    </SafeAreaView>
  );
}
