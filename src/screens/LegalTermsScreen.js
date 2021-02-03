import React from 'react';

import {View, Text, ScrollView} from 'react-native';

import Colors from '../styles/Color';
import autoScrollToTop from '../hooks/autoScrollToTop';

export default function LegalTermsScreen(props) {
  autoScrollToTop(props);

  const contentStyle = {
    title: {
      color: Colors.secondaryText,
      fontFamily: Colors.appTitleFont,
      fontSize: 30,
      lineHeight: 34,
      marginBottom: 20,
      paddingBottom: 0,
      flex: 2,
    },
    subTitle: {
      color: Colors.secondaryText,
      fontFamily: Colors.appTitleFont,
      fontSize: 20,
      lineHeight: 25,
      marginTop: 10,
      marginBottom: 10,
      paddingBottom: 0,
      flex: 2,
    },
    text: {
      color: Colors.secondaryText,
      fontFamily: Colors.textFont,
      fontSize: 14,
      marginBottom: 10,
      paddingBottom: 0,
      marginTop: 0,
      paddingTop: 0,
      textAlign: 'left',
      flex: 1,
    },
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: 15,
        paddingBottom: 30,
      }}>
      <ScrollView style={{flex: 1}}>
        <Text style={contentStyle.title}>Mentions Légales</Text>

        <Text style={contentStyle.subTitle}>Éditeur de la plateforme</Text>
        <Text style={contentStyle.text}>
          La Plateforme est éditée par la Fabrique des Ministères sociaux située
          : Tour Mirabeau 39-43 Quai André Citroën 75015 PARIS Tél : 01 40 56 60
          00
        </Text>

        <Text style={contentStyle.subTitle}>Directeur de la publication</Text>
        <Text style={contentStyle.text}>
          Jérôme Salomon - Directeur général de la Santé
        </Text>

        <Text style={contentStyle.subTitle}>Hébergement de la plateforme</Text>
        <Text style={contentStyle.text}>
          Ce site est hébergé par Microsoft Azure France (région France centre)
          : Microsoft France 37 Quai du Président Roosevelt 92130
          ISSY-LES-MOULINEAUX
        </Text>
      </ScrollView>
    </View>
  );
}
