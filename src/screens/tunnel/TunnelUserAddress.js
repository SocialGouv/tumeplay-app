import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import TunnelUserAdressStyle from '../../styles/components/TunnelUserAdress';

import Backlink from '../components/tunnel/Backlink';
import CustomTextInput from '../components/tunnel/CustomTextInput';

import useIsMounted from '../../hooks/isMounted';

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

TunnelUserAddress.propTypes = {
  navigation: PropTypes.object,
};

// @TODO : Review this entire file to clean it up - so messy.
export default function TunnelUserAddress(props) {
  var defaultUserAdress = {
    firstName: '',
    lastName: '',
    emailAdress: '',
    adress: '',
  };

  var defaultIsValid = {
    firstName: true,
    lastName: true,
    emailAdress: true,
    adress: true,
  };
  const isMounted = useIsMounted();
  const [deliveryType] = useState(props.navigation.state.params.deliveryType);
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);

  const [localAdress, setLocalAdress] = useState(defaultUserAdress);
  const [localValid, setLocalValid] = useState(defaultIsValid);

  useEffect(() => {
    if (props.navigation.state.params.userAdress) {
      const userAdress = props.navigation.state.params.userAdress;
      const newAdress = {
        firstName: userAdress.firstName,
        lastName: userAdress.lastName,
        emailAdress: userAdress.emailAdress,
        adress: userAdress.adress,
      };

      setLocalAdress(newAdress);
    }
  }, [isMounted, props.navigation.state.params.userAdress]);

  function _validateFields() {
    let isValid = true;

    // Reset all validations
    const checkedIsValid = defaultIsValid;

    if (localAdress.firstName == '') {
      checkedIsValid.firstName = false;
      isValid = false;
    }

    if (localAdress.lastName == '') {
      checkedIsValid.lastName = false;
      isValid = false;
    }

    if (
      localAdress.emailAdress == '' ||
      !emailRegex.test(localAdress.emailAdress)
    ) {
      checkedIsValid.emailAdress = false;
      isValid = false;
    }

    if (localAdress.adress == '' && deliveryType == 'home') {
      checkedIsValid.adress = false;
      isValid = false;
    }

    setLocalValid(checkedIsValid);

    return isValid;
  }

  function _onDone() {
    const isValid = _validateFields();

    if (isValid) {
      props.navigation.navigate('TunnelCartSummary', {
        selectedItem: selectedItem,
        userAdress: localAdress,
      });
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
    localAdress[`${name}`] = value;

    setLocalAdress(localAdress);

    return value;
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

      <CustomTextInput
        inputLabel="Ton Prénom"
        inputPlaceholder="Ton Prénom"
        onChangeText={val => _handleChange('firstName', val)}
        isValid={localValid.firstName}
        currentValue={localAdress.firstName}
      />
      <CustomTextInput
        inputLabel="Ton Nom"
        inputPlaceholder="Ton Nom"
        onChangeText={val => _handleChange('lastName', val)}
        isValid={localValid.lastName}
        currentValue={localAdress.lastName}
      />
      <CustomTextInput
        inputLabel="Ton adresse e-mail"
        inputPlaceholder="Ton adresse e-mail"
        onChangeText={val => _handleChange('emailAdress', val)}
        isValid={localValid.emailAdress}
        currentValue={localAdress.emailAdress}
      />

      {deliveryType == 'home' && (
        <CustomTextInput
          inputLabel="Ton adresse"
          inputPlaceholder="Ton adresse"
          onChangeText={val => _handleChange('adress', val)}
          isValid={localValid.adress}
          currentValue={localAdress.adress}
        />
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
