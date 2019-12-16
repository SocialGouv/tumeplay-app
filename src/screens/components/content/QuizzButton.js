import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../styles/Styles';

QuizzButton.propTypes = {
  onClick: PropTypes.func,
};

export default function QuizzButton(props) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 95,
        left: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={[Styles.bottomButton, {borderRadius: 25}]}
        onPress={props.onClick}>
        <View style={{paddingTop: 8, paddingBottom: 8}}>
          <Text style={[Styles.tunnelButtonText]}>Répondre au quizz</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
