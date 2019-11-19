import {createAppContainer} from 'react-navigation';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, 
  Dimensions
} from 'react-native';

import AppStack 			from './routes/routes';
import NavigationService 	from './routes/NavigationService';
import AppSlider 			from './canvas/slider/AppSlider';
import Styles 				from './styles/Styles';

const AppContainer = createAppContainer(AppStack);

const slides = [
  {
    key: 'somethun',
    title: 'Bienvenue sur TuMePlay',
    text: 'L\'application qui t\'accompagne sur les questions que tu n\'oses poser à personne.',
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
  }
];
const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends React.Component 
{

	state = {
    	showRealApp: false
	}

	_renderItem = ({ item }) => 
	{
            if (screenWidth <= 320) 
            {
               return (

                   <View style={ Styles.slide }>
                        <View style={{ flex : 8, flexBasis: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image style={ Styles.contentPicture } source={item.image} />
                        </View>
                         <View style={{ flex : 1, alignSelf: "center"}}>
                               <Text  style={ Styles.appTitle  }>{item.title}</Text>
                         </View>
                         <View style={{ flex : 4, alignSelf: "center" }}>
                               <Text  style={ Styles.text  }>{item.text}</Text>
                         </View>
                   </View>


                );
            }
            else
            {
                return (

                  <View style={ Styles.slide}>
                       <View style={{ flex : 8, alignItems: 'center' }}>
                           <Image style={ Styles.contentPicture } source={item.image} />
                       </View>
                        <View style={{ flex : 1, alignSelf: "center"}}>
                              <Text  style={ Styles.appTitle  }>{item.title}</Text>
                        </View>
                        <View style={{ flex : 3, alignSelf: "center" }}>
                              <Text  style={ Styles.text  }>{item.text}</Text>
                        </View>
                  </View>

               );
            }


	}
  	_onDone = () => 
  	{
    	this.setState({ showRealApp: true });
  	}
  	render() 
  	{
	    if (this.state.showRealApp) 
	    {
	       return <AppContainer />;
		} 
	    else 
	    {
	      return <AppSlider
	      	renderItem={this._renderItem}
	      	slides={slides} 
	      	onDone={this._onDone}
	      	showSkipButton
	      	showPrevButton
	      	bottomButton
	      	nextLabel="Suivant"
	      	skipLabel='Passer'
	      	doneLabel="Terminer"
		  	prevLabel="Retour"
		  	onSkip={this._onDone}
	      	/>;
	    }
	}
}