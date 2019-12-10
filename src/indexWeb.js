import React from 'react';
import ReactDOM from 'react-dom';
import {name as appName} from './app.json';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {createBrowserApp} 	from '@react-navigation/web';

import * as serviceWorker from './serviceWorker';

import AppStack 			from './routes/routes';
import NavigationService 	from './routes/NavigationService';
import AppSlider 			from './canvas/slider/AppSlider';
import Styles 				from './styles/Styles';

//const AppContainer = createAppContainer(AppStack);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const App = createBrowserApp(AppStack);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') });


serviceWorker.unregister();