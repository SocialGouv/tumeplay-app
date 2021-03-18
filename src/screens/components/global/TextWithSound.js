import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import ReactHowler from 'react-howler';
import CustomTouchableOpacity from './CustomTouchableOpacity';

TextWithSound.propTypes = {
  sound: PropTypes.string,
  children: PropTypes.object,
  style: PropTypes.object,
};
export default function TextWithSound(props) {
  const [play, setPlay] = useState(false);
  const targetSound = false;
  const soundPicture = require('../../../assets/pictures/sound.png');

  function onPlayStart() {}

  function onPlayStop() {
    console.log('Stop asked : ' + play);

    setPlay(false);
  }

  async function togglePlay(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!play) {
      console.log('Asking top force stop.');
      await window.Howler.stop();
    }

    setTimeout(function() {
      setPlay(!play);
    }, 200);
  }

  return (
    <View>
      <Text style={props.style}>
        {props.children}

      </Text>
      
    </View>
  );
}
