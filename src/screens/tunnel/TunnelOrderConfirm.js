import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	Image,
	} from 'react-native';

import Colors from '../../styles/Color';

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
    	this.props.navigation.navigate("LandingScreen");
  	}

	render()
	{

		return (
			<View style={ [Styles.flexOne, { backgroundColor: Colors.backgroundColor, paddingLeft: 15, paddingRight: 15, paddingTop: 15 } ]}>
				<View style={{ flex: 0.5	}}>
                    <Image style={ Styles.contentPicture } source={ require('../../assets/pictures/boarding/boarding-6.jpeg') } />

				</View>

				<View style={{ flex: 0.15 }}>
					<Text style={[ Styles.tunnelTitle, Styles.textCenter ]}>Ta commande a bien été prise en compte !</Text>
					
				</View>
				<View style={{ flex: 0.15 }}>
					<Text style={[ Styles.text, Styles.textCenter, { color: Colors.mainButton, fontSize: 26} ]}>A bientôt !</Text>
					
				</View>
				<View style={{ 
					flex: 0.13, 
					paddingTop: 2, 
					paddingBottom: 2, 
					alignItems		: 'center',
					justifyContent	: 'center',
					flexDirection	: 'column',
 				}}>
 					<TouchableOpacity
						style={{ flex: 1, paddingTop: 2, paddingBottom: 2, width: '40%' }}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>Fermer</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

		);
	}
}