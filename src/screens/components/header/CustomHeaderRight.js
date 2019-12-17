import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import PropTypes from 'prop-types';

import User from '../../../services/User';
import Colors from '../../../styles/Color';

import useIsMounted from '../../../hooks/isMounted';

CustomHeaderRight.propTypes = {
  navigation: PropTypes.object,
  availableTokens: PropTypes.number,
};

export default function CustomHeaderRight(props) {
  const [availableTokens, setAvailableTokens] = useState(props.availableTokens);
  const [eventListener, setEventListener] = useState(false);

  const isMounted = useIsMounted();

  const headerStyle = StyleSheet.create({
    container: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignContent: 'flex-end',
      alignItems: 'center',
    },
    textContainer: {
      position: 'relative',
      paddingRight: 0,
      marginRight: 15,
      borderColor: '#123321',
      backgroundColor: 'transparent',
    },
    text: {
      borderRadius: 15,
      padding: 5,
      paddingTop: 8,
      paddingBottom: 3,
      marginRight: 20,
      textAlign: 'right',
      width: 85,
      paddingLeft: 5,
      paddingRight: 25,
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderColor: Colors.mainButton,
      color: Colors.mainButton,
      fontFamily: Colors.textFont,
      overflow: 'hidden',
    },
    picture: {
      position: 'absolute',
      right: 0,
      top: -3,
      width: 38,
      height: 38,
    },
  });

  useEffect(() => {
    async function _fetchTokens() {
      const _tokens = await User.getTokensAmount();
      if (isMounted.current) {
        setAvailableTokens(_tokens);

        const _listener = EventRegister.addEventListener(
          'tokensAmountChanged',
          data => {
            setAvailableTokens(data);
          },
        );
        setEventListener(_listener);
      }

      return () => {
        EventRegister.removeEventListener(eventListener);
      };
    }

    _fetchTokens();
  }, [eventListener, isMounted]);

  function _gotoProductSelect() {
    props.navigation.navigate('TunnelProductSelect');
  }

  return (
    <View style={headerStyle.container}>
      <View style={headerStyle.textContainer}>
        <TouchableOpacity onPress={_gotoProductSelect}>
          <Text style={headerStyle.text}>{availableTokens}</Text>
          <Image
            source={require('../../../assets/pictures/header-right.png')}
            style={headerStyle.picture}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
