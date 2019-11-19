'use strict';

import React from 'react';
import {
    Text,
    View,
    Image,StyleSheet, 
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    YellowBox, ScrollView
    } from 'react-native';

import Styles from '../styles/Styles';


YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested'
]);
export default class LandingScreen extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    _onSelectedTheme = (themeObject)=> {
        console.info('Selected a theme: ',themeObject);
    }

    _onSelected_lieuxUtiles = ()=>{
        console.info('Selected Lieux utiles...');
    }


    _onSelected_echangeProfessionnel = ()=>{
        console.info('Selected echange professionnel...');
    }
    
    render(){
        var that = this;

        function Grid(props) {
            // Setting up images objects
            const themeList = [
                {
                    themeName: "wTest1",
                    image: require('../assets/pictures/pass3.png')
                },
                {
                    themeName: "Test2",
                    image: require('../assets/pictures/pass3.png')
                }
            ];

            const data = [
                {id: 'a', value: 'This is text 1', imageObj:  require('../assets/pictures/landing/corps.png')},
                {id: 'b', value: 'This is text 2', imageObj:  require('../assets/pictures/landing/premieres_fois.png')},
                {id: 'c', value: 'This is text 1', imageObj:  require('../assets/pictures/landing/corps.png')},
                {id: 'd', value: 'This is text 2', imageObj:  require('../assets/pictures/landing/premieres_fois.png')},
            ];
            const numColumns = 2;
            const themeGridStyles = StyleSheet.create({
                itemContainer: {
                    flex: 0.5,
                    width: '100%'
                    // maxHeight: 50
                    // backgroundColor: '#BBBBB'
                },
                item: {
                    flex: 1,
                    margin: 3,
                    backgroundColor: 'lightblue',
                }
            });
            return (
                <FlatList
                scrollEnabled={true}
                data={data}
                renderItem={({item}) => (
                    <View style={themeGridStyles.itemContainer}>
                        <TouchableOpacity onPress={()=>{that._onSelectedTheme(item)}}>
                            <Image source={item.imageObj} style={{ width: '95%', resizeMode: 'contain'}}></Image>
                            {/* Note: Uncomment below if text to be dynamic */}
                            {/* <View style={{position: 'absolute', top: 150, left: 0, right: 70, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={themeGridStyles.item}>{item.value}</Text>
                            </View> */}
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={numColumns} />
            );
        }

        const item = {
            arrow: require('../assets/pictures/right-arrow.png'),
            title: 'Quel est le thème que tu veux découvrir ?',
            bottom_title1: 'Trouve les lieux utiles à tes besoins',
            bottom_title2: 'Échange avec un professionnel'
        }

        return <SafeAreaView>
                <ScrollView>
                    {/* Title and grid */}
                    <View>
                        <Text style={Styles.landingScreenTitle}>{item.title}</Text>
                        <Grid></Grid>
                    </View>
                    
                    {/* Bottom part */}
                    <View style={{flex: 0.25, marginLeft: 10, marginRight: 10}}>
                        
                        <TouchableOpacity style={[Styles.landingBottomWrapper]} onPress={this._onSelected_lieuxUtiles}>
                            <Text style={Styles.landingBottomText}>{item.bottom_title1}</Text>
                            <View style={{flex: 0.25, flexDirection: 'row'}}>
                                <Text style={Styles.landingBottomButtonNext}>
                                    Voir
                                </Text>
                                <Image style={{ width: 10, height: 10, paddingTop: 25, resizeMode: 'contain'}} source={item.arrow}/>
                            </View>
                            
                        </TouchableOpacity> 
                        
                        <TouchableOpacity style={[Styles.landingBottomWrapper]} onPress={this._onSelected_echangeProfessionnel}>
                            <Text style={Styles.landingBottomText}>{item.bottom_title2}</Text>
                            <View style={{flex: 0.25, flexDirection: 'row'}}>
                                <Text style={Styles.landingBottomButtonNext}>
                                    Accéder
                                </Text>
                                <Image style={{ width: 10, height: 10, paddingTop: 25, resizeMode: 'contain'}} source={item.arrow}/>
                            </View>
                        </TouchableOpacity> 
                        
                    </View>
                </ScrollView>
      
            </SafeAreaView>
    }
}