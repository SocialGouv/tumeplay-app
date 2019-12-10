import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
	YellowBox,
	Dimensions,
	ScrollView
	} from 'react-native';


import Colors from '../../styles/Color';
import Styles from '../../styles/Styles';
const screenWidth = Math.round(Dimensions.get('window').width);

if (screenWidth <= 420) {
	var flexstyletext = {
		flex: 0.10
	}
	var flexstyle = {
		flex: 0.16
	}

} else {
	var flexstyletext = {
		flex: 0.15
	}
	var flexstyle = {
		flex: 0.15
	}	
}

export default class TunnelUserAddress extends React.Component {

    constructor(props) {
        super(props);
         
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }

    componentDidMount() 
    {
    }    

    componentWillUnmount() 
    {
    }
    
    _onDone = () => 
  	{
    	this.props.navigation.navigate("TunnelCartSummary");
  	}
  	
  	_goBack = () => 
  	{
    	this.props.navigation.navigate("TunnelDeliverySelect");
  	}
  	
	render()
	{
		return (
			<ScrollView style={ [Styles.flexOne, { backgroundColor: Colors.backgroundColor, paddingLeft: 15, paddingRight: 15, paddingTop: 15 } ]}>
				<View style={{ flex: 0.06 }} >
					<TouchableOpacity
						style={{  flex:1, paddingTop: 2, paddingBottom: 2, width: '100%', maxHeight: 70, flexDirection: 'row',  justifyContent: 'flex-start' }}
						onPress={this._goBack}
					>
	                    
							<Image 
						    	style={{ 
							    	width: 17,
							    	height: 17,
							    	marginRight: 10,
									resizeMode: 'contain' 
								}}
								source={require('../../assets/pictures/left-arrow.png')} />
								
							<Text style={{ color: '#FFFFFF' }}>Etape 3</Text>
							
						
					</TouchableOpacity>
				</View>
				<View style={flexstyletext}>
					<Text style={ Styles.tunnelTitle }>Complète tes informations</Text>
				</View>
				
				<View style={ flexstyle }>
					<Text style={ Styles.labelText }>Prénom *</Text>
					<TextInput
						placeholder="Ton Prénom"
						style={ Styles.inputTypeText }
					/>
				</View>
				
				<View style={flexstyle }>
					<Text style={ Styles.labelText }>Nom *</Text>
					<TextInput
						placeholder="Ton Nom"
						style={ Styles.inputTypeText }
					/>
				</View>
				<View style={flexstyle}>
					<Text style={ Styles.labelText }>E-Mail *</Text>
					<TextInput
						placeholder="Ton adresse e-mail"

						style={ Styles.inputTypeText }
					/>
				</View>
				<View style={flexstyle}>
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
 					<View style={{ flex: 1 }}>
 						<Text style={ Styles.placeholderText }>* Champs Obligatoire</Text>
 					</View>
				</View>
				<View style={Styles.viewopacitytunneletap3}>
					<TouchableOpacity
						style={{ flex: 1,paddingTop: 15, paddingBottom: 2, width: '40%',height:75}}
						onPress={this._onDone}
					>
						<View style={ Styles.tunnelButton }>
							<Text style={ Styles.tunnelButtonText }>Suivant</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>

		);
	}
}