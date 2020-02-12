import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, StyleSheet} from 'react-native';

import Colors from '../../../styles/Color';
import Styles from '../../../styles/Styles';
import UnderlineText from '../global/UnderlineText';
import CustomTouchableOpacity from '../global/CustomTouchableOpacity';

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
      position: 'relative',
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
    notAvailableWrapper: {
      position: 'absolute',
      flex: 1,
      zIndex: 1,
      width: '100%',
      height: '100%',
      borderRadius: 7,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(200,3,82, 0.5)',
      paddingTop: '35%',
    },
    notAvailableTextWrapper: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
    },
    notAvailableText: {
      textAlign: 'center',
      fontSize: 20,
      fontFamily: Colors.titleCard,
      color: '#FFFFFF',
      paddingLeft: 20,
      paddingRight: 20,
    },
  });

  return (
    <View style={cardStyle.container}>
      <CustomTouchableOpacity
        style={cardStyle.buttonWrapper}
        onPress={props.onPress}>
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
      </CustomTouchableOpacity>
      {!productBox.available && (
        <View style={cardStyle.notAvailableWrapper}>
          <View style={cardStyle.notAvailableTextWrapper}>
            <Text style={[Styles.finishText, {color: '#FFFFFF'}]}>
              <UnderlineText borderColor={'#F1732E'} borderMargin={-15}>
                Bientôt !
              </UnderlineText>
            </Text>
          </View>
          <View style={cardStyle.notAvailableTextWrapper}>
            <Text style={cardStyle.notAvailableText}>
              Commande de cette box non disponible pour l&apos;instant.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
