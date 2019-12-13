import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import Modal from 'react-native-modal';

import Styles from '../../../styles/Styles';

export default class ProductModal extends React.Component {
  state = {
    productBox: false,
    showModal: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      productBox: this.props.item,
      showModal: false,
    };
  }

  _toggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

  _updateProductBox = productBox => {
    this.setState({productBox: productBox});
  };

  renderRow = (itemQty, itemText) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#4F4F4F', fontSize: 14}}>{'\u2022'}</Text>
        <Text style={{flex: 1, paddingLeft: 5, color: '#4F4F4F', fontSize: 14}}>
          {itemQty} {itemText}
        </Text>
      </View>
    );
  };

  _renderProductList = items => {
    if (items !== undefined) {
      return items.map((item, key) => {
        return this.renderRow(item.qty, item.title);
      });
    }
  };

  render() {
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

    const item = this.state.productBox;

    return (
      <Modal
        visible={this.state.showModal}
        isVisible={this.state.showModal}
        style={{margin: 0, alignItems: undefined, justifyContent: undefined}}
        onModalHide={this._toggleResultModalIfNeeded}
        onDismiss={this._toggleResultModalIfNeeded}
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
          <TouchableOpacity
            style={{position: 'absolute', right: 10, top: 10, zIndex: 10}}
            onPress={this._toggleModal}>
            <View style={{}}>
              <Image
                style={{width: 25, height: 25, resizeMode: 'contain'}}
                source={require('../../../assets/pictures/close.png')}
              />
            </View>
          </TouchableOpacity>

          <ScrollView style={{flex: 1}}>
            <View style={{flex: 0.4}}>
              <Image style={cardStyle.picture} source={item.picture} />
            </View>
            <View
              style={{
                flex: 0.25,
                marginTop: 15,
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <Text style={cardStyle.title}>{item.title}</Text>
              <Text style={cardStyle.text}>{item.description}</Text>
            </View>

            <View style={{flex: 0.3, paddingLeft: 15, paddingRight: 15}}>
              <Text style={cardStyle.subtitle}>
                Ce que tu trouveras dans ta box :
              </Text>
              {this._renderProductList(item.products)}
            </View>

            <View style={{flex: 0.1, marginTop: 15, marginBottom: 15}}>
              <TouchableOpacity
                style={[Styles.bottomButton, {borderRadius: 25}]}
                onPress={this.props.onOrder}>
                <Text style={Styles.bottomCommText}>Commander</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}
