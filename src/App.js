import {createAppContainer} from 'react-navigation'; //@TODO : Check package lint error
import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

import AppStack from './routes/routes';
import AppSlider from './canvas/slider/AppSlider';
import Styles from './styles/Styles';
import RemoteApi from './services/RemoteApi';

import useIsMounted from './hooks/isMounted';

const AppContainer = createAppContainer(AppStack);

App.propTypes = {
  item: PropTypes.object,
};

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [slides, setSlides] = useState([]);
  const isMounted = useIsMounted();
  const [height, setHeight] = useState(0);

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

  function _onDone() {
    setShowRealApp(true);
  }

  if (showRealApp) {
    return <AppContainer style={{flex: 1, flexGrow: 1}} />;
  } else {
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
        style={{
          flex: 1,
          height: height,
          alignItems: 'stretch',
          alignSelf: 'stretch',
        }}
        onLayout={event => {
          const {height} = event.nativeEvent.layout;
          setHeight(height);
        }}
      />
    );
  }
}
