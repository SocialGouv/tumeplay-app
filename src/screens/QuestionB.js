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

import Styles from '../styles/Styles';

export default class QuestionB extends React.Component {
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
    	this.props.navigation.navigate("SecondQuestion");
  	}
	render()
	{
		const item = {
		    key: 'somethun1',
		    text: 'Est-ce la première fois que tu viens sur "Oh! Oui" ?',
		    image: require('../assets/pictures/pass3.png'),
		    backgroundColor: '#22bcb5',
		};
		return (
			<View style={ Styles.flexOne }>
			
				<View style={{ flex: 5}}>
					<View style={ Styles.slide }>
						<View style={{ flex : 4, marginTop: 50,paddingTop: 30,  justifyContent: 'space-around', alignItems: 'center', }}>
						    <Image 
						    	style={ Styles.contentPicture }
						    	
								source={item.image} />
						</View>
						<View style={{ flex : 2, paddingLeft: 10, marginTop: 20, paddingRight: 10, alignSelf: "center" }}>
							<Text  style={ Styles.questionText  }>{item.text}</Text>
						</View>
					</View>
				</View>
				
				<View style={{ flex: 2 }}>
					<View style={{ flex: 1, flexDirection: "column" }}
					>
						<View style={ Styles.flexOne }>
						</View>
						 
						<TouchableOpacity
							style={{ flex: 2, paddingTop: 2, paddingBottom: 2 }}
							onPress={this._onDone}
						>
							<View style={ Styles.bottomButton }>
								<Text style={ Styles.bottomButtonText }>Oui</Text>
							</View>
						</TouchableOpacity>
						
						<TouchableOpacity
							style={{ flex: 2, paddingTop: 2, paddingBottom: 2 }}
							onPress={this._onDone}
						>
							<View style={ Styles.bottomButton }>
								<Text style={ Styles.bottomButtonText }>Non</Text>
							</View>
						</TouchableOpacity>
						
						<View style={ Styles.flexOne }>
						</View> 
					</View>
				</View>
				
				<View style={{ flex: 1 }}>
				</View>
			</View>

		);
	}
}