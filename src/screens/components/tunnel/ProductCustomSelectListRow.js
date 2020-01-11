import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

ProductCustomSelectListRow.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

export default function ProductCustomSelectListRow(props) {
  const [item] = useState(props.item);
  const [isSelected, setIsSelected] = useState(false);

  const localStylesheet = StyleSheet.create({
    readMorePicture: {
      marginLeft: 7,
      marginRight: 7,
      width: 26,
      height: 26,
      marginTop: 3,
      paddingTop: 0,
      resizeMode: 'contain',
    },
    rowStyle: {
      flexDirection: 'row',
      flex: 1,
      shadowColor: '#4F4F4F',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.4,
      shadowRadius: 5,
      marginBottom: 15,
      borderRadius: 7,
      padding: 9,
      justifyContent: 'flex-start',
      alignSelf: 'center',
      alignItems: 'stretch',
      minWidth: '100%',
    },
    selectedRowStyle: {
      backgroundColor: 'rgba(199, 0, 78, 0.15)',
    },
  });

  const _targetPicture = isSelected
    ? require('../../../assets/pictures/filled-minus.png')
    : require('../../../assets/pictures/filled-plus.png');

  function onPress() {
    const _newState = !isSelected;
    const _selectAllowed = props.onPress(item, _newState);

    if (_selectAllowed) {
      setIsSelected(!isSelected);
    }
  }

  const _title = item.qty ? item.qty + ' ' + item.title : item.title;

  return (
    <View>
      <TouchableOpacity
        style={[
          localStylesheet.rowStyle,
          isSelected ? localStylesheet.selectedRowStyle : false,
        ]}
        onPress={() => {
          onPress(item);
        }}>
        <View style={{flex: 0.2, justifyContent: 'center'}}>
          <Image
            style={{width: '100%', resizeMode: 'stretch', height: '100%'}}
            source={item.picture}
          />
        </View>
        <View
          style={{
            flex: 0.7,
            paddingLeft: 5,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: '#F1732E',
              fontFamily: 'Chivo-Regular',
              fontSize: 15,
            }}>
            {_title}
          </Text>
          <Text
            style={{
              color: '#4F4F4F',
              fontFamily: 'Chivo-Regular',
              fontSize: 15,
            }}>
            {item.description}
          </Text>
        </View>
        <Text
          style={{
            flex: 0.1,
            paddingLeft: 5,
            alignContent: 'flex-end',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            alignSelf: 'center',
          }}>
          <Image
            style={localStylesheet.readMorePicture}
            source={_targetPicture}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
