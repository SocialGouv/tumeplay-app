import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

ContentCard.propTypes = {
  item: PropTypes.object,
};

export default function ContentCard(props) {
  const [content, setContent] = useState(props.item);

  function _onReadMoreClick() {
    if (content.numberOfLines == 0) {
      setContent(old => {
        return {...old, numberOfLines: 3};
      });
    } else {
      setContent(old => {
        return {...old, numberOfLines: 0};
      });
    }
  }

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
      <TouchableOpacity
        style={cardStyle.buttonWrapper}
        onPress={() => {
          _onReadMoreClick();
        }}>
        <Image source={content.picture} style={cardStyle.picture} />

        <View style={cardStyle.textContainer}>
          <Text style={cardStyle.title}>{content.title}</Text>
          <Text numberOfLines={content.numberOfLines} style={cardStyle.text}>
            {content.text}
          </Text>
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
