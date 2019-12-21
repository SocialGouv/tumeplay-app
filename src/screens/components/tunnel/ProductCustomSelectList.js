import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import ProductCustomSelectListRow from './ProductCustomSelectListRow';

ProductCustomSelectList.propTypes = {
  item: PropTypes.object,
  shortMode: PropTypes.bool,
};

export default function ProductCustomSelectList(props) {
  const [productBox] = useState(props.item);
  const [allProducts] = useState(props.allProducts);
  const [selectAllowed, setSelectAllowed] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  function onPress(item, _newState) {
    // not at max OR we were at max, now we deselect one.
    const _limitReached = selectedProducts.length + 1 > 4;
    const _isAllowed = !_limitReached || (_limitReached && !_newState);

    setSelectAllowed(_isAllowed);

    if (_isAllowed) {
      let _newProducts = [...selectedProducts];

      if (!_newState) {
        _newProducts = _newProducts.filter(
          localItem => localItem.id != item.id,
        );
      } else {
        _newProducts.push(item);
      }

      setSelectedProducts(_newProducts);
      props.onSelectChange(_newProducts);
    }

    return _isAllowed;
  }

  function _renderProductList(items) {
    if (items !== undefined) {
      return items.map((item, key) => {
        return (
          <ProductCustomSelectListRow
            key={key}
            item={item}
            onPress={onPress}
            selectAllowed={selectAllowed}
          />
        );
      });
    } else {
      return <View></View>;
    }
  }

  if (productBox === undefined) {
    return null;
  }

  return _renderProductList(allProducts);
}
