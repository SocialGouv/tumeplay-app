import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import {createBrowserApp} from '@react-navigation/web';

import * as serviceWorker from './serviceWorker';

import AppStack from './routes/routes';

//const AppContainer = createAppContainer(AppStack);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const App = createBrowserApp(AppStack);

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {rootTag: document.getElementById('root')});
