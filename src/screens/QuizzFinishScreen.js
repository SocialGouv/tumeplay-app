import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  YellowBox,
  Image,
  StyleSheet,
} from 'react-native';

import Colors from '../styles/Color';
import Styles from '../styles/Styles';

export default class QuizzFinishScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  render() {
    const headerStyle = StyleSheet.create({
      container: {},
      textContainer: {
        position: 'relative',
        paddingRight: 0,
        marginRight: 15,
        borderColor: '#123321',
        backgroundColor: 'transparent',
      },
      text: {
        borderRadius: 20,
        padding: 5,
        paddingTop: 8,
        paddingBottom: 8,
        textAlign: 'center',
        width: 100,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Colors.mainButton,
        color: Colors.mainButton,
        overflow: 'hidden',
        zIndex: 0,
      },
      picture: {
        position: 'absolute',
        right: 0,
        top: -3,
        width: 38,
        height: 38,
      },
    });

    return (
      <View
        style={{
          flex: 1,
          borderRadius: 7,
          backgroundColor: '#FEE7E3',
          position: 'relative',
        }}>
        <Image
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            resizeMode: 'contain',
          }}
          source={require('../assets/pictures/quizz-finish-background.png')}
        />

        <View style={{flex: 0.1}}></View>
        <View style={{flex: 0.15}}>
          <Text
            style={[
              Styles.finishText,
              {textDecorationColor: '#E55C22', textDecorationLine: 'underline'},
            ]}>
            Bravo !
          </Text>
        </View>
        <View style={{flex: 0.15, paddingLeft: 15, paddingRight: 15}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: Colors.mainButton,
            }}>
            Tu as gagné assez de points pour recevoir ton cadeau gratuitement !
          </Text>
        </View>

        <View style={{flex: 0.3, alignItems: 'center'}}>
          <Image
            style={Styles.PictureFinish}
            source={require('../assets/pictures/header-right.png')}
          />
          <Text style={headerStyle.text}>100 points !</Text>
        </View>

        <View style={{flex: 0.2}}></View>

        <View
          style={{position: 'absolute', width: '100%', bottom: 25, zIndex: 1}}>
          <TouchableOpacity
            style={[Styles.bottomButton, {borderRadius: 25}]}
            onPress={this.props.onOrder}>
            <Text style={Styles.bottomCommText}>Commander</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
