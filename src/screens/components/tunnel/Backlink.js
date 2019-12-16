import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import BacklinkStyle from '../../../styles/components/TunnelBacklink';
import PropTypes from 'prop-types';

Backlink.propTypes = {
  step: PropTypes.number,
  onPress: PropTypes.func,
};

export default function Backlink(props) {
  return (
    <View style={BacklinkStyle.backlinkWrapper}>
      <TouchableOpacity
        style={BacklinkStyle.backlinkButton}
        onPress={props.onPress}>
        <Image
          style={BacklinkStyle.backlinkArrow}
          source={require('../../../assets/pictures/left-arrow.png')}
        />

        <Text style={BacklinkStyle.backlinkText}>étape {props.step} / 4</Text>
      </TouchableOpacity>
    </View>
  );
}
