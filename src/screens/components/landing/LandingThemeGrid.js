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

  return (
    <FlatList
      scrollEnabled={true}
      data={props.themes}
      renderItem={({item}) => (
        <View style={LandingStyle.gridContainer}>
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
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns}
    />
  );
}
