'use strict';

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    YellowBox,
	} from 'react-native';

/*import AsyncStorage from '@react-native-community/async-storage';
*/

import Styles from '../styles/Styles';

export default class LandingPage extends React.Component {
	static navigationOptions = {
		title: 'Oh oui !',	
		//headerLeft: null
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
    	this.props.navigation.navigate("TunnelCartSummary");
  	}
	render()
	{
		
		return (
			<View style={ Styles.flexOne }>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.tunnelTitle }>Quel est le thème que tu souhaites découvrir ?</Text>
				</View>

				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.labelText }>Adresse *</Text>
					<TextInput
						placeholder="Ton adresse"
						style={ Styles.inputTypeText }
					/>
				</View>
				
				<View style={{ 
					flex: 0.08, 
					paddingTop: 2, 
					paddingBottom: 2, 
					alignItems		: 'flex-start',
					justifyContent	: 'flex-start',
					flexDirection	: 'column',
 				}}>
 					<View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
 						<Text style={ Styles.placeholderText }>* Champs Obligatoire</Text>
 					</View>
				</View>
				<View style={{ 
					flex: 0.08, 
					paddingTop: 2, 
					paddingBottom: 2, 
					alignItems		: 'center',
					justifyContent	: 'center',
					flexDirection	: 'column',
 				}}>
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