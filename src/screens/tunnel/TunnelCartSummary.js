'use strict';

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	Image,
	} from 'react-native';

/*import AsyncStorage from '@react-native-community/async-storage';
*/

import Styles from '../../styles/Styles';

export default class TunnelCartSummary extends React.Component {
	static navigationOptions = {
		title: 'Oh oui !',	
		headerLeft: null
	};
	
    constructor(props) {
         super(props);
		 this.state = {
		   loading: true,
		   dataSource:[]
		  };
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }

    componentDidMount() {
        fetch("http://127.0.0.1/api/contents")
			.then(response => response.json())
			.then((responseJson)=> 
			{
			  this.setState({
			  	loading: false,
			  	dataSource: responseJson
			  })
			})
		.catch(error=>console.log(error)) //to catch the errors if any
	}    

    componentWillUnmount() {
        //LoginManager.getInstance().off('onConnectionClosed', this._connectionClosed);
    }
    
    _onDone = () => 
  	{
    	this.props.navigation.navigate("TunnelOrderConfirm");
  	}
	render()
	{
		return (
			<View style={ Styles.flexOne }>
				<View style={{ flex: 0.05, paddingLeft: 10, paddingRight: 10 }} >
					<Text style={ Styles.textLeft }>Etape 4</Text>
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.tunnelTitle }>Ton récapitulatif</Text>
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.labelText }>Tes articles</Text>
					
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.labelText }>Adresse de livraison</Text>
					
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.labelText }>Nous t'enverrons un mail pour t'informer de l'expédition de ta commande à :</Text>
					<Text style={ Styles.labelText }>john@mail.com</Text>
				</View>
				<View style={{ 
					flex: 0.16, 
					paddingTop: 2, 
					paddingBottom: 2, 
					alignItems		: 'center',
					justifyContent	: 'center',
					flexDirection	: 'column',
 				}}>
 					<View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
 						<Text style={ Styles.placeholderText }>* Livraison prévue entre le XX et le XX</Text>
 					</View>
					<TouchableOpacity
						style={{ flex: 1, paddingTop: 2, paddingBottom: 2, width: '50%' }}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>Suivant</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

		);
	}
}