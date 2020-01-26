import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import TunnelCartSummaryStyle from '../../../styles/components/TunnelCartSummary';
import Styles from '../../../styles/Styles';

import PropTypes from 'prop-types';

PointOfInterestCard.propTypes = {};

export default function PointOfInterestCard(props) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}
      onPress={props.onClose}>
      <View
        style={[
          Styles.withWhiteShadow,
          {padding: 10, backgroundColor: '#FFFFFF', borderRadius: 7},
        ]}>
        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <View>
            <Image
              style={TunnelCartSummaryStyle.pictureAndTextPicture}
              source={require('../../../assets/pictures/picto-pin.png')}
            />
          </View>
          <View>
            <Text
              style={[
                TunnelCartSummaryStyle.subTitle,
                TunnelCartSummaryStyle.emailAdress,
                {
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontSize: 12,
                  fontFamily: 'Chivo-Regular',
                },
              ]}>
              49 Rue de Labelleville 95690 Nesles la vallée
            </Text>
          </View>
        </View>

        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <View>
            <Image
              style={TunnelCartSummaryStyle.pictureAndTextPicture}
              source={require('../../../assets/pictures/picto-phone.png')}
            />
          </View>
          <View>
            <Text
              style={[
                TunnelCartSummaryStyle.subTitle,
                TunnelCartSummaryStyle.emailAdress,
                {
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontSize: 12,
                  fontFamily: 'Chivo-Regular',
                },
              ]}>
              01 23 45 67 89 00
            </Text>
          </View>
        </View>

        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <View>
            <Image
              style={TunnelCartSummaryStyle.pictureAndTextPicture}
              source={require('../../../assets/pictures/picto-clock.png')}
            />
          </View>
          <View>
            <Text
              style={[
                TunnelCartSummaryStyle.subTitle,
                TunnelCartSummaryStyle.emailAdress,
                {
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontSize: 12,
                  fontFamily: 'Chivo-Regular',
                },
              ]}>
              Voir les horaires
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
