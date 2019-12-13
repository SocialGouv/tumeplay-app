import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../../../styles/Styles';

export default class QuizzButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          onPress={this.props.onClick}>
          <View style={Styles.tunnelButton}>
            <Text style={Styles.tunnelButtonText}>Répondre au quizz</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
