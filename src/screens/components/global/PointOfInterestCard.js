import React, {useState} from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';

import TunnelCartSummaryStyle from '../../../styles/components/TunnelCartSummary';
import Styles from '../../../styles/Styles';

import PropTypes from 'prop-types';

PointOfInterestCard.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default function PointOfInterestCard(props) {
  const [localHeight, setLocalHeight] = useState(0);
  const item = props.item;
  const textStyle = {
    lineHeight: 21,
    color: '#4F4F4F',
    fontSize: 12,
    fontFamily: 'Chivo-Regular',
  };

  function renderTimeTable() {
    console.log(item.horaires);
    var _return = [];

    for (const timetable in item.horaires) {
      const dayTable = item.horaires[timetable];
      let time = dayTable.am;
      if (dayTable.pm) {
        time = time + ' ' + dayTable.pm;
      }
      _return.push(
        <Text style={[textStyle, {textTransform: 'capitalize'}]}>
          {timetable} : {time}
        </Text>,
      );
    }

    return (
      <View style={{height: localHeight, overflow: 'hidden', paddingLeft: 27}}>
        {_return}
      </View>
    );
  }

  function displayTimeTable() {
    if (localHeight > 0) {
      setLocalHeight(0);
    } else {
      setLocalHeight(7 * 21);
    }
  }

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
      onPress={() => {
        console.log(item);
        props.onPress(item);
      }}>
      <View
        style={[
          Styles.withWhiteShadow,
          {
            padding: 10,
            backgroundColor: props.isSelected ? '#EBB1C8' : '#FFFFFF',
            borderRadius: 7,
          },
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
                textStyle,
              ]}>
              {item.name} {item.street} {item.zipCode} {item.city}
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
                textStyle,
              ]}>
              01 23 45 67 89 00
            </Text>
          </View>
        </View>

        <View style={TunnelCartSummaryStyle.pictureAndTextWrapper}>
          <TouchableOpacity
            onPress={displayTimeTable}
            style={{flexDirection: 'row'}}>
            <View>
              <Image
                style={TunnelCartSummaryStyle.pictureAndTextPicture}
                source={require('../../../assets/pictures/picto-clock.png')}
              />
            </View>
            <View>
              {localHeight == 0 && (
                <Text
                  style={[
                    TunnelCartSummaryStyle.subTitle,
                    TunnelCartSummaryStyle.emailAdress,
                    textStyle,
                  ]}>
                  Voir les horaires
                </Text>
              )}
              {localHeight > 0 && (
                <Text
                  style={[
                    TunnelCartSummaryStyle.subTitle,
                    TunnelCartSummaryStyle.emailAdress,
                    textStyle,
                  ]}>
                  Cacher les horaires
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
        {renderTimeTable()}
      </View>
    </TouchableOpacity>
  );
}
