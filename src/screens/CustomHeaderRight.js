import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
} from 'react-native';



import User   from '../services/User';
import Colors from '../styles/Color';

export default class CustomHeaderRight extends React.Component {
	_isMounted = false;
	
	constructor(props) 
	{
        super(props);
		
		this.state = {
		   availableTokens : 0,
		};
    }

	
	componentDidMount() 
	{
		this._isMounted = true;
		
		this._fetchTokens();
	}
	
	componentWillUnmount()
	{
		this._isMounted = false;
	}
	
	
	_fetchTokens = async() => 
	{
		const _tokens = await User.getTokensAmount();
		          
		if( this._isMounted )
		{
			this.setState({availableTokens : _tokens});
		}  		    
	}
	
	render() {
	    const headerStyle = StyleSheet.create({
            container		: {
                
            },
            textContainer	: {
				position		: 'relative',
				paddingRight	: 0,
				marginRight 	: 15,
				borderColor 	: '#123321',
				backgroundColor : 'transparent',
            },
            text 			: {
            	borderRadius	: 15,
            	padding 		: 5,
            	paddingTop 		: 6,
            	paddingBottom 	: 3,
            	marginRight 	: 20,
				textAlign 		: 'right',
				width			: 85,
				paddingLeft 	: 5,
				paddingRight	: 25,
				backgroundColor : '#FFFFFF',
				borderWidth 	: 2,
				borderColor		: Colors.mainButton,
				color 			: Colors.mainButton,
				overflow 		: 'hidden',
            },
            picture			: {
				position		: 'absolute',
				right 			: 0,
				top 			: -3,
				width 			: 38,
				height			: 38
            },
        });
		
		return (
		<View style={ headerStyle.container }>
			<View style={ headerStyle.textContainer } >
				<Text style={ headerStyle.text }>{ this.state.availableTokens }</Text>
				<Image
			        source={require('../assets/pictures/header-right.png')}
			        style={ headerStyle.picture }
			      />
			</View>
		</View>
	);
}
}