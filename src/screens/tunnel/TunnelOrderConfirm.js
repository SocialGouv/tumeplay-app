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

export default class TunnelOrderConfirm extends React.Component {
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
    	this.props.navigation.navigate("SecondQuestion");
  	}
	render()
	{
		const item = {
		    image: require('../../assets/pictures/order_confirm.png'),
		};
		return (
			<View style={ Styles.flexOne }>
				<View style={{ flex: 0.25}}></View>
				<View style={{ flex: 0.2, paddingLeft: 10, paddingRight: 10 }}>
					<View style={{ flex : 1, marginTop: 0,paddingTop: 0,  justifyContent: 'space-around', alignItems: 'center', }}>
					    <Image 
					    	style={ Styles.contentPicture }
					    	
							source={item.image} />
					</View>
						
				</View>
				<View style={{ flex: 0.1	}}></View>

				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10, paddingTop: 0 }}>
					<Text style={[ Styles.tunnelTitle, Styles.textCenter ]}>Ta commande a bien été prise en compte !</Text>
					
				</View>
				<View style={{ flex: 0.15, paddingLeft: 10, paddingRight: 10 }}>
					<Text style={[ Styles.text, Styles.textCenter ]}>A bientôt !</Text>
					
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