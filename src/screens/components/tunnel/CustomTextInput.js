import React from 'react';
import {View, Text,TextInput, Image} from 'react-native';


import TunnelUserAdressStyle from '../../../styles/components/TunnelUserAdress';
import Styles from '../../../styles/Styles';

import PropTypes from 'prop-types';

CustomTextInput.propTypes = {
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  isValid: PropTypes.bool,
  onChangeText: PropTypes.func,
  currentValue: PropTypes.string,
};

export default function CustomTextInput(props) {

  return (
    <View style={TunnelUserAdressStyle.inputWrapper}>
        <Text style={Styles.labelText}>{props.inputLabel} *</Text>
        <TextInput
          placeholder={props.inputPlaceholder}
          style={[
            Styles.inputTypeText,
            props.isValid ? false : TunnelUserAdressStyle.invalidTextField,
          ]}
          name="lastName"
          onChangeText={props.onChangeText}
          defaultValue={props.currentValue}
        />
      </View>
  );
}
