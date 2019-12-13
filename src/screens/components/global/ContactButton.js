import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import Styles from '../../../styles/Styles';

export default class ContactButton extends React.Component {
  render() {
    return (
      <View style={{flex: 0.25}}>
        <TouchableOpacity
          style={[Styles.landingBottomWrapper]}
          onPress={this._onSelected_lieuxUtiles}>
          <Text style={Styles.landingBottomText}>
            Tu te poses des questions ? Envoies-les nous, nous y répondrons !
          </Text>
          <View
            style={{
              flex: 0.25,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                marginRight: 10,
                width: 10,
                height: 10,
                paddingTop: 25,
                resizeMode: 'contain',
              }}
              source={require('../../../assets/pictures/right-arrow.png')}
            />
            <Text style={Styles.landingBottomButtonNext}>Voir</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
