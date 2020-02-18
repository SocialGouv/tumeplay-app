import React, {useState, useEffect} from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import useIsMounted from '../hooks/isMounted';
import autoScrollToTop from '../hooks/autoScrollToTop';

import UnderlineText from './components/global/UnderlineText';
import CustomTouchableOpacity from './components/global/CustomTouchableOpacity';

import LandingThemeGrid from './components/landing/LandingThemeGrid';

import CustomFooter from './CustomFooter';
import Styles from '../styles/Styles';

import RemoteApi from '../services/RemoteApi';
import UserService from '../services/User';

LandingScreen.propTypes = {
  navigation: PropTypes.object,
};
export default function LandingScreen(props) {
  const [localThemes, setLocalThemes] = useState([]);

  const isMounted = useIsMounted();

  autoScrollToTop(props);

  const item = {
    arrow: require('../assets/pictures/right-arrow.png'),
    title: 'Quel est le thème que tu veux découvrir ?',
    subtitle:
      'Explore nos thématiques, découvre les questions réponses associées et réponds aux quiz pour gagner des box !',
    bottomTitle1: 'Trouve les lieux utiles à tes besoins',
    bottomTitle2: 'Échange avec un professionnel',
  };

  useEffect(() => {
    async function _fetchThemes() {
      if (isMounted.current) {
        const _themes = await RemoteApi.fetchThemes();

        if (isMounted.current) {
          setLocalThemes(_themes);
        }
      }
    }

    async function _fetchUserOrRegister() {
      if (isMounted.current) {
        const uniqId = await UserService.getUniqueId();

        if (uniqId !== undefined && uniqId) {
          const {token} = await RemoteApi.registerUser(uniqId);

          if (token) {
            await UserService.setJWT(token);
          }
        }
      }
    }

    _fetchUserOrRegister();
    _fetchThemes();
  }, [isMounted]);

  function _onSelectedTheme(selectedTheme) {
    props.navigation.navigate('ContentScreen', {selectedTheme: selectedTheme});
  }

  function _onSelected_lieuxUtiles() {
    props.navigation.navigate('TunnelProductSelect');
  }

  function _onSelected_echangeProfessionnel() {
    props.navigation.navigate('ContentScreen');
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView>
        {/* Title and grid */}
        <View style={{flex: 0.75}}>
          <Text style={Styles.landingScreenTitle}>{item.title}</Text>
          <Text style={Styles.landingScreenSubtitle}>
            Explore nos thématiques, découvre les questions réponses associées
            et réponds aux quiz pour{' '}
            <UnderlineText textStyle={Styles.landingScreenSubtitle}>
              gagner des box !
            </UnderlineText>
          </Text>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            <LandingThemeGrid
              onPress={_onSelectedTheme}
              themes={localThemes}></LandingThemeGrid>
          </View>
        </View>

        {/* Bottom part */}
        <View style={{flex: 0.25, marginLeft: 15, marginRight: 15}}>
          <CustomTouchableOpacity
            style={[Styles.landingBottomWrapper]}
            onPress={_onSelected_lieuxUtiles}>
            <Text style={Styles.landingBottomText}>{item.bottomTitle1}</Text>
            <View
              style={{
                flex: 0.2,
                paddingRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={item.arrow}
              />
              <Text style={Styles.landingBottomButtonNext}>Voir</Text>
            </View>
          </CustomTouchableOpacity>
          {/*
          <CustomTouchableOpacity
            style={[Styles.landingBottomWrapper]}
            onPress={_onSelected_echangeProfessionnel}>
            <Text style={Styles.landingBottomText}>{item.bottomTitle2}</Text>
            <View
              style={{
                flex: 0.25,
                paddingRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  width: 10,
                  height: 10,
                  resizeMode: 'contain',
                }}
                source={item.arrow}
              />
              <Text style={Styles.landingBottomButtonNext}>Accéder</Text>
            </View>
          </CustomTouchableOpacity>
          */}
        </View>
        <CustomFooter navigation={props.navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
