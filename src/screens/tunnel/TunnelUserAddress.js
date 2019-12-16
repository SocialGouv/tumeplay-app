import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import TunnelUserAdressStyle from '../../styles/components/TunnelUserAdress';

import Backlink from '../components/tunnel/Backlink';

// @TODO : Need to find a cleaner way to test email.
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const screenWidth = Math.round(Dimensions.get('window').width);
let flexstyletext; // @TODO: Delete if useless

if (screenWidth <= 420) {
  flexstyletext = {
    flex: 0.1,
  };
} else {
  flexstyletext = {
    flex: 0.15,
  };
}

ProductSelectHeader.propTypes = {
  navigation: PropTypes.object,
};

// @TODO : Review this entire file to clean it up - so messy.
export default function ProductSelectHeader(props) {
  const [deliveryType] = useState(props.navigation.state.params.deliveryType);
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [adress, setAdress] = useState('');
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmailAdress, setInvalidEmailAdress] = useState(false);
  const [invalidAdress, setInvalidAdress] = useState(false);

  // @TODO : That's ... so dirty.
  if (props.navigation.state.params.userAdress) {
    const userAdress = props.navigation.state.params.userAdress;
    setFirstName(userAdress.firstName);
    setLastName(userAdress.lastName);
    setEmailAdress(userAdress.emailAdress);
    setAdress(userAdress.adress);
  }

  function _onDone() {
    const userAdress = {
      firstName: firstName,
      lastName: lastName,
      emailAdress: emailAdress,
      adress: adress,
    };

    let isValid = true;
    const invalidFields = {
      invalidFirstName: false,
      invalidLastName: false,
      invalidEmailAdress: false,
      invalidAdress: false,
    };
    if (userAdress.firstName == '') {
      invalidFields.invalidFirstName = true;
      isValid = false;
    }

    if (userAdress.lastName == '') {
      invalidFields.invalidLastName = true;
      isValid = false;
    }

    if (
      userAdress.emailAdress == '' ||
      !emailRegex.test(userAdress.emailAdress)
    ) {
      invalidFields.invalidEmailAdress = true;
      isValid = false;
    }

    if (userAdress.adress == '' && deliveryType == 'home') {
      invalidFields.invalidAdress = true;
      isValid = false;
    }

    if (isValid) {
      props.navigation.navigate('TunnelCartSummary', {
        selectedItem: selectedItem,
        userAdress: userAdress,
      });
    } else {
      setInvalidFirstName(invalidFields.invalidFirstName);
      setInvalidLastName(invalidFields.invalidLastName);
      setInvalidEmailAdress(invalidFields.invalidEmailAdress);
      setInvalidAdress(invalidFields.invalidAdress);
    }
  }

  function _goBack() {
    if (deliveryType == 'home') {
      props.navigation.navigate('TunnelDeliverySelect', {
        selectedItem: selectedItem,
      });
    } else {
      props.navigation.navigate('TunnelPickupSelect', {
        selectedItem: selectedItem,
      });
    }
  }

  function _handleChange(name, value) {
    name(value);
  }

  return (
    <ScrollView
      style={[
        Styles.flexOne,
        {
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
        },
      ]}>
      <Backlink step={3} onPress={_goBack} />

      <View style={flexstyletext}>
        <Text style={Styles.tunnelTitle}>Complète tes informations</Text>
      </View>

      <View style={TunnelUserAdressStyle.inputWrapper}>
        <Text style={[Styles.labelText]}>Prénom *</Text>
        <TextInput
          placeholder="Ton Prénom"
          style={[
            Styles.inputTypeText,
            invalidFirstName ? TunnelUserAdressStyle.invalidTextField : false,
          ]}
          name="firstName"
          onChangeText={val => _handleChange('setFirstName', val)}
          value={firstName}
        />
      </View>

      <View style={TunnelUserAdressStyle.inputWrapper}>
        <Text style={Styles.labelText}>Nom *</Text>
        <TextInput
          placeholder="Ton Nom"
          style={[
            Styles.inputTypeText,
            invalidLastName ? TunnelUserAdressStyle.invalidTextField : false,
          ]}
          name="lastName"
          onChangeText={val => _handleChange('setLastName', val)}
          value={lastName}
        />
      </View>

      <View style={TunnelUserAdressStyle.inputWrapper}>
        <Text style={Styles.labelText}>E-Mail *</Text>
        <TextInput
          placeholder="Ton adresse e-mail"
          style={[
            Styles.inputTypeText,
            invalidEmailAdress ? TunnelUserAdressStyle.invalidTextField : false,
          ]}
          name="emailAdress"
          onChangeText={val => _handleChange('setEmailAdress', val)}
        />
      </View>
      {deliveryType == 'home' && (
        <View style={TunnelUserAdressStyle.inputWrapper}>
          <Text style={Styles.labelText}>Adresse *</Text>
          <TextInput
            placeholder="Ton adresse"
            style={[
              Styles.inputTypeText,
              invalidAdress ? TunnelUserAdressStyle.invalidTextField : false,
            ]}
            name="adress"
            onChangeText={val => _handleChange('setAdress', val)}
            value={adress}
          />
        </View>
      )}
      <View style={TunnelUserAdressStyle.requiredFieldsWrapper}>
        <View style={{flex: 1}}>
          <Text
            style={[
              Styles.placeholderText,
              {fontSize: 13, color: '#C80352', fontFamily: 'Chivo-Regular'},
            ]}>
            * Champs Obligatoire
          </Text>
        </View>
      </View>
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
            <Text style={Styles.tunnelButtonText}>Suivant</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
