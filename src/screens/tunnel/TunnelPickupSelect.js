import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import Geolocation from '@react-native-community/geolocation';

import useIsMounted from '../../hooks/isMounted';
import RemoteApi from '../../services/RemoteApi';

import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
import Backlink from '../components/tunnel/Backlink';
import OpenStreetMap from '../components/global/OpenStreetMap';
import PointOfInterestCard from '../components/global/PointOfInterestCard';
import CustomTextInput from '../components/tunnel/CustomTextInput';

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

  var defaultMapDimensions = {
    width: 250,
    height: 250,
  };
  const [selectedPickup, setSelectedPickup] = useState(
    props.navigation.state.params.selectedPickup,
  );
  const [deliveryType] = useState(props.navigation.state.params.deliveryType);
  const [selectedItem] = useState(props.navigation.state.params.selectedItem);
  const [selectedProducts] = useState(
    props.navigation.state.params.selectedProducts,
  );

  const [currentPosition, setCurrentPosition] = useState(defaultPosition);
  const [positionWatcher, setPositionWatcher] = useState(false);
  const [localAdress, setLocalAdress] = useState(defaultPickup);
  const [localValid, setLocalValid] = useState({});
  const [pickupPoints, setPickupPoints] = useState([]);
  const [mapLayout, setMapLayout] = useState(defaultMapDimensions);

  const isMounted = useIsMounted();

  useEffect(() => {
    async function fetchPoints() {
      const rawPickupPoints = await RemoteApi.fetchPickupPoints();
      const pickupPoints = rawPickupPoints.map(function(item) {
        item.isSelected = false;

        return item;
      });

      setPickupPoints(pickupPoints);
    }

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
    fetchPoints();
    setPositionWatcher(watch);
  }, [isMounted]);

  function _onDone() {
    props.navigation.navigate('TunnelUserAddress', {
      selectedItem: selectedItem,
      selectedProducts: selectedProducts,
      selectedPickup: selectedPickup,
      deliveryType: deliveryType,
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

  function adjustMapLayout(parentLayout) {
    const {x, y, width} = parentLayout;
    const {height} = Dimensions.get('window');
    const newMapLayout = mapLayout;

    newMapLayout.width = width;
    newMapLayout.height = height * 0.4;

    setMapLayout(newMapLayout);
  }

  function onPoiPress(selectedItem) {
    const newItems = pickupPoints.map(function(item) {
      item.isSelected = item.id == selectedItem.id ? true : false;

      return item;
    });

    setPickupPoints(newItems);
    setSelectedPickup(selectedItem);
  }

  let poiCards = <View></View>;

  if (pickupPoints.length > 0) {
    poiCards = pickupPoints.map(function(item, key) {
      return (
        <PointOfInterestCard
          isSelected={item.isSelected}
          onPress={onPoiPress}
          item={item}
          key={key}
        />
      );
    });
  }

  return (
    <View
      style={[
        Styles.flexOne,
        {
          backgroundColor: Colors.backgroundColor,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 5,
        },
      ]}>
      <Backlink step={2} onPress={_goBack} />

      <View style={{flex: 0.15, paddingTop: 15}}>
        <Text style={Styles.tunnelTitle}>Choisis le lieu de livraison</Text>
      </View>

      <View
        style={{flex: 0.4, minHeight: 275, paddingTop: 0, marginTop: -15}}
        onLayout={event => {
          adjustMapLayout(event.nativeEvent.layout);
        }}>
        <CustomTextInput
          inputLabel="Code postal"
          inputPlaceholder="Ton Code Postal"
          onChangeText={val => _handleChange('userZipCode', val)}
          isValid={localValid.userZipCode}
          currentValue={localAdress.userZipCode}
        />
        <OpenStreetMap
          items={pickupPoints}
          onPoiPress={onPoiPress}
          width={mapLayout.width}
          height={mapLayout.height}
          latitude={currentPosition.coords.latitude}
          longitude={currentPosition.coords.longitude}
        />
      </View>

      <ScrollView
        style={{
          flex: 0.45,
          width: '100%',
          bottom: 0,
          marginTop: -40,
          maxHeight: 280,
          paddingBottom: 80,
        }}>
        {poiCards}
      </ScrollView>

      {selectedPickup && (
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
      )}
    </View>
  );
}
