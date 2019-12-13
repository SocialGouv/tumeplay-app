import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import CustomFooter from './CustomFooter';
import Styles from '../styles/Styles';
import Colors from '../styles/Color';
import RemoteApi from '../services/RemoteApi';

LandingScreen.propTypes = {
  navigation: PropTypes.object,
};
export default function LandingScreen(props) {
  const [localThemes, setLocalThemes] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const item = {
    arrow: require('../assets/pictures/right-arrow.png'),
    title: 'Quel est le thème que tu veux découvrir ?',
    subtitle:
      'Explore nos thématiques, découvre les questions réponses associées et réponds aux quizz pour gagner des box !',
    bottomTitle1: 'Trouve les lieux utiles à tes besoins',
    bottomTitle2: 'Échange avec un professionnel',
  };

  useEffect(() => {
    async function _fetchThemes() {
      const _themes = await RemoteApi.fetchThemes();

      if (isMounted) {
        setLocalThemes(_themes);
      }
    }

    setIsMounted(true);
    _fetchThemes();
  }, [isMounted]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  function _onSelectedTheme() {
    props.navigation.navigate('ContentScreen');
  }

  function _onSelected_lieuxUtiles() {
    props.navigation.navigate('ContentScreen');
  }

  function _onSelected_echangeProfessionnel() {
    props.navigation.navigate('ContentScreen');
  }

  function Grid() {
    // Setting up images objects

    const numColumns = 2;
    const themeGridStyles = StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#000000',
        flexDirection: 'column',
        maxWidth: 550,
      },
      itemButton: {},
      itemPicture: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        height: 150,
        flex: 1,
      },
      itemTextContainer: {
        padding: 7,
        paddingLeft: 15,
        borderBottomLeftRadius: 7,
        backgroundColor: '#FFFFFF',
        borderBottomRightRadius: 7,
        width: '100%',
      },
      itemText: {
        margin: 0,
        color: Colors.mainButton,
        fontSize: 22,
      },
    });
    return (
      <FlatList
        scrollEnabled={true}
        data={localThemes}
        renderItem={({item}) => (
          <View style={themeGridStyles.container}>
            <TouchableOpacity
              style={themeGridStyles.itemButton}
              onPress={() => {
                _onSelectedTheme(item);
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  source={item.imageObj}
                  style={themeGridStyles.itemPicture}
                />
              </View>

              <View style={themeGridStyles.itemTextContainer}>
                <Text style={themeGridStyles.itemText}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    );
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView>
        {/* Title and grid */}
        <View style={{flex: 0.75}}>
          <Text style={Styles.landingScreenTitle}>{item.title}</Text>
          <Text style={Styles.landingScreenSubtitle}>{item.subtitle}</Text>
          <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            <Grid></Grid>
          </View>
        </View>

        {/* Bottom part */}
        <View style={{flex: 0.25, marginLeft: 15, marginRight: 15}}>
          <TouchableOpacity
            style={[Styles.landingBottomWrapper]}
            onPress={_onSelected_lieuxUtiles}>
            <Text style={Styles.landingBottomText}>{item.bottomTitle1}</Text>
            <View
              style={{
                flex: 0.25,
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
          </TouchableOpacity>

          <TouchableOpacity
            style={[Styles.landingBottomWrapper]}
            onPress={_onSelected_echangeProfessionnel}>
            <Text style={Styles.landingBottomText}>{item.bottomTitle2}</Text>
            <View
              style={{
                flex: 0.25,
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
          </TouchableOpacity>
        </View>
        <CustomFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
