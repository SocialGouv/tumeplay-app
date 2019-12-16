import React, {useState} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

ProductContentList.propTypes = {
  item: PropTypes.object,
  shortMode: PropTypes.bool,
};

export default function ProductContentList(props) {
  const [productBox] = useState(props.item);
  const [shortMode] = useState(props.shortMode);

  function renderRow(key, itemQty, itemText) {
    return (
      <View key={key} style={{flexDirection: 'row'}}>
        <Text style={{color: '#4F4F4F', fontSize: 14}}>{'\u2022'}</Text>
        <Text style={{flex: 1, paddingLeft: 5, color: '#4F4F4F', fontSize: 14}}>
          {itemQty} {itemText}
        </Text>
      </View>
    );
  }

  function _renderProductList(items) {
    if (items !== undefined) {
      return items.map((item, key) => {
        const itemText = shortMode ? item.shortTitle : item.title;
        return renderRow(key, item.qty, itemText);
      });
    } else {
      return <View></View>;
    }
  }

  if (productBox === undefined) {
    return null;
  }

  return _renderProductList(productBox.products);
}
