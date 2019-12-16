import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import ContentCard from './ContentCard';

ContentCards.propTypes = {
  localContents: PropTypes.array,
};

export default function ContentCards(props) {
  if (props.localContents === undefined) {
    return <View></View>;
  }

  function _mapThem(contents) {
    return contents.map((item, key) => {
      return <ContentCard key={key} item={item} />;
    });
  }

  return <View>{_mapThem(props.localContents)}</View>;
}
