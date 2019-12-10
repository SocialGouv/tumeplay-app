import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	ActivityIndicator,
	FlatList,
	} from 'react-native';


import COLOR from '../styles/Color';
/*import COLOR_SCHEME from '../styles/ColorScheme';*/
import Styles from '../styles/Styles';

export default class InfoScreen extends React.Component {
	static navigationOptions = {
		title: 'Info Screen !',	
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
    
    renderItem=(data)=>
		<TouchableOpacity style={Styles.list}>
		  <Text style={Styles.lightText}>{data.item.title}</Text> 
		  <Text style={Styles.lightText}>{data.item.content}</Text>
		</TouchableOpacity>
	    
	render(){
	 if(this.state.loading)
	 {
	  	return( 
		    <View style={Styles.loader}> 
		      <ActivityIndicator size="large" color="#0c9"/>
		    </View>
		)}
		const {navigate} = this.props.navigation;
		return(
			<View style={Styles.container}>
				<FlatList
					data= {this.state.dataSource}
					ItemSeparatorComponent = {this.FlatListItemSeparator}
					renderItem= {item=> this.renderItem(item)}
					keyExtractor= {item=>item.id.toString()}
				/>
			</View>
		)
	}

    /*render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <StatusBar barStyle={COLOR_SCHEME.LIGHT} backgroundColor={COLOR.PRIMARY_DARK} />
                <View style={styles.useragent}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={[styles.forminput, styles.margin]}
                        onChangeText={(text) => { this.number = text;}}
                        placeholder="Call to"
                        defaultValue={this.number}
                        autoCapitalize="none"
                        autoCorrect={false}
                        blurOnSubmit={true} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 90 }}>
                        <CallButton icon_name="call" color={COLOR.ACCENT} buttonPressed={() => this.makeCall(false)} />
                        <CallButton icon_name="videocam" color={COLOR.ACCENT} buttonPressed={() => this.makeCall(true)} />
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.isModalOpen}
                        onRequestClose={() => { }}>
                        <TouchableHighlight
                            onPress={(e) => this.setState({ isModalOpen: false, modalText: '' })}
                            style={styles.container}>
                            <View style={[styles.container, styles.modalBackground]}>
                                <View
                                    style={[styles.innerContainer, styles.innerContainerTransparent]}>
                                    <Text>{this.state.modalText}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </Modal>
                </View>
            </SafeAreaView>
        );
    }*/
}