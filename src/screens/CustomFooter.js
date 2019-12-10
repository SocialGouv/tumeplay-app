import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class CustomFooter extends React.Component {
  render() {
	  const footerStyle = StyleSheet.create({
		  text 			 : 
		  {
			  	color: '#FFFFFF',
		  },
		  link 			 : 
		  {
				flexShrink		: 1,
				flexGrow 		: 1,
		  },
		  textDecoration :
		  {
			  	textDecorationColor: '#FFFFFF', 
				textDecorationLine: 'underline',
				textAlign: 'center',
				fontSize: 13
		  }
	  });
    return (
      	<View style={{ flex : 1, flexDirection: 'column', paddingLeft: 15, paddingRight: 15, marginTop: 15 }}>
      		<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ flex: 0.2 }}>
					<Image
						source={ require('../assets/pictures/logo-ministere.png')}
						style={{ marginRight: 15, width: 60, height: 60 }}
					/>
				</View>
				<View style={{ flex: 0.8 }}>
					<View style={{ flex: 1, flexDirection: "column", paddingTop: 3 }}>
						<View>
							<Image
								source={ require('../assets/pictures/text-logo.png')}
								style={{ marginRight: 15, width: 100, height: 20 }}
							/>
	
						</View>
						<View>
							<Text style={ footerStyle.text }>Tumeplay est une initiative du Ministère de la santé autour de la prévention sexuelle.</Text>
						</View>
					</View>
				</View>
			</View>
			
			<View style={{ flex : 1, flexDirection: 'column' }}>
				<View style={{ flex : 1, flexDirection: 'row', paddingTop: 15 }}>
					<TouchableOpacity style={ footerStyle.link }>
						<Text style={[ footerStyle.text, footerStyle.textDecoration ]}>Nous contacter</Text>
					</TouchableOpacity>
					
					<TouchableOpacity style={ footerStyle.link }>
						<Text style={[ footerStyle.text, footerStyle.textDecoration ]}>Trouver les lieux utiles</Text>
					</TouchableOpacity>
					
					<TouchableOpacity style={ footerStyle.link }>
						<Text style={[ footerStyle.text, footerStyle.textDecoration ]}>Lire notre charte</Text>
					</TouchableOpacity>
				</View>				
			</View>
		</View>
    );
  }
}