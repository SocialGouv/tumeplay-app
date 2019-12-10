import React from 'react';
import {
    Text,
    View,
    Image,StyleSheet, 
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    YellowBox, 
    ScrollView,
    Dimensions
    } from 'react-native';
 
import CustomFooter	from './CustomFooter';
import Styles 		from '../styles/Styles';
import Colors 		from '../styles/Color';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth  = Math.round(Dimensions.get('window').width);

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested'
]);

export default class LandingScreen extends React.Component {
   
    constructor(props) {
        super(props);
        
		this.state = {
			
		};
        
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);
    }
    

    _onSelectedTheme = (themeObject)=> 
    {
	    this.props.navigation.navigate("ContentScreen");
    }

    _onSelected_lieuxUtiles = ()=>
    {

	}


    _onSelected_echangeProfessionnel = ()=>
    {
    	this.props.navigation.navigate("ContentScreen");
    }
    
    
    render(){
        var that = this;

        function Grid(props) {
            // Setting up images objects
            
            const data = [
                {id: 'a', value: 'Découvre ton corps', imageObj:  require('../assets/pictures/landing/discover.png')},
                {id: 'b', value: 'This is text 2', imageObj:  require('../assets/pictures/landing/first-time.png')},
                {id: 'c', value: 'This is text 1', imageObj:  require('../assets/pictures/landing/discover-sexuality.png')},
                {id: 'd', value: 'This is text 2', imageObj:  require('../assets/pictures/landing/sos.png')},
            ];
            const numColumns = 2;
            const themeGridStyles = StyleSheet.create({
                container	: {
                    flex			: 1,
                    width			: '100%',
                    marginLeft		: 15,
                    marginRight		: 15,
                    marginBottom	: 15,
                    backgroundColor	: '#000000',
                    flexDirection 	: 'column',
                    maxWidth 		: 550,
                    // maxHeight: 50
                    // backgroundColor: '#BBBBB'
                },
                itemButton	: {
                	
                },
                itemPicture	: {
					borderTopLeftRadius : 7,  
					borderTopRightRadius: 7, 
					height		 : 150,
					flex		 : 1
					
                },
                itemTextContainer : {
	                padding					: 7,
	                paddingLeft 			: 15, 
	                borderBottomLeftRadius	: 7, 
	                backgroundColor			: '#FFFFFF',  
	                borderBottomRightRadius	: 7, 
	                width					: '100%'
                },
                itemText	: {
                    margin					: 0,
                    color 					: Colors.mainButton,
                    fontSize 				: 22,
                }
            });
            return (
                <FlatList
                scrollEnabled={true}
                data={data}
                
                renderItem={({item}) => (
                    <View style={themeGridStyles.container}>
                        <TouchableOpacity style={ themeGridStyles.itemButton } onPress={()=>{that._onSelectedTheme(item)}}>
                        	<View style={{ flex: 1, flexDirection: 'row' }}>
                            	<Image source={item.imageObj} style={ themeGridStyles.itemPicture } />
                            </View>
                            
                            <View style={ themeGridStyles.itemTextContainer }>
                            	<Text style={themeGridStyles.itemText}>{item.value}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns} />
            );
        }

        const item = {
            arrow		: require('../assets/pictures/right-arrow.png'),
            title		: 'Quel est le thème que tu veux découvrir ?',
            subtitle	: 'Explore nos thématiques, découvre les questions réponses associées et réponds aux quizz pour gagner des box !',
            bottomTitle1: 'Trouve les lieux utiles à tes besoins',
            bottomTitle2: 'Échange avec un professionnel'
        }
        
        // @TODO : REMOVE DAT, IT'S JUST FOR DEBUG /!\
         

        return <SafeAreaView style={ Styles.safeAreaView }>
        		
	            <ScrollView>
	                {/* Title and grid */}
	                <View style={{ flex: 0.75 }}>
	                    <Text style={Styles.landingScreenTitle}>{item.title}</Text>
	                    <Text style={Styles.landingScreenSubtitle}>{item.subtitle}</Text>
	                    <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
	                    	<Grid></Grid>
	                    </View>
	                </View>
	                
	                {/* Bottom part */}
	                <View style={{flex: 0.25, marginLeft: 15, marginRight: 15}}>
	                    
	                    <TouchableOpacity style={[Styles.landingBottomWrapper]} onPress={this._onSelected_lieuxUtiles}>
	                        <Text style={Styles.landingBottomText}>
	                        	{item.bottomTitle1}
	                        </Text>
	                        <View style={{flex: 0.25, flexDirection: 'row', alignItems: 'center'}}>
	                            <Image style={{ marginLeft: 10, marginRight: 10, width: 10, height: 10, resizeMode: 'contain'}} source={item.arrow}/>
	                            <Text style={Styles.landingBottomButtonNext}>
	                                Voir
	                            </Text>
	                        </View>
	                        
	                    </TouchableOpacity> 
	                    
	                    <TouchableOpacity style={[Styles.landingBottomWrapper]} onPress={this._onSelected_echangeProfessionnel}>
	                        <Text style={Styles.landingBottomText}>
	                        	{item.bottomTitle2}
	                        </Text>
	                        <View style={{flex: 0.25, flexDirection: 'row', alignItems: 'center'}}>
	                            <Image style={{ marginLeft: 10, marginRight: 10, width: 10, height: 10, resizeMode: 'contain'}} source={item.arrow}/>
	                            <Text style={Styles.landingBottomButtonNext}>
	                                Accéder
	                            </Text>
	                        </View>
	                    </TouchableOpacity> 
	                    
	                </View>
	                <CustomFooter />
	            </ScrollView>
	        </SafeAreaView>
    }
}