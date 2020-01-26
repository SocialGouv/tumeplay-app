import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
OpenStreetMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  items: PropTypes.array,
};
export default function OpenStreetMap(props) {
  const [region, setRegion] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
    const _localRegion = {
      latitude: props.latitude,
      longitude: props.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setRegion(_localRegion);
  }, [props.latitude, props.longitude]);

  const _pins = props.items.map((item, key) => {
    return (
      <Marker
        key={key}
        title={item.title}
        coordinate={item.coordinates}
        identifier={item.identifier}
        item={item}
        onPress={(e, item) => {
          console.log(e.nativeEvent);
          console.log('ENTER', e.nativeEvent.sourceTarget.options.item);
        }}>
        <Image
          style={{height: 40, width: 28}}
          source={require('../../../assets/pictures/pins/pin-raw.png')}
        />
      </Marker>
    );
  });

  return (
    <View style={{marginTop: 5, borderRadius: 7}}>
      <MapView
        region={region}
        provider={null}
        mapType="none"
        rotateEnabled={false}
        style={styles.map}
        showsUserLocation>
        {_pins}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: 600,
    height: 275,
  },
});
