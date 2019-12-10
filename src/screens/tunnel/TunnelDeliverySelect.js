import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
	YellowBox,
	Dimensions
	} from 'react-native';


import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';


export default class TunnelDeliverySelect extends React.Component {
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
    	this.props.navigation.navigate("TunnelPickupSelect");
  	}
  	
  	_goBack = () => 
  	{
    	this.props.navigation.navigate("LandingScreen");
	  }
	  
	  
	render()
	{
		return (
			<View style={ [Styles.flexOne, { flexBasis: 'auto', backgroundColor: Colors.backgroundColor, paddingLeft: 15, paddingRight: 15, paddingTop: 15 ,paddingBottom:15 } ]}>
				<View style={{ flex: 0.06 }} >
					<TouchableOpacity
						style={{  flex:1, paddingTop: 2, paddingBottom: 2, width: '100%', maxHeight: 70 }}
						onPress={this._goBack}
					>
	                    <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-start'}}>

							<Image 
						    	style={{ 
							    	width: 17,
							    	height: 17,
							    	marginRight: 10,
									resizeMode: 'contain' 
								}}
								source={require('../../assets/pictures/left-arrow.png')} />
								
							<Text style={{ color: '#FFFFFF'}}>Etape 1</Text>
							
						</View>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 0.4 }}>
					<Text style={ Styles.tunnelTitle }>Choisis le mode de livraison</Text>
					<Text style={{ color: '#FFFFFF', fontSize: 16, marginTop: 15 }}>Nous te livrons sous 4 jours à domicile ou en points relais mais tu peux choisir nos pharmacies partenaires et venir récupérer ton colis le jour même.</Text>
				</View>
				<View style={Styles.optionlivraison}>
					<TouchableOpacity
						style={{ flex: 1, paddingTop: 2, paddingBottom: 2, width: '50%', maxHeight: 70 }}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>A Domicile</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ flex: 1, paddingTop: 2, paddingBottom: 2, width: '50%', maxHeight: 70 }}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>En point relais</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity
						style={{ flex: 1, paddingTop: 2, paddingBottom: 2, width: '50%', maxHeight: 70 }}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>En pharmacie</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

		);
	}
}