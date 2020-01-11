import React from 'react';
import {View, Text, TextInput} from 'react-native';

import TunnelUserAdressStyle from '../../../styles/components/TunnelUserAdress';
import Styles from '../../../styles/Styles';

import PropTypes from 'prop-types';

CustomTextInput.propTypes = {
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  isValid: PropTypes.bool,
  onChangeText: PropTypes.func,
  currentValue: PropTypes.string,
  emailAdressWrongFormat: PropTypes.bool,
};

export default function CustomTextInput(props) {
  return (
    <View style={TunnelUserAdressStyle.inputWrapper}>
      <Text style={Styles.labelText}>{props.inputLabel} *</Text>
      <TextInput
        placeholder={props.inputPlaceholder}
        style={[
          Styles.inputTypeText,
          props.isValid !== undefined && !props.isValid
            ? TunnelUserAdressStyle.invalidTextField
            : false,
        ]}
        name="lastName"
        onChangeText={props.onChangeText}
        defaultValue={props.currentValue}
      />
      <Text
        style={[
          Styles.placeholderText,
          {fontSize: 13, color: '#C80352', fontFamily: 'Chivo-Regular'},
        ]}>
        {props.emailAdressWrongFormat
          ? 'Le format du mail est incorrect'
          : undefined}
      </Text>
    </View>
  );
}
