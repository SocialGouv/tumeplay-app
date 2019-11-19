import Colors from './Color';

import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
/*
if (screenWidth <= 320) {
	const Styles = {
		appTitle:
		{
			color: Colors.secondaryText,
			fontFamily: Colors.appTitleFont,
			fontSize: 20,
			marginBottom: 0,
			paddingBottom: 0,
			flex: 2
		},

		text:
			{
				color: Colors.secondaryText,
				fontFamily: Colors.textFont,
				fontSize: 18,
				marginBottom: 0,
				paddingBottom: 0,
				marginTop: 5,
				paddingTop: 0,
				textAlign: 'center',
				flex: 1
			},

		questionText:
			{
				color: Colors.secondaryText,
				fontFamily: Colors.textFont,
				fontSize: 20,
				marginBottom: 0,
				paddingBottom: 0,
				marginTop: 0,
				paddingTop: 0,
				textAlign: 'center',
				flex: 1
			},

		contentPicture:
			{

				width: 150,
				resizeMode: 'contain'
			},
		loader:
			{

			},
		container:
			{

			},
		list:
			{

			},
		lightText:
			{

			},
		flexOne:
			{
				flex: 1
			},
		flexTwo:
			{
				flex: 2
			},
		slide:
			{
				justifyContent: 'flex-start',
				flex: 1,
			},
		bottomButton:
			{
				flex: 1,
				width: '50%',
				backgroundColor: Colors.mainButton,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 10,
				marginBottom: 0,
				borderRadius: 20,
				alignSelf: 'center'
			},

		bottomButtonText:
			{
				backgroundColor: 'transparent',
				color: '#FFFFFF',
				fontSize: 14,
				padding: 8,
			},
		rightAnswerButton:
			{
				color: "#FFFFFF",
				flex: 1,
				width: '56%',
				borderWidth: 0,
				color: Colors.secondaryText,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 0,
				marginBottom: 0,
				borderRadius: 20,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				backgroundColor: "#A0CBC9",

			},
		wrongAnswerButton:
			{
				flex: 1,
				width: '56%',
				borderWidth: 1,
				borderColor: Colors.mainButton,
				color: Colors.secondaryText,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 0,
				marginBottom: 0,
				borderRadius: 20,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
			},
		answerText:
			{
				flex: 1,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 0,
				marginBottom: 10,
				paddingTop:10,
				borderRadius: 20,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				paddingLeft: 15,
				paddingRight: 15,
				fontSize: 14
			},
		rightAnswerButtonText:
			{
				color: "#FFFFFF",
				fontFamily: Colors.textFont,
				fontSize: 22

			},
		wrongAnswerButtonInnerWrapper:
			{
				flexWrap: 'wrap',
				alignItems: 'flex-start',
				flexDirection: 'row'
			},
		wrongAnswerButtonText:
			{
				color: Colors.secondaryText,
				fontFamily: Colors.textFont,
				fontSize: 22
			},
		wrongAnswerButtonIconWrapper:
			{
				width: 25,
				height: 25,
				borderRadius: 25,
				paddingLeft: 5,
				paddingTop: 5,
				marginRight: 5,
				marginLeft: -15,
				marginTop: 2,
				backgroundColor: Colors.mainButton,
			},
		rightAnswerButtonIconWrapper:
			{
				width: 25,
				height: 25,
				borderRadius: 25,
				paddingLeft: 0,
				paddingTop: 0,
				marginRight: 5,
				marginLeft: -15,
				marginTop: 2,
			}
	}
} else {*/
	const Styles = {
		appTitle:
		{
			color: Colors.secondaryText,
			fontFamily: Colors.appTitleFont,
			fontSize: 30,
			marginBottom: 0,
			paddingBottom: 0,
			flex: 2
		},
        tunnelTitle    :
        {
            color            : Colors.secondaryText,
            fontFamily        : Colors.appTitleFont,    
            fontSize           : 30,
            marginBottom    : 0,
            paddingBottom    : 0,

        },
		text:
		{
			color: 			Colors.secondaryText,
			fontFamily: 	Colors.textFont,
			fontSize: 		20,
			marginBottom: 	0,
			paddingBottom: 	0,
			marginTop: 		0,
			paddingTop: 	0,
			textAlign: 		'center',
			flex: 			1
		},
        textLeft     : 
        {
            paddingTop        : 10,
            textAlign         : 'left',
            
        },
        textCenter          : 
        {
            textAlign        : 'center',    
        },
        tunnelButton : 
        {
            flex            : 1,
            width            : '100%',
            backgroundColor    : Colors.mainButton,
            alignItems        : 'center',
            justifyContent    : 'center',
            marginTop        : 10,
            marginBottom    : 10,
            borderRadius    : 20,
            alignSelf        : 'center'
        },
        tunnelButtonText : 
        {
            color             : '#FFFFFF',
            fontSize         : 18
        },
		questionText:
		{
			color: Colors.secondaryText,
			fontFamily: Colors.textFont,
			fontSize: 30,
			marginBottom: 0,
			paddingBottom: 0,
			marginTop: 0,
			paddingTop: 0,
			textAlign: 'center',
			flex: 1
		},


		contentPicture:
		{
			flex: 1,
			alignItems    	: 'center',
            justifyContent  : 'center',
            width			: '100%',
            height			: '100%',
			resizeMode		: 'contain',
			//margin			: 60
		},
		loader:
		{

		},
		container:
		{

		},
		list:
		{

		},
		lightText:
		{

		},
		flexOne:
		{
			flex: 1
		},
		flexTwo:
		{
			flex: 2
		},
		slide:
		{
			//justifyContent: 'flex-start',
			flex: 1,
			//flexDirection: 'column'
		},
		bottomButton:
		{
			flex: 1,
			width: '50%',
			backgroundColor: Colors.mainButton,
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 10,
			marginBottom: 0,
			borderRadius: 20,
			alignSelf: 'center'
		},
		bottomButtonText:
		{
			backgroundColor: 'transparent',
			color: '#FFFFFF',
			fontSize: 18,
			padding: 12,
		},
		rightAnswerButton:
		{
			color: "#FFFFFF",
			flex: 1,
			width: '50%',
			borderWidth: 1,
			borderColor: "#A0CBC9",
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: 10,
			marginBottom: 10,
			borderRadius: 20,
			alignSelf: 'center',
			fontFamily: Colors.textFont,
			backgroundColor: "#A0CBC9",

		},
		wrongAnswerButton:
		{
			flex: 1,
			width: '50%',
			borderWidth: 1,
			borderColor: Colors.mainButton,
			color: Colors.secondaryText,
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginTop: 10,
			marginBottom: 10,
			borderRadius: 20,
			alignSelf: 'center',
			fontFamily: Colors.textFont,
		},
		answerText:
		{
			flex: 1,
			width: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: 10,
			marginBottom: 10,
			borderRadius: 20,
			alignSelf: 'center',
			fontFamily: Colors.textFont,
			paddingLeft: 15,
			paddingRight: 15,
			fontSize: 17
		},
		rightAnswerButtonText:
		{
			color: "#FFFFFF",
			fontFamily: Colors.textFont,
			fontSize: 22

		},
		wrongAnswerButtonInnerWrapper:
		{
			flexWrap: 'wrap',
			alignItems: 'flex-start',
			flexDirection: 'row'
		},
		wrongAnswerButtonText:
		{
			color: Colors.secondaryText,
			fontFamily: Colors.textFont,
			fontSize: 22
		},
		
	    
  	    rightAnswerButton : 
  	    {
		    color			: "#FFFFFF", 	
		    flex			: 1,
	        width			: '50%',
	        borderWidth		: 0,
		    color	  		: Colors.secondaryText,
	        alignItems		: 'flex-start',
	        justifyContent	: 'center',
	        marginTop		: 10,
	        marginBottom	: 10,
	        borderRadius	: 20,
	        alignSelf		: 'center',
		    fontFamily		: Colors.textFont,
		    backgroundColor : "#A0CBC9",
		    
  	    },
  	    wrongAnswerButton 	 : 
  	    {
	  	    flex			: 1,
	        width			: '50%',
	        borderWidth		: 1,
	        borderColor		: Colors.mainButton,
		    color	  		: Colors.secondaryText,
	        alignItems		: 'flex-start',
	        justifyContent	: 'center',
	        marginTop		: 10,
	        marginBottom	: 10,
	        borderRadius	: 20,
	        alignSelf		: 'center',
		    fontFamily		: Colors.textFont,
  	    },
  	    answerText 	 		: 
  	    {
	  	    flex			: 1,
	        width			: '100%',
	        alignItems		: 'center',
	        justifyContent	: 'center',
	        marginTop		: 10,
	        marginBottom	: 10,
	        borderRadius	: 20,
	        alignSelf		: 'center',
		    fontFamily		: Colors.textFont,
		    paddingLeft 	: 15,
		    paddingRight	: 15,
		    fontSize 		: 17
  	    },
  	    rightAnswerButtonText : 
  	    {
	  	    color	  		: "#FFFFFF",
		    fontFamily		: Colors.textFont,
		    fontSize 		: 22

  	    },
  	    wrongAnswerButtonInnerWrapper: 
  	    {
	  	    flexWrap		: 'wrap', 
	  	    alignItems		: 'flex-start', 
	  	    flexDirection	: 'row'
  	    },
  	    wrongAnswerButtonText : 
  	    {
	  	    color	  		: Colors.secondaryText,
		    fontFamily		: Colors.textFont,
		    fontSize 		: 22
  	    },
  	    wrongAnswerButtonIconWrapper : 
  	    {
	  	    width			: 25,
    	    height			: 25,
		    borderRadius	: 25,
		    paddingLeft		: 5,
		    paddingTop 		: 5,
		    marginRight		: 10,
		    marginLeft		: 10,
		    marginTop		: 2,
    	    backgroundColor	: Colors.mainButton,
  	    },
  	    rightAnswerButtonIconWrapper :
  	    {
	  	    width			: 25,
    	    height			: 25,
		    borderRadius	: 25,
		    paddingLeft		: 0,
		    paddingTop 		: 0,
		    marginRight		: 10,
		    marginLeft		: 10,
		    marginTop		: 2,
  	    },
  	    labelText 					: 
  	    {
	  	    fontWeight 		: "bold",
	  	    color	  		: Colors.secondaryText,
		    fontFamily		: Colors.textFontBold,
		    fontSize 		: 18,
  	    },
  	    inputTypeText				: 
  	    {
	  	    height 			: 40,
	  	    borderRadius	: 5,
	  	    borderWidth		: 1,
	  	    borderColor		: Colors.secondaryText,
	  	    padding			: 5,
	  	    fontSize 		: 18
  	    },
  	    placeholderText				: 
  	    {
	  	    fontWeight 		: "bold",
	  	    color	  		: "#CECECE",
		    fontFamily		: Colors.textFont,
		    fontSize 		: 18,
  	    
	    },
	    landingBottomWrapper:
	    {
		    flex: 0.5,
		    marginBottom: 5,
		    padding: 5,
		    flexDirection: 'row',
		    borderWidth		: 0,
		    backgroundColor : '#5F6DC4',
		    borderRadius: 7
	    },
	    landingBottomText:
	    {
		    flex: 0.75,
		    color : "#FFFFFF",
		    fontFamily : Colors.textFont,
		    fontSize : 20,
		    fontWeight: 'bold'
	    },
	    landingBottomButtonNext:
	    {
		    textDecorationLine: 'underline',
		    color : "#FFFFFF"
		    
	    },
	    landingScreenTitle : 
	    {
		    color			: Colors.mainColor,
		    fontFamily		: Colors.appTitleFont,	
		    fontSize   		: 22,
	    }
    }
//}

export default StyleSheet.create(Styles);
