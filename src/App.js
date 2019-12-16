import {createAppContainer} from 'react-navigation'; //@TODO : Check package lint error
import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppStack from './routes/routes';
import AppSlider from './canvas/slider/AppSlider';
import Styles from './styles/Styles';
import RemoteApi from './services/RemoteApi';

import useIsMounted from './hooks/isMounted';

const AppContainer = createAppContainer(AppStack);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [slides, setSlides] = useState([]);
  const isMounted = useIsMounted();

  useEffect(() => {
    async function _fetchSlides() {
      const _questions = await RemoteApi.fetchBoarding();

      if (isMounted.current) {
        setSlides(_questions);
      }
    }

    _fetchSlides();
  }, [isMounted]);

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
            <Image style={Styles.contentPicture} source={item.picture} />
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
          <View style={{flex: 8, alignItems: 'center'}}>
            <Image style={Styles.contentPicture} source={item.picture} />
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
    return <AppContainer style={{flex: 1, flexBasis: '100%'}} />;
  } else {
    console.log('ENTERING');

    return (
      <AppSlider
        renderItem={_renderItem}
        slides={slides}
        onDone={_onDone}
        showSkipButton
        bottomButton
        skipLabel="Commencer"
        doneLabel="Commencer"
        onSkip={_onDone}
        style={{flex: 1, flexBasis: '100%'}}
      />
    );
  }
}
