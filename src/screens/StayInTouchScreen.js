import React, {useState, useEffect} from 'react';

import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Backlink from './components/tunnel/Backlink';

import Colors from '../styles/Color';
import Styles from '../styles/Styles';
import autoScrollToTop from '../hooks/autoScrollToTop';
import PropTypes from 'prop-types';

import AddressValidator from '../services/AddressValidator';
import MailValidator from '../services/MailValidator';
import RemoteApi from '../services/RemoteApi';

import CustomTextInput from './components/tunnel/CustomTextInput';

const zipCodeTest = /^[0-9]{5}$/;

export default function StayInTouchScreen(props) {
  autoScrollToTop(props);

  var defaultUserAdress = {
    firstName: '',
    emailAdress: '',
    zipCode: '',
  };

  var defaultIsValid = {
    firstName: -1,
    emailAdress: -1,
    zipCode: -1,
  };

  const [invalidZipCode, setInvalidZipCode] = useState(false);
  const [localAdress, setLocalAdress] = useState(defaultUserAdress);
  const [localValid, setLocalValid] = useState({});
  const [mainValidFlag, setMainValidFlag] = useState(false);

  async function _handleZipCode(zipCode) {
    const localValue = zipCode.replace(/[^0-9]/g, '');

    if (!isNaN(localValue)) {
      if (localAdress['zipCode'] != zipCode && zipCodeTest.test(localValue)) {
        localAdress['zipCode'] = localValue;

        setLocalAdress(localAdress);
        _validateFields(CustomTextInput.fieldStatus.NEUTRAL);
      }
    }
  }

  function _validateFields(defaultValue) {
    let isValid = true;

    // Reset all validations
    const checkedIsValid = defaultIsValid;

    if (localAdress.firstName === '') {
      checkedIsValid.firstName = defaultValue;
      isValid = false;
    }

    if (localAdress.emailAdress === '') {
      checkedIsValid.emailAdress = defaultValue;
      isValid = false;
    } else {
      if (!MailValidator.validateMail(localAdress.emailAdress)) {
        checkedIsValid.emailAdress = false;
        checkedIsValid.emailAdressWrongFormat = true;
        isValid = false;
      }
    }

    if (localAdress.zipCode === '') {
      checkedIsValid.zipCode = defaultValue;
      isValid = false;
    }

    setLocalValid(checkedIsValid);
    setMainValidFlag(isValid);

    return isValid;
  }

  function _handleChange(name, value) {
    if (name == 'zipCode') {
      if (AddressValidator.validateZipCodePart(value)) {
        setInvalidZipCode(false);

        localAdress['zipCode'] = value;

        setLocalAdress(localAdress);
        _validateFields(CustomTextInput.fieldStatus.NEUTRAL);
      } else {
        setInvalidZipCode(true);
      }
    } else {
      localAdress[`${name}`] = value;

      setLocalAdress(localAdress);
      _validateFields(CustomTextInput.fieldStatus.NEUTRAL);
    }
  }

  function _goBack() {
    props.navigation.navigate('LandingScreen');
  }

  async function _onDone() {
    const _isValid = _validateFields(CustomTextInput.fieldStatus.INVALID);

    if (_isValid) {
      await RemoteApi.sendContact(localAdress);
      props.navigation.navigate('StayInTouchConfirm');
    }
  }

  return (
    <ScrollView
      style={[
        Styles.flexOne,
        {
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
        },
      ]}>
      <Backlink text={'Retour'} onPress={_goBack} />

      <View>
        <Text style={Styles.tunnelTitle}>Tes informations de contact</Text>
      </View>

      <Text
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontSize: 14,
          color: Colors.secondaryText,
          fontFamily: 'Chivo-Regular',
        }}>
        Pour être informé·e de la sortie de l&apos;app&apos; chez toi,
        écris-nous ces informations, nous pourrons te contacter pour te
        prévenir.
      </Text>

      <CustomTextInput
        inputLabel="Prénom"
        inputPlaceholder="Ton Prénom"
        onChangeText={val => _handleChange('firstName', val)}
        isValid={localValid.firstName}
        currentValue={localAdress.firstName}
        name="firstName"
      />

      <CustomTextInput
        inputLabel="Adresse e-mail"
        inputPlaceholder="Ton adresse e-mail"
        onChangeText={val => _handleChange('emailAdress', val)}
        isValid={localValid.emailAdress}
        emailAdressWrongFormat={localValid.emailAdressWrongFormat}
        currentValue={localAdress.emailAdress}
        name="emailAdress"
      />

      <CustomTextInput
        inputLabel="Département"
        inputPlaceholder="Ton département"
        onChangeText={val => _handleChange('zipCode', val)}
        isValid={localValid.zipCode}
        currentValue={localAdress.zipCode}
        filterNumbers={true}
        maxLength={2}
        name="zipCode"
      />

      <Text
        style={{
          marginTop: 50,
          marginBottom: 50,
          fontSize: 14,
          color: Colors.secondaryText,
          fontFamily: 'Chivo-Regular',
        }}>
        * Champs obligatoires pour te contacter
      </Text>

      <View style={Styles.viewopacitytunneletap3}>
        <TouchableOpacity
          style={{
            flex: 1,
            paddingTop: 15,
            paddingBottom: 2,
            width: '40%',
            height: 75,
          }}
          onPress={_onDone}>
          <View style={Styles.tunnelButton}>
            <Text
              style={
                mainValidFlag
                  ? Styles.tunnelButtonText
                  : Styles.tunnelButtonTextOpaque
              }>
              Suivant
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
