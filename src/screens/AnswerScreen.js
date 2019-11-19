'use strict';

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	Image,
	Dimensions,
	ScrollView
	} from 'react-native';

/*import AsyncStorage from '@react-native-community/async-storage';
*/

import Styles from '../styles/Styles';
import Colors from '../styles/Color';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class AnswerScreen extends React.Component {

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
    	this.props.navigation.navigate("TunnelDeliverySelect");
  	}

	render()
	{
		const item = {
		    key: 'somethun1',
		    text: 'Question 1 - Réponse',
		    image: require('../assets/pictures/pass3.png'),
		    arrow: require('../assets/pictures/right-arrow.png'),
		    check: require('../assets/pictures/check.png'),
		    cross: require('../assets/pictures/cross.png'),

		    backgroundColor: '#22bcb5',
		};
            if (screenWidth <= 320) {
                 var margin: {
                     marginTop: 5
                 };
                 var margintop: {
                     marginButton: 10
                 };
                  var flexvalue: {
                      flex: 0.1
                   };
            }else{
                var margin: {
                    marginTop: 50
                };
                var margintop: {
                    marginButton: 20
                };
                 var flexvalue: {
                  flex: 0.35
                };
            }
		return (
			<View style={ Styles.flexOne }>
			
				<View style={{ flex: 0.4 }}>
					<View style={ Styles.slide }>
						<View style={{margin},{ flex : 4, marginLeft: 30, marginRight: 30, paddingLeft: 30, paddingRight: 30, paddingTop: 30,  justifyContent: 'space-around', alignItems: 'center', }}>
						    <Image 
		                        style={ Styles.contentPicture }
								source={item.image} />
						</View>
						<View style={{margintop},{ flex : 2, paddingLeft: 10, paddingRight: 10, alignSelf: "center" }}>
							<Text  style={ Styles.questionText  }>{item.text}</Text>
						</View>
					</View>
				</View>
				
				<View style={{ flex: 0.5,marginBottom:15 }}>
					<View style={{ flex: 1, flexDirection: "column"}}>

						<TouchableOpacity
							style={{ flex: 0.45, paddingTop: 5, paddingBottom: 5 }}
							onPress={this._onDone}
						>
							<View style={ Styles.wrongAnswerButton }>
								<View style={ Styles.wrongAnswerButtonInnerWrapper }>
									<View style={ Styles.wrongAnswerButtonIconWrapper }
									>
										<Image 
									    	style={{ 
										    	width: 15,
												height: 15,
												resizeMode: 'contain' 
											}}
											source={item.cross} 
										/>
									</View>
									<Text style={ Styles.wrongAnswerButtonText }>Réponse 1</Text>
								</View>							
							</View>
						</TouchableOpacity>
						
						<TouchableOpacity
							style={{ flex: 0.45, paddingTop: 5, paddingBottom: 5 }}
							onPress={this._onDone}
						>
							
							<View style={ Styles.rightAnswerButton}>
								<View style={ Styles.wrongAnswerButtonInnerWrapper }>
									<View style={ Styles.rightAnswerButtonIconWrapper }
									>
										<Image 
									    	style={{ 
										    	width: 25,
												height: 25,
												resizeMode: 'contain',
												marginLeft:2
											}}
											source={item.check} 
										/>
									</View>
									<Text style={ Styles.rightAnswerButtonText }>Réponse 2</Text>
								</View>
							</View>
						</TouchableOpacity>
						
						
						<TouchableOpacity
							style={{ flex: 0.45, paddingTop: 5, paddingBottom: 2 }}
							onPress={this._onDone}
						>
							<View style={ Styles.wrongAnswerButton }>
								<View style={ Styles.wrongAnswerButtonInnerWrapper }>
									<View style={ Styles.wrongAnswerButtonIconWrapper }
									>
										<Image 
									    	style={{ 
										    	width: 15,
												height: 15,
												resizeMode: 'contain' 
											}}
											source={item.cross} 
										/>
									</View>
									<Text style={ Styles.wrongAnswerButtonText }>Réponse 3</Text>
								</View>							
							</View>
						</TouchableOpacity>
						
						<ScrollView style={ Styles.flexOne}>
							<Text style={ Styles.answerText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
						</ScrollView >
						
						<View style={{flexvalue},{
							paddingTop: 2,
							paddingBottom: 2,
							alignItems		: 'center',
	     				}}>
							<TouchableOpacity
								style={{ flex: 1, paddingTop: 2, paddingBottom: 2 }}
								onPress={this._onDone}
							>
								<View style={{
									width: 40,
									height: 40,
									paddingLeft: 12,
									paddingTop: 12,
									borderRadius: 25,
							    	backgroundColor: Colors.mainButton,
								}}>
									<Image 
								    	style={{ 
									    	width: 15,
									    	height: 15,
											resizeMode: 'contain' 
										}}
								    	
										source={item.arrow} />
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				
				<View style={{ flex: 0.1 }}>
				</View>
				
			</View>

		);
	}
}