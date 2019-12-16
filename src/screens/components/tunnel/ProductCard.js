import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

ProductCard.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default function ProductCard(props) {
  const [productBox] = useState(props.item);

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
      flex: 1,
      flexDirection: 'row',
    },
    readMore: {
      color: '#F1732C',
      textDecorationLine: 'underline',
    },
    plusPicture: {
      marginRight: 3,
      width: 16,
      height: 16,
      marginTop: 3,
      paddingTop: 0,
      resizeMode: 'contain',
    },
  });

  return (
    <View style={cardStyle.container}>
      <TouchableOpacity style={cardStyle.buttonWrapper} onPress={props.onPress}>
        <Image source={productBox.picture} style={cardStyle.picture} />

        <View style={cardStyle.textContainer}>
          <Text style={cardStyle.title}>{productBox.title}</Text>
          <Text style={cardStyle.text}>{productBox.description}</Text>
        </View>

        <View style={cardStyle.readMoreWrapper}>
          <Image
            style={cardStyle.plusPicture}
            source={require('../../../assets/pictures/plus-orange.png')}
          />
          <Text style={cardStyle.readMore}>Plus d infos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
