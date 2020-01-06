import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import Styles from '../styles/Styles';

MoreThan25YearsScreen.propTypes = {
  lessThan25: PropTypes.func,
  moreThan25: PropTypes.func,
};
export default function MoreThan25YearsScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 7,
        backgroundColor: '#FEE7E3',
        position: 'relative',
      }}>
      <Image
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          minHeight: '100%',
          borderRadius: 7,
          resizeMode: 'stretch',
        }}
        source={require('../assets/background.png')}
      />

      <View style={{flex: 0.25}}></View>
      <View style={{flex: 0.1, paddingLeft: 35, paddingRight: 35}}>
        <Text style={[Styles.finishText, {color: 'white'}]}>
          Quel âge as-tu?
        </Text>
      </View>

      <View style={{flex: 0.25, marginTop: 15}}>
        <TouchableOpacity
          style={[Styles.bottomButton, {borderRadius: 25, maxHeight: 35}]}
          onPress={props.lessThan25}>
          <Text style={Styles.bottomCommText}>- de 25 ans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.bottomButton, {borderRadius: 25, maxHeight: 35}]}
          onPress={props.moreThan25}>
          <Text style={Styles.bottomCommText}>+ de 25 ans</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
