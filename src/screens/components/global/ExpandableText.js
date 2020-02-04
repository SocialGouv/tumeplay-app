import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import useIsMounted from '../../../hooks/isMounted';

import Colors from '../../../styles/Color';

ExpandableText.propTypes = {
  isExpanded: PropTypes.bool,
  onReady: PropTypes.func,
  renderTruncatedFooter: PropTypes.func,
  renderRevealedFooter: PropTypes.func,
  purpleMode: PropTypes.bool,
  readMoreStyle: PropTypes.object,
  content: PropTypes.object,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default function ExpandableText(props) {
  const [measured, setMeasured] = useState(false);
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
  const [showAllText, setShowAllText] = useState(props.isExpanded);
  const isMounted = useIsMounted();
  let _text = false;

  useEffect(() => {
    async function nextFrameAsync() {
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }

    async function measureHeightAsync(component) {
      return new Promise(resolve => {
        component.measure((x, y, w, h) => {
          resolve(h);
        });
      });
    }

    async function handleHeight(_text) {
      await nextFrameAsync();

      if (!isMounted.current) {
        return;
      }

      // Get the height of the text with no restriction on number of lines
      const fullHeight = await measureHeightAsync(_text);

      setMeasured(true);

      await nextFrameAsync();

      if (!isMounted.current) {
        return;
      }

      // Get the height of the text now that number of lines has been set
      const limitedHeight = await measureHeightAsync(_text);

      if (fullHeight > limitedHeight) {
        setShouldShowReadMore(true);
      }
      if (props.onReady) {
        props.onReady();
      }
    }

    handleHeight(_text);
  }, [_text, isMounted, props]);

  function _handlePressReadMore() {
    console.log('Pressed read more...');
    setShowAllText(true);
  }

  function _handlePressReadLess() {
    console.log('Pressed read less...');
    setShowAllText(false);
  }

  function _maybeRenderReadMore() {
    if (shouldShowReadMore && !props.isExpanded && !showAllText) {
      if (props.renderTruncatedFooter) {
        return props.renderTruncatedFooter(_handlePressReadMore);
      }

      return (
        <TouchableOpacity
          style={cardStyle.readMoreWrapper}
          onPress={_handlePressReadMore}>
          <Image
            style={cardStyle.readMorePicture}
            source={
              props.purpleMode
                ? require('../../../assets/pictures/plus-purple.png')
                : require('../../../assets/pictures/plus-orange.png')
            }
          />
          <Text style={[cardStyle.readMore, {...props.readMoreStyle}]}>
            Plus d'infos
          </Text>
        </TouchableOpacity>
      );
    } else if (shouldShowReadMore && (props.isExpanded || showAllText)) {
      if (props.renderRevealedFooter) {
        return props.renderRevealedFooter(_handlePressReadLess);
      }

      return (
        <TouchableOpacity
          style={cardStyle.readMoreWrapper}
          onPress={_handlePressReadLess}>
          <Image
            style={cardStyle.readMorePicture}
            source={
              props.purpleMode
                ? require('../../../assets/pictures/minus-purple.png')
                : require('../../../assets/pictures/minus-orange.png')
            }
          />
          <Text style={[cardStyle.readMore, {...props.readMoreStyle}]}>
            Refermer
          </Text>
        </TouchableOpacity>
      );
    }
  }

  return (
    <View style={props.containerStyle}>
      <View style={cardStyle.textContainer}>
        {props.content.title && (
          <Text style={cardStyle.title}>{props.content.title}</Text>
        )}
        <Text
          numberOfLines={
            measured && !props.isExpanded && !showAllText
              ? props.content.numberOfLines
              : 0
          }
          ref={text => {
            _text = text;
          }}
          style={[cardStyle.text, {...props.textStyle}]}>
          {props.content.text}
        </Text>

        {_maybeRenderReadMore()}
      </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  textContainer: {
    padding: 15,
  },
  title: {
    color: '#F1732C',
    fontSize: 28,
    fontFamily: Colors.titleCard,
  },
  text: {
    color: '#4F4F4F',
    fontSize: 13,
    marginBottom: 25,
    marginTop: 10,
    lineHeight: 19,
    fontFamily: Colors.textFont,
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
    fontSize: 13,
  },
  readMorePicture: {
    marginRight: 8,
    width: 16,
    height: 16,
    marginTop: 1,
    paddingTop: 0,
    resizeMode: 'contain',
  },
});
