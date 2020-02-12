import React, {useState, useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import MapView, {Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
OpenStreetMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  items: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  onPoiPress: PropTypes.func,
  onRegionChange: PropTypes.func,
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
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    };
    setRegion(_localRegion);
  }, [
    props.latitude,
    props.longitude,
    region.latitudeDelta,
    region.longitudeDelta,
  ]);

  function onRegionChange(region) {
    setRegion(region);
    props.onRegionChange(region);
  }

  return (
    <View style={{marginTop: 5, borderRadius: 7}}>
      <MapView
        region={region}
        provider={null}
        mapType="none"
        rotateEnabled={false}
        onRegionChange={onRegionChange}
        style={{width: props.width, height: props.height}}
        showsUserLocation>
        {props.items.length > 0 &&
          props.items.map((item, key) => {
            const markerPin = item.isSelected
              ? require('../../../assets/pictures/pins/pin-selected.png')
              : require('../../../assets/pictures/pins/pin-raw.png');
            return (
              <Marker
                key={key}
                title={item.title}
                coordinate={item.coordinates}
                identifier={item.identifier}
                item={item}
                onPress={e => {
                  console.log(e);
                  props.onPoiPress(e.nativeEvent.sourceTarget.options.item);
                }}>
                <Image style={{height: 40, width: 28}} source={markerPin} />
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
}
