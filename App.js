/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

import AppStack from './src/routes/routes';
import AppSlider from './src/canvas/slider/AppSlider';
import Styles from './src/styles/Styles';

const AppContainer = createAppContainer(AppStack);

const slides = [
  {
    key: 'somethun',
    title: 'Bienvenue sur Oh! Oui',
    text:
      "L'application qui t'accompagne sur les questions que tu n'oses poser à personne.",
    image: require('./assets/pictures/pass.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Bienvenue #2',
    text: 'Deuxième description',
    image: require('./assets/pictures/pass3.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Bienvenue #3',
    text: 'Une troisième description\nLorem ipsum',
    image: require('./assets/pictures/pass2.png'),
    backgroundColor: '#22bcb5',
  },
];
const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends React.Component {
  state = {
    showRealApp: false,
  };

  _renderItem = ({item}) => {
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
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  render() {
    if (this.state.showRealApp) {
      return <AppContainer />;
    } else {
      return (
        <AppSlider
          renderItem={this._renderItem}
          slides={slides}
          onDone={this._onDone}
          showSkipButton
          showPrevButton
          bottomButton
          nextLabel="Suivant"
          skipLabel="Passer"
          doneLabel="Terminer"
          prevLabel="Retour"
          onSkip={this._onDone}
        />
      );
    }
  }
}

/*
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          	<View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} >Welcome to PassPréservatif</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
*/
