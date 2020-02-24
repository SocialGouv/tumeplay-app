import React from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../styles/Styles';

import QuizzPortal from './Portal';

QuizzButton.propTypes = {
  onClick: PropTypes.func,
};

export default function QuizzButton(props) {
  // See QuizzPortal : on web, we cannot use fixed as it's won't scroll due to parent containers
  // So we extract it and set it on body.
  const isWeb = Platform.OS === 'web';
  const wrapperStyle = {
    bottom: 75,
    left: isWeb ? '50%' : 0,
    marginLeft: isWeb ? '-25%' : undefined,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: isWeb ? undefined : 'absolute',
  };

  if (Platform.OS === 'web') {
    return (
      <QuizzPortal portalClass={'web-quizz-button'}>
        <View style={wrapperStyle}>
          <TouchableOpacity
            style={[Styles.bottomButton, {borderRadius: 25}]}
            onPress={props.onClick}>
            <View style={{paddingTop: 8, paddingBottom: 8}}>
              <Text style={[Styles.tunnelButtonText]}>Répondre au quiz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </QuizzPortal>
    );
  } else {
    return (
      <View style={wrapperStyle}>
        <TouchableOpacity
          style={[Styles.bottomButton, {borderRadius: 25}]}
          onPress={props.onClick}>
          <View style={{paddingTop: 8, paddingBottom: 8}}>
            <Text style={[Styles.tunnelButtonText]}>Répondre au quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
