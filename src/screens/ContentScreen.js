import React from 'react';
import {
	ScrollView,
	SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    YellowBox,
    Image,
    StyleSheet
	} from 'react-native';
import Modal  from "react-native-modal";

   
import CustomFooter	 	 from './CustomFooter';
import QuizzScreen  	 from './QuizzScreen';
import QuizzFinishScreen from './QuizzFinishScreen';

import Styles 			 from '../styles/Styles';
import Colors 			 from '../styles/Color';


export default class ContentPage extends React.Component {
	
    constructor(props) {
        super(props);
        
		this.state = {
			activeFilter 		: 0,
			isQuizzModalVisible	: false,
			isResultModalVisible: false,
			needResultModal 	: false,
			content 	 : {
			  	'id' 			: 0,
			  	'key'			: 0,
			  	'picture' 		: require('../assets/pictures/hymen.png'),
			  	'title'			: 'Ceci est un titre',
			  	'text'			: 'L’hymen témoin de la virginité d’une femme ? Faux ! L\'hymen est un "residu" du développement embryonaire. C’est une petite .L’hymen témoin de la virginité d’une femme. L’hymen témoin de la virginité d’une femme L’hymen témoin de la virginité d’une femme L’hymen témoin de la virginité d’une femme',
			  	'numberOfLines': 3,
		  	},
		};
        
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

    
    _toggleQuizzModal = () => 
    {
	    
		this.setState({ isQuizzModalVisible: !this.state.isQuizzModalVisible });
    }
    
    _toggleResultModal = () => 
    {
		this.setState({  isResultModalVisible: !this.state.isResultModalVisible });
    }
    
    _toggleResultModalIfNeeded = () => 
    {
	    if( this.state.needResultModal )
	    {
			this.setState({ needResultModal: false });
			
			this._toggleResultModal();
	    }
    }

    _onFinishedQuizz = ( responses ) => 
    {
	    console.log(responses);
	    
	    this._toggleQuizzModal();
	    
	    this.setState({ needResultModal : true});
    }
    
    _onOrder = () => 
    {
	    this._toggleResultModal();
    	this.props.navigation.navigate("TunnelDeliverySelect");

    }
 
   	_onReadMoreClick = (  ) => 
  	{
	  	const content = this.state.content;
	  	
	  	if( content.numberOfLines == 0 )
	  	{
		  	content.numberOfLines = 3;
	  	}
	  	else
	  	{
	 	  	content.numberOfLines = 0;
 	
	  	}
	  	
	  	this.setState({ content : content });
  	}
  	
  	_renderQuizzButton = () => 
  	{
	  	return (
		  	<View style={{ 
				position		: 'absolute',
				bottom			: 95,
				left			: 15,
				width			: '100%',
				alignItems		: 'center',
				justifyContent	: 'center',
				}}>
				<TouchableOpacity
					style={[Styles.bottomButton, { borderRadius: 25 }]}
					onPress={this._toggleQuizzModal}
				>
					<View style={ Styles.tunnelButton }>
						<Text style={ Styles.tunnelButtonText }>Répondre au quizz</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
  	}
  	
  	_renderContentCard = () => 
  	{
	  	const cardStyle = StyleSheet.create({
		  	container 		: 
		  	{
			  	flex 		 	: 1,
			  	flexDirection	: 'row',
			  	backgroundColor	: '#FFFFFF',
			  	borderRadius 	: 7,
			  	marginTop 		: 20,
			  	
		  	},
		  	buttonWrapper	: 
		  	{
			  	flex		: 1,
		  	},
		  	picture 		:
		  	{
			  	height		: 250,
			  	width		: '100%',
			  	borderTopLeftRadius	 : 7,
			  	borderTopRightRadius : 7,
		  	},
		  	textContainer	:
		  	{
			  	padding		: 15,
		  	},
		  	title			: 
		  	{
				color 		: '#F1732C',
				fontSize	: 28,  	
		  	},
		  	text			: 
		  	{
			  	color		: '#4F4F4F',
			  	fontSize	: 14,
			  	marginBottom: 25,
			  	marginTop 	: 10,
		  	},
		  	readMoreWrapper : 
		  	{
			  	position	: 'absolute',
			  	right 		: 15,
			  	bottom		: 15,
		  	},
		  	readMore 		: 
		  	{
			  	color 		: '#F1732C' 
		  	}
	  	});
	  	
	  	return (
		  	<View style={cardStyle.container}>
	            <TouchableOpacity style={ cardStyle.buttonWrapper } onPress={()=>{this._onReadMoreClick()}}>
	            
                	<Image source={this.state.content.picture} style={ cardStyle.picture } />
	                
	                <View style={ cardStyle.textContainer }>
	                	<Text style={cardStyle.title}>
	                		{this.state.content.title}
	                	</Text>
	                	<Text numberOfLines={ this.state.content.numberOfLines } style={cardStyle.text}>
	                		{this.state.content.text}
	                	</Text>
	                </View>
	                
	                <View style={ cardStyle.readMoreWrapper }>
	                	<Text style={cardStyle.readMore}>Plus d infos</Text>
	                </View>
	            
	            </TouchableOpacity>
	        </View>
        );
  	}
  	
  	_renderTopMenu = () => 
  	{
	  	const menuStyle = StyleSheet.create({
            itemButton	: {
                marginLeft		: 0,
                marginRight		: 0,
                marginBottom	: 0,
                flexShrink		: 1,
                flexGrow 		: 1,
            },
            itemText: {
	            color 			: '#FFFFFF',
	            textAlign		: 'center',
            },
            normalItemButton :
            {
                backgroundColor	: Colors.backgroundColor,
            },
            activeItemButton : 
            {
                backgroundColor	: Colors.mainButton,
            },
            activeItemText : 
            {
	            
            },
        });
        
        const _menuItems 	 = [
	        { 'id' : 0, 'key' : 0, 'text' : 'A poils' 		},
	        { 'id' : 1, 'key' : 0, 'text' : 'Les WTF' 		},
	        { 'id' : 2, 'key' : 0, 'text' : 'Sexploration'  },
	        { 'id' : 3, 'key' : 0, 'text' : 'Nos droits' 	},
	        { 'id' : 4, 'key' : 0, 'text' : 'Sexysanté' 	},
        ];
        
        const _currentActive = this.state.activeFilter;
        
        const _menuButtons   = _menuItems.map((item, key) => {
	        return (
	            <TouchableOpacity 
	            	style={[menuStyle.itemButton, _currentActive == key ? menuStyle.activeItemButton : menuStyle.normalItemButton, { alignSelf : 'flex-start' } ]}
	            	onPress={this._onDone}
	            >
	                <Text style={menuStyle.itemText}>{item.text}</Text>
		        </TouchableOpacity>
	        );
	    });
        
        
	  	return (
		  	<View style={{ flex: 0.1, maxHeight: 60 }}>
		  		<View style={{ flex: 0.7 }}>
		  			<Text style={ Styles.tunnelTitle }>Tes premières fois</Text>
		  		</View>
			  	<View style={{ flex : 0.3, flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
			  		<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', flexWrap: 'nowrap', alignContent: 'stretch' }}>
					  	{ _menuButtons }
			        </View>
			  	</View>
			</View>
	  	);
  	}
  	
	render()
	{
		const questions = [
        	{
	        	'key' : 0,
	        	'id'  : 1,
				'question' 		: 'Question QCM1 avec point d\'interrogation',
				'answers'  		: [{'id' : 1, 'text' : 'Oui'}, {'id' : 2, 'text' :'Non'}],
				'rightAnswer' 	: 1,
				'explanation'	: 'Lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc',
				'background'	: require('../assets/background.png')
        	},
        	{
	        	'key' : 1,
	        	'id'  : 2,
				'question' 		: 'Question QCM2 avec point d\'interrogation',
				'answers'  		: [{'id' : 1, 'text' : 'Oui'}, {'id' : 2, 'text' :'Non'}, {'id' : 3, 'text':'Peut-être'}],
				'rightAnswer' 	: 1,
				'explanation'	: 'Lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc lorem ipsum sit amet etc',
				'background'	: require('../assets/background.png')
        	},
        ];
		return (
			<SafeAreaView style={ Styles.safeAreaView } >
				<View style={[Styles.safeAreaViewInner, { flex: 1 }]}>
				
					{ this._renderTopMenu() }
					
	        		<ScrollView style={{ flex: 0.9 }}>
		            	{ this._renderContentCard() }
		            	
		            	<View style={{flex: 0.25}}>
		                    
		                    <TouchableOpacity style={[Styles.landingBottomWrapper]} onPress={this._onSelected_lieuxUtiles}>
		                        <Text style={Styles.landingBottomText}>
		                        	Tu te poses des questions ?
		                        	Envoies-les nous, nous y répondrons sur l’app !
		                        </Text>
		                        <View style={{flex: 0.25, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
		                            <Image style={{ marginRight: 10, width: 10, height: 10, paddingTop: 25, resizeMode: 'contain'}} source={require('../assets/pictures/right-arrow.png')}/>
		                            <Text style={Styles.landingBottomButtonNext}>
		                                Voir
		                            </Text>
		                        </View>
		                        
		                    </TouchableOpacity>
		                </View>

		            	
		                <CustomFooter />

		            </ScrollView>
		            
		            { this._renderQuizzButton() }
		            
	            </View>
	            <Modal 
	            	visible={this.state.isQuizzModalVisible} 
	            	isVisible={this.state.isQuizzModalVisible} 
	            	style={{ margin: 0, alignItems: undefined, justifyContent: undefined, }} 					
	            	onModalHide={this._toggleResultModalIfNeeded}
	            	onDismiss={this._toggleResultModalIfNeeded}
	            	animationType="slide"
					transparent={true}	
	            >
		          <View style={{ flex: 1, marginBottom: 25, marginRight: 25, marginLeft: 25, marginTop: 35, borderRadius: 7, borderColor: '#000000', position: 'relative' }}>
		          	 <TouchableOpacity
						style={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}
						onPress={this._toggleQuizzModal}
					 >
						<View style={{ }}>
							<Image style={{ width: 25, height: 25, resizeMode: 'contain'}} source={require('../assets/pictures/close.png')}/>
						</View>
					 </TouchableOpacity>	
		             
					 <QuizzScreen onFinishedQuizz={this._onFinishedQuizz} questions={questions} />
				
		          </View>
		        </Modal>
		        <Modal 
		        	visible={this.state.isResultModalVisible} 
		        	isVisible={this.state.isResultModalVisible} 
		        	style={{ margin: 0, alignItems: undefined, justifyContent: undefined, }}
					animationType="slide"
					transparent={true}
		        >
		          <View style={{ flex: 1,  marginBottom: 25, marginRight: 25, marginLeft: 25, marginTop: 35, borderRadius: 7, borderColor: '#000000', position: 'relative' }}>
		          	 <TouchableOpacity
						style={{ position: 'absolute', right: 10, top: 10, zIndex: 10 }}
						onPress={this._toggleResultModal}
					 >
						<View style={{ }}>
							<Image style={{ width: 25, height: 25, resizeMode: 'contain'}} source={require('../assets/pictures/close.png')}/>
						</View>
					 </TouchableOpacity>	
		             
					 <QuizzFinishScreen onOrder={this._onOrder} />
				
		          </View>
		        </Modal>

			</SafeAreaView>
		);
	}
}