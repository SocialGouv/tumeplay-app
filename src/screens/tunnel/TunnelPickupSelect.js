import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Geolocation from '@react-native-community/geolocation';

import useIsMounted from '../../hooks/isMounted';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import Backlink from '../components/tunnel/Backlink';
import OpenStreetMap from '../components/global/OpenStreetMap';
import PointOfInterestCard from '../components/global/PointOfInterestCard';
import CustomTextInput from '../components/tunnel/CustomTextInput';

const {detect} = require('detect-browser');
const browser = detect();
let stylevalide;

if (browser) {
  stylevalide = {
    flex: 1,
    position: 'absolute',
    top: 430,
    left: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };
} else {
  stylevalide = {
    flex: 1,
    position: 'absolute',
    bottom: 45,
    left: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  };
}

TunnelPickupSelect.propTypes = {
  navigation: PropTypes.object,
};
export default function TunnelPickupSelect(props) {
  const defaultPosition = {
    coords: {
      latitude: 48.8465464,
      longitude: 2.2797058999999997,
    },
  };
  var defaultPickup = {
    userZipCode: '',
    zipCode: '',
    city: '',
  };

  var defaultIsValid = {
    userZipCode: -1,
    zipCode: -1,
    city: -1,
  };
  const [currentPosition, setCurrentPosition] = useState(defaultPosition);
  const [positionWatcher, setPositionWatcher] = useState(false);
  const [localAdress, setLocalAdress] = useState(defaultPickup);
  const [localValid, setLocalValid] = useState({});
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [selectedProducts] = useState(
    props.navigation.state.params.selectedProducts,
  );
  const isMounted = useIsMounted();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentPosition(position);

        console.log(position);
      },
      error => console.log('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    const watch = Geolocation.watchPosition(position => {
      setCurrentPosition(position);
      console.log(position);
    });

    setPositionWatcher(watch);
  }, [isMounted]);

  function _onDone() {
    props.navigation.navigate('TunnelUserAddress', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
    });
  }

  function _goBack() {
    props.navigation.navigate('TunnelDeliverySelect', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
    });
  }

  function _handleChange(name, value) {
    localAdress[`${name}`] = value;

    setLocalAdress(localAdress);

    return value;
  }

  const _pickupItems = [
    {
      title: 'Test 1',
      identifier: 'test-1',
      coordinates: {
        latitude: 48.8465464,
        longitude: 2.2797058999999997,
      },
    },
    {
      title: 'Test 2',
      identifier: 'test-2',
      coordinates: {
        latitude: 48.9465464,
        longitude: 2.2797058999999997,
      },
    },
    {
      title: 'Test 3',
      identifier: 'test-3',
      coordinates: {
        latitude: 48.8065464,
        longitude: 2.2797058999999997,
      },
    },
  ];

  return (
    <View
      style={[
        Styles.flexOne,
        {
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
          flexDirection: 'column',
          flexBasis: '100%',
        },
      ]}>
      <Backlink step={2} onPress={_goBack} />

      <View style={{flex: 0.15, paddingTop: 15}}>
        <Text style={Styles.tunnelTitle}>Choisis le lieu de livraison</Text>
      </View>

      <View style={{flex: 0.4, minHeight: 275, paddingTop: 0, marginTop: -15}}>
        <CustomTextInput
          inputLabel="Code postal"
          inputPlaceholder="Ton Code Postal"
          onChangeText={val => _handleChange('userZipCode', val)}
          isValid={localValid.userZipCode}
          currentValue={localAdress.userZipCode}
        />
        <OpenStreetMap
          items={_pickupItems}
          latitude={currentPosition.coords.latitude}
          longitude={currentPosition.coords.longitude}
        />
      </View>

      <ScrollView
        style={{
          flex: 0.45,
          width: '100%',
          bottom: 0,
          marginTop: -50,
          maxHeight: 250,
        }}>
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
        <PointOfInterestCard />
      </ScrollView>

      <TouchableOpacity
        style={[
          Styles.bottomButton,
          {position: 'absolute', bottom: 10, borderRadius: 25},
        ]}
        onPress={_onDone}>
        <View style={{paddingTop: 8, paddingBottom: 8}}>
          <Text style={Styles.tunnelButtonText}>Valider</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
