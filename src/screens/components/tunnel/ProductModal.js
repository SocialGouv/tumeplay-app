import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Modal from 'react-native-modal';

import ProductContentList from './ProductContentList';

import ModalCloseButton from '../global/ModalCloseButton';
import Styles from '../../../styles/Styles';
import ModalStyle from '../../../styles/components/Modal';

ProductModal.propTypes = {
  item: PropTypes.object,
  onOrder: PropTypes.func,
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
};

export default function ProductModal(props) {
  const [productBox] = useState(props.item);
  const [showModal] = useState(props.showModal);

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
    },

    readMoreWrapper: {
      position: 'absolute',
      right: 15,
      bottom: 15,
    },
    readMore: {
      color: '#F1732C',
    },
  });

  return (
    <Modal
      visible={showModal}
      isVisible={showModal}
      style={ModalStyle.modal}
      animationType="fade"
      backdropOpacity={0}
      transparent={true}>
      <View style={ModalStyle.backdrop}></View>
      <View
        style={[
          ModalStyle.innerModal,
          {
            backgroundColor: '#FFFFFF',
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 7,
          },
        ]}>
        <ModalCloseButton onClose={props.onClose} />

        <ScrollView style={{flex: 1}}>
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

          <View style={{paddingLeft: 15, paddingRight: 15}}>
            <Text style={cardStyle.subtitle}>
              Ce que tu trouveras dans ta box :
            </Text>

            <ProductContentList item={productBox} />
          </View>

          <View style={{marginTop: 15, marginBottom: 15}}>
            <TouchableOpacity
              style={[Styles.bottomButton, {borderRadius: 25}]}
              onPress={props.onOrder}>
              <Text style={Styles.bottomCommText}>Commander</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
