import {createAppContainer} from 'react-navigation';
import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppStack from './routes/routes';
import AppSlider from './canvas/slider/AppSlider';
import Styles from './styles/Styles';
const AppContainer = createAppContainer(AppStack);
const screenWidth = Math.round(Dimensions.get('window').width);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false,
      slides: [],
    };
  }
  componentDidMount() {
    this._fetchSlides();
  }

  _fetchSlides = async () => {
    // @TODO : Enable / add BoardingContent to backend
    //const _questions = await RemoteApi.fetchBoarding();
    const _questions = [
      {
        key: 'boarding-1',
        title: 'Bienvenue !',
        text:
          "L'application qui te permet d'en apprendre plus sur la sexualité.",
        picture: require('./assets/pictures/boarding/boarding-4.jpeg'),
      },
      {
        key: 'boarding-2',
        title: 'Informe toi !',
        text: 'Choisis ta thématique et consulte nos contenus pensés pour toi.',
        picture: require('./assets/pictures/boarding/boarding-3.jpeg'),
      },
      {
        key: 'boarding-3',
        title: 'Teste toi !',
        text:
          'Réponds à nos quizz pour tester tes connaissances et gagne des points.',
        picture: require('./assets/pictures/boarding/boarding-2.jpeg'),
      },
      {
        key: 'boarding-4',
        title: 'Reçois ta box !',
        text:
          'Commande une de nos box remplie de préservatifs et autres accessoires gratuitement.',
        picture: require('./assets/pictures/boarding/boarding-1.jpeg'),
      },
      {
        key: 'boarding-5',
        title: "Besoin d'aide ?",
        text:
          "Nous sommes aussi là pour t'orienter au bon endroit en cas de besoin.",
        picture: require('./assets/pictures/boarding/boarding-5.jpeg'),
      },
    ];

    this.setState({slides: _questions});
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
  };

  _onDone = () => {
    this.setState({showRealApp: true});
  };

  render() {
    console.log('Entering App.');
    if (this.state.showRealApp) {
      return <AppContainer style={{flex: 1, flexBasis: '100%'}} />;
    } else {
      console.log('ENTERING');

      return (
        <AppSlider
          renderItem={this._renderItem}
          slides={this.state.slides}
          onDone={this._onDone}
          showSkipButton
          bottomButton
          skipLabel="Commencer"
          doneLabel="Commencer"
          onSkip={this._onDone}
          style={{flex: 1, flexBasis: '100%'}}
        />
      );
    }
  }
}
