import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Modal from 'react-native-modal';

import ProductContentList from './ProductContentList';
import ProductCustomSelectList from './ProductCustomSelectList';

import ModalCloseButton from '../global/ModalCloseButton';
import Styles from '../../../styles/Styles';
import Colors from '../../../styles/Color';
import ModalStyle from '../../../styles/components/Modal';

ProductModal.propTypes = {
  item: PropTypes.object,
  onOrder: PropTypes.func,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
  allProducts: PropTypes.array,
};

export default function ProductModal(props) {
  const [productBox] = useState(props.item);
  const [showModal] = useState(props.showModal);
  const [allProducts] = useState(props.allProducts);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);

  const screenWidth = Math.round(Dimensions.get('window').width);
  const cardStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 7,
      marginTop: 20,
    },
    buttonWrapper: {
      flex: 1,
    },
    picture: {
      height: 250,
      width: '100%',
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
    },
    textContainer: {
      padding: 15,
    },
    title: {
      color: '#F1732C',
      fontSize: 28,
      fontFamily: Colors.titleCard,
    },
    subtitle: {
      color: '#F1732C',
      fontSize: 20,
    },
    text: {
      color: '#4F4F4F',
      fontSize: 14,
      marginBottom: 25,
      marginTop: 10,
      lineHeight: 22,
    },

    readMoreWrapper: {
      position: 'absolute',
      right: 15,
      bottom: 15,
    },
    readMore: {
      color: '#F1732C',
    },
    internalScrollView: {
      flex: 1,
      paddingBottom: screenWidth < 400 ? 95 : 0,
    },
    innerProductModal: {
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 7,
      marginLeft: screenWidth < 400 ? 7 : 'auto',
      marginRight: screenWidth < 400 ? 7 : 'auto',
      paddingLeft: 0,
      paddingRight: 0,
    },
  });

  useEffect(() => {
    let _total = 0;

    for (const localProduct of selectedItems) {
      _total += localProduct.qty;
    }

    setTotalProducts(_total);
  }, [selectedItems]);

  function onOrder() {
    props.onOrder(selectedItems);
  }

  function onSelectChange(selectedItems) {
    setSelectedItems(selectedItems);
  }

  if (productBox.title === undefined) {
    return <View></View>;
  }
  return (
    <Modal
      visible={showModal}
      isVisible={showModal}
      style={ModalStyle.modal}
      animationType="fade"
      backdropOpacity={0}
      transparent={true}>
      <View style={ModalStyle.backdrop}></View>

      <View style={[ModalStyle.innerModal, cardStyle.innerProductModal]}>
        <ModalCloseButton onClose={props.onClose} />

        <ScrollView style={cardStyle.internalScrollView}>
          <View>
            <Image style={cardStyle.picture} source={productBox.picture} />
          </View>
          <View
            style={{
              marginTop: 15,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            <Text style={cardStyle.title}>{productBox.title}</Text>
            <Text style={cardStyle.text}>{productBox.description}</Text>
          </View>

          {productBox && productBox.products.length > 0 && (
            <View style={{paddingLeft: 15, paddingRight: 15}}>
              <Text style={cardStyle.subtitle}>
                Ce que tu trouveras dans ta box :
              </Text>

              <ProductContentList item={productBox} />
            </View>
          )}
          {productBox && productBox.products.length === 0 && (
            <View
              style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 80}}>
              <ProductCustomSelectList
                onSelectChange={onSelectChange}
                allProducts={allProducts}
                item={productBox}
              />
            </View>
          )}
        </ScrollView>
        <View
          style={{
            marginTop: 15,
            marginBottom: 15,
            position: 'absolute',
            bottom: 30,
            width: '100%',
          }}>
          {productBox && productBox.products.length === 0 && totalProducts < 4 && (
            <TouchableOpacity
              style={[Styles.bottomButton, {borderRadius: 25, opacity: 0.75}]}>
              <Text style={[Styles.bottomCommText]}>
                {totalProducts}/4 Produits
              </Text>
            </TouchableOpacity>
          )}
          {productBox &&
            (productBox.products.length > 0 || totalProducts >= 4) && (
              <TouchableOpacity
                style={[Styles.bottomButton, {borderRadius: 25}]}
                onPress={onOrder}>
                <Text style={Styles.bottomCommText}>Commander</Text>
              </TouchableOpacity>
            )}
        </View>
      </View>
    </Modal>
  );
}
