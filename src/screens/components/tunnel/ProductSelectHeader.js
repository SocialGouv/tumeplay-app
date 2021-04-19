import React, {useState, useEffect} from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';

import Styles from '../../../styles/Styles';
import TunnelProductSelectStyle from '../../../styles/components/TunnelProductSelect';
import UnderlineText from '../global/UnderlineText';

import useIsMounted from '../../../hooks/isMounted';
import User from '../../../services/User';

export default function ProductSelectHeader() {
  const [availableTokens, setAvailableToken] = useState(0);
  //const [isMounted, setIsMounted] = useState(false);

  const isMounted = useIsMounted();

  useEffect(() => {
    async function _fetchTokens() {
      const _tokens = await User.getTokensAmount();
      if (isMounted.current) {
        setAvailableToken(_tokens);
      }
    }

    //setIsMounted(true);
    _fetchTokens();
  }, [isMounted]);

  return (
    <SafeAreaView>
      <Text style={Styles.appTitle}>Commande ta box gratuitement !</Text>
      <View>
        <Text
          style={[
            Styles.text,
            Styles.textLeft,
            {fontSize: 18, flex: 1},
          ]}>
          <UnderlineText borderMargin={-4} textStyle={Styles.text}>
            Super
          </UnderlineText>{' '}
          Tu as {availableTokens} points, choisis une de nos quatre boxs pour en
          apprendre plus et passer à l&apos;action en toute sécurité !
        </Text>
      </View>
      <Image
        style={TunnelProductSelectStyle.topLogoPicture}
        source={require('../../../assets/pictures/tunnel-congrats.png')}
      />
      <View style={TunnelProductSelectStyle.topLogoCounterWrapper}>
        <View style={TunnelProductSelectStyle.textWrapper}>
          <Text style={TunnelProductSelectStyle.topLogoCounter}>
            {availableTokens}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
