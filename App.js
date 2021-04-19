/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation'; //@TODO : Check package lint error
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import AppStack from './src/routes/routes';
// There is no file named AppSlider in /src/canvas/slider/
import AppSlider from './src/canvas/slider/Onboarding';
import Styles from './src/styles/Styles';

const AppContainer = createAppContainer(AppStack);

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [slides, setSlides] = useState([]);

  function _renderItem({item}) {
    if (screenWidth <= 320) {
      return (
        <View style={Styles.slide}>
          <View
            style={{
              flex: 8,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Image style={Styles.contentPicture} source={item.image} />
          </View>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text style={Styles.appTitle}>{item.title}</Text>
          </View>
          <View style={{flex: 4, alignSelf: 'center'}}>
            <Text style={Styles.text}>{item.text}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={Styles.slide}>
          <View
            style={{
              flex: 8,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Image style={Styles.contentPicture} source={item.image} />
          </View>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text style={Styles.appTitle}>{item.title}</Text>
          </View>
          <View style={{flex: 3, alignSelf: 'center'}}>
            <Text style={Styles.text}>{item.text}</Text>
          </View>
        </View>
      );
    }
  }

  function _onDone() {
    setShowRealApp(true);
  }

  if (showRealApp) {
    return <AppContainer />;
  } else {
    return (
      <AppSlider
        renderItem={_renderItem}
        slides={slides}
        onDone={_onDone}
        showSkipButton
        showPrevButton
        bottomButton
        nextLabel="Suivant"
        skipLabel="Passer"
        doneLabel="Terminer"
        prevLabel="Retour"
        onSkip={_onDone}
      />
    );
  }
}
