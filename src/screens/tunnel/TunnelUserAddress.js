import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import openGeocoder from 'node-open-geocoder';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import TunnelUserAdressStyle from '../../styles/components/TunnelUserAdress';

import Backlink from '../components/tunnel/Backlink';
import CustomTextInput from '../components/tunnel/CustomTextInput';

import useIsMounted from '../../hooks/isMounted';

const zipCodeTest = /^[0-9]{5}$/;

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
    zipCode: '',
    city: '',
  };

  var defaultIsValid = {
    firstName: -1,
    lastName: -1,
    emailAdress: -1,
    adress: -1,
    zipCode: -1,
    city: -1,
  };
  const isMounted = useIsMounted();
  const [deliveryType] = useState(props.navigation.state.params.deliveryType);
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [selectedPickup] = useState(
    props.navigation.state.params.selectedPickup,
  );
  const [selectedProducts] = useState(
    props.navigation.state.params.selectedProducts,
  );

  const [localAdress, setLocalAdress] = useState(defaultUserAdress);
  const [localValid, setLocalValid] = useState({});
  const [mainValidFlag, setMainValidFlag] = useState(false);
  const [invalidAddress, setInvalidAddress] = useState(false);

  useEffect(() => {
    if (props.navigation.state.params.userAdress) {
      const userAdress = props.navigation.state.params.userAdress;
      const newAdress = {
        firstName: userAdress.firstName,
        lastName: userAdress.lastName,
        emailAdress: userAdress.emailAdress,
        adress: userAdress.adress,
        zipCode: userAdress.zipCode,
        city: userAdress.city,
      };

      setLocalAdress(newAdress);
    }
  }, [isMounted, props.navigation.state.params.userAdress]);

  function _validateAddressBeforeGoto() {
    const fullAddress =
      localAdress.adress + ' ' + localAdress.zipCode + ' ' + localAdress.city;

    setInvalidAddress(false);

    openGeocoder()
      .geocode(fullAddress)
      .end((err, res) => {
        let filtered = [];

        if (res.length >= 1) {
          filtered = res.filter(place => place.address.country_code === 'fr');

          if (filtered.length > 0) {
            _gotoSummary();
          }
        }

        if (filtered.length == 0 || res.length == 0) {
          setInvalidAddress(true);
        }
      });
  }

  function _validateFields() {
    let isValid = true;

    // Reset all validations
    const checkedIsValid = defaultIsValid;

    if (localAdress.firstName === '') {
      checkedIsValid.firstName = false;
      isValid = false;
    }

    if (localAdress.lastName === '') {
      checkedIsValid.lastName = false;
      isValid = false;
    }

    if (localAdress.emailAdress === '') {
      checkedIsValid.emailAdress = false;
      isValid = false;
    } else {
      if (!emailRegex.test(localAdress.emailAdress)) {
        checkedIsValid.emailAdress = false;
        checkedIsValid.emailAdressWrongFormat = true;
        isValid = false;
      }
    }

    if (deliveryType == 'home') {
      if (localAdress.adress === '') {
        checkedIsValid.adress = false;
        isValid = false;
      }

      if (localAdress.zipCode === '') {
        checkedIsValid.zipCode = false;
        isValid = false;
      }

      if (localAdress.city === '') {
        checkedIsValid.city = false;
        isValid = false;
      }
    }
    setLocalValid(checkedIsValid);
    setMainValidFlag(isValid);
    return isValid;
  }

  function _gotoSummary() {
    props.navigation.navigate('TunnelCartSummary', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
      deliveryType: deliveryType,
      userAdress: localAdress,
      selectedPickup: selectedPickup,
    });
  }

  function _onDone() {
    const isValid = _validateFields();

    if (isValid) {
      if (deliveryType === 'home') {
        _validateAddressBeforeGoto();
      } else {
        _gotoSummary();
      }
    }
  }

  function _goBack() {
    if (deliveryType === 'home') {
      props.navigation.navigate('TunnelDeliverySelect', {
        selectedItem: selectedItem,
        selectedProducts: selectedProducts,
      });
    } else {
      props.navigation.navigate('TunnelPickupSelect', {
        selectedItem: selectedItem,
        selectedProducts: selectedProducts,
        selectedPickup: selectedPickup,
      });
    }
  }

  async function _handleZipCode(zipCode) {
    const localValue = zipCode.replace(/[^0-9]/g, '');

    if (!isNaN(localValue)) {
      if (localAdress['zipCode'] != zipCode && zipCodeTest.test(localValue)) {
        openGeocoder()
          .geocode(localValue)
          .end((err, res) => {
            if (res.length >= 1) {
              const filtered = res.filter(
                place => place.address.country_code === 'fr',
              );

              if (filtered.length > 0) {
                localAdress['city'] = filtered[0].address.city;
                localAdress['zipCode'] = localValue;

                setLocalAdress(localAdress);
                _validateFields();
              }
            }
          });
      }
    }
  }

  function _handleChange(name, value) {
    if (name == 'zipCode') {
      _handleZipCode(value);
    } else {
      localAdress[`${name}`] = value;

      setLocalAdress(localAdress);
      _validateFields();
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
      <Backlink step={3} onPress={_goBack} />

      <View style={flexstyletext}>
        <Text style={Styles.tunnelTitle}>Complète tes informations</Text>
      </View>

      <CustomTextInput
        inputLabel="Prénom"
        inputPlaceholder="Ton Prénom"
        onChangeText={val => _handleChange('firstName', val)}
        isValid={localValid.firstName}
        currentValue={localAdress.firstName}
        name="firstName"
      />
      <CustomTextInput
        inputLabel="Nom"
        inputPlaceholder="Ton Nom"
        onChangeText={val => _handleChange('lastName', val)}
        isValid={localValid.lastName}
        currentValue={localAdress.lastName}
        name="lastName"
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

      {deliveryType === 'home' && (
        <CustomTextInput
          inputLabel="Adresse"
          inputPlaceholder="Ton adresse"
          onChangeText={val => _handleChange('adress', val)}
          isValid={localValid.adress}
          currentValue={localAdress.adress}
          name="adress"
        />
      )}

      {deliveryType === 'home' && (
        <CustomTextInput
          inputLabel="Code Postal"
          inputPlaceholder="Ton code postal"
          onChangeText={val => _handleChange('zipCode', val)}
          isValid={localValid.zipCode}
          currentValue={localAdress.zipCode}
          filterNumbers={true}
          name="zipCode"
        />
      )}

      {deliveryType === 'home' && (
        <CustomTextInput
          inputLabel="Ville"
          inputPlaceholder="Ta ville"
          onChangeText={val => _handleChange('city', val)}
          isValid={localValid.city}
          currentValue={localAdress.city}
          name="city"
        />
      )}
      {deliveryType === 'home' && invalidAddress && (
        <View style={TunnelUserAdressStyle.requiredFieldsWrapper}>
          <View style={{flex: 1}}>
            <Text
              style={[
                Styles.placeholderText,
                {fontSize: 14, color: '#C80352', fontFamily: 'Chivo-Regular'},
              ]}>
              L&apos;adresse indiquée semble invalide. Merci de vérifier les
              informations.
            </Text>
          </View>
        </View>
      )}
      <View style={TunnelUserAdressStyle.requiredFieldsWrapper}>
        <View style={{flex: 1}}>
          <Text
            style={[
              Styles.placeholderText,
              {fontSize: 13, color: '#C80352', fontFamily: 'Chivo-Regular'},
            ]}>
            * Champs obligatoires
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
