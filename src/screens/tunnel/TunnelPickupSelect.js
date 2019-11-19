'use strict';

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	} from 'react-native';

/*import AsyncStorage from '@react-native-community/async-storage';
*/

import Styles from '../../styles/Styles';

export default class TunnelPickupSelect extends React.Component {
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
    	this.props.navigation.navigate("TunnelUserAddress");
  	}
	render()
	{
		return (
			<View style={ Styles.flexOne }>
				<View style={{ flex: 0.05, paddingLeft: 10, paddingRight: 10 }} >
					<Text style={ Styles.textLeft }>Etape 2</Text>
				</View>
				<View style={{ flex: 0.3, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={ Styles.tunnelTitle }>Choisis le lieu de livraison</Text>
					<Text style={ Styles.textLeft }>Affichage de la carte</Text>
				</View>
				<View style={{ 
					flex: 0.16, 
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
							<Text style={ Styles.tunnelButtonText }>A Domicile</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

		);
	}
}