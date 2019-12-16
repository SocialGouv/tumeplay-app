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
      style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
      animationType="slide"
      transparent={true}>
      <View
        style={{
          flex: 1,
          marginBottom: 0,
          marginRight: 0,
          marginLeft: 0,
          marginTop: 50,
          borderRadius: 0,
          backgroundColor: '#FFFFFF',
          borderColor: '#000000',
          position: 'relative',
        }}>
        <ModalCloseButton onClose={props.onClose} />

        <ScrollView style={{flex: 1}}>
          <View style={{flex: 0.4}}>
            <Image style={cardStyle.picture} source={productBox.picture} />
          </View>
          <View
            style={{
              flex: 0.25,
              marginTop: 15,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            <Text style={cardStyle.title}>{productBox.title}</Text>
            <Text style={cardStyle.text}>{productBox.description}</Text>
          </View>

          <View style={{flex: 0.3, paddingLeft: 15, paddingRight: 15}}>
            <Text style={cardStyle.subtitle}>
              Ce que tu trouveras dans ta box :
            </Text>

            <ProductContentList item={productBox} />
          </View>

          <View style={{flex: 0.1, marginTop: 15, marginBottom: 15}}>
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
