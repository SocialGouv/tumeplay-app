import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import useIsMounted from '../../../hooks/isMounted';

import PropTypes from 'prop-types';

ExpandableText.propTypes = {
  content: PropTypes.object,
  isExpanded: PropTypes.bool,
  containerStyle: PropTypes.object,
  readMoreStyle: PropTypes.object,
  purpleMode: PropTypes.bool,
  textStyle: PropTypes.object,
};

export default function ExpandableText(props) {
  // @TODO : Not linted, because placeholder below.
  const [needReadMore, setNeedReadMore] = useState(true);
  const isMounted = useIsMounted();

  useEffect(() => {
    // @TODO : Placeholder for height mesurement between full and restricted height
    // @TODO : set "needReadmore" only if full length > truncated length
  }, [isMounted]);

  // @TODO : Handle picture name with props.
  let _targetPicture = false;

  if (props.purpleMode) {
    _targetPicture = props.isExpanded
      ? require('../../../assets/pictures/minus-purple.png')
      : require('../../../assets/pictures/plus-purple.png');
  } else {
    _targetPicture = props.isExpanded
      ? require('../../../assets/pictures/minus-orange.png')
      : require('../../../assets/pictures/plus-orange.png');
  }

  const cardStyle = StyleSheet.create({
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
    readMorePicture: {
      marginRight: 3,
      width: 16,
      height: 16,
      marginTop: 3,
      paddingTop: 0,
      resizeMode: 'contain',
    },
  });

  return (
    <View style={props.containerStyle}>
      <View style={cardStyle.textContainer}>
        {props.content.title && (
          <Text style={cardStyle.title}>{props.content.title}</Text>
        )}
        <Text
          numberOfLines={props.content.numberOfLines}
          style={[cardStyle.text, {...props.textStyle}]}>
          {props.content.text}
        </Text>
      </View>
      <View style={cardStyle.readMoreWrapper}>
        <Image style={cardStyle.readMorePicture} source={_targetPicture} />
        <Text style={[cardStyle.readMore, {...props.readMoreStyle}]}>
          {props.isExpanded ? 'Refermer' : "Plus d'infos"}
        </Text>
      </View>
    </View>
  );
}
