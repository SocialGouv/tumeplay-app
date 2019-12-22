import React from 'react';
import {Image, TouchableOpacity, View, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';

import LandingStyle from '../../../styles/components/LandingScreen';

LandingThemeGrid.propTypes = {
  themes: PropTypes.array,
  onPress: PropTypes.func,
};

export default function LandingThemeGrid(props) {
  const numColumns = 2;
  let currentIndex = 0;
  return (
    <FlatList
      scrollEnabled={true}
      data={props.themes}
      style={{paddingLeft: 15, paddingRight: 15}}
      renderItem={({item}) => {
        // That's a really dirty way; but strangely the only one working.
        const localStyle =
          currentIndex % 2 == 0 ? {marginRight: 7} : {marginLeft: 7};
        currentIndex = currentIndex + 1;
        return (
          <View style={[LandingStyle.gridContainer, localStyle]}>
            <TouchableOpacity
              style={LandingStyle.gridItemButton}
              onPress={() => {
                props.onPress(item);
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  source={item.picture}
                  style={LandingStyle.gridItemPicture}
                />
              </View>

              <View style={LandingStyle.gridItemTextContainer}>
                <Text style={LandingStyle.gridItemText}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      }}
      numColumns={numColumns}
    />
  );
}
