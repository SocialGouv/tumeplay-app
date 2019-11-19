'use strict';

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	Image
	} from 'react-native';

/*import AsyncStorage from '@react-native-community/async-storage';
*/

import Styles from '../styles/Styles';

export default class QuestionA extends React.Component {
	static navigationOptions = {
		title: 'Deuxième Question',
		headerLeft: null	
	};
	
    constructor(props) {
         super(props);
		 this.state = {
		   loading		: true,
		   dataSource	: [],
		   modalVisible	: false
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
	  	//this.state.modalVisible = true;
    	this.props.navigation.navigate("AnswerScreen");  
  	}
	render()
	{
		const item = {
		    key: 'somethun1',
		    text: 'Quel âge avez-vous ?',
		    image: require('../assets/pictures/pass4.png'),
		    backgroundColor: '#22bcb5',
		};
		return (
			<View style={ Styles.flexOne }>
			
				<View style={{ flex: 5}}>
					<View style={ Styles.slide }>
						<View style={{ flex : 4,  justifyContent: 'space-around', alignItems: 'center', }}>
						    <Image 
						    	style={ Styles.contentPicture }
						    	
								source={item.image} />
						</View>
						<View style={{ flex : 1, alignSelf: "center" }}>
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
							style={{ flex: 3, paddingTop: 2, paddingBottom: 2 }}
							onPress={this._onDone}
						>
							<View style={ Styles.bottomButton }>
								<Text style={ Styles.bottomButtonText }>Moins de 25 ans</Text>
							</View>
						</TouchableOpacity>
						
						<TouchableOpacity
							style={{ flex: 3, paddingTop: 2, paddingBottom: 2 }}
							onPress={this._onDone}
						>
							<View style={ Styles.bottomButton }>
								<Text style={ Styles.bottomButtonText }>25 et plus</Text>
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