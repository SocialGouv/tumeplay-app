import Colors from './Color';
import { Dimensions, StyleSheet } from "react-native";
const screenWidth = Math.round(Dimensions.get('window').width);
const { detect } = require('detect-browser');
const browser = detect();

if (browser) {
	////browser mobile
	if (screenWidth <= 420) {
		var Styles = {
			appTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 25,
					marginBottom: 70,
					paddingBottom: 0,
					flex: 2
				},
			tunnelTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					marginBottom: 0,
					paddingBottom: 0,

				},
			text:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.textFont,
					fontSize: 18,
					marginBottom: 0,
					paddingBottom: 0,
					marginTop: 0,
					paddingTop: 0,
					textAlign: 'center',
					flex: 1
				},
			textLeft:
				{
					paddingTop: 10,
					textAlign: 'left',

				},
			textCenter:
				{
					textAlign: 'center',
				},
			tunnelButton:
				{
					flex: 1,
					width: '100%',
					backgroundColor: Colors.mainButton,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 20,
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			tunnelButtonText:
				{
					color: '#FFFFFF',
					fontSize: 18
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

			finishText:
				{
					color: Colors.mainButton,
					fontFamily: Colors.appTitleFont,
					fontSize: 33,
					textAlign: 'center',
					flex: 1,
				},
			descText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 30,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgtexte: {
				flex: 0.3,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 22,
				paddingLeft: 30,
				paddingRight: 30,
				paddingTop: 5,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -60,
				backgroundColor: '#ffffff',

			},
			bottomComm:
				{
					flex: 1,
					width: '50%',
					backgroundColor: '#fba76a',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 0,
					borderRadius: 20,
					alignSelf: 'center'
				},

			bottomCommText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 8,
				},

			PictureBravo:
				{

					width: 60,
					height: 60,
					resizeMode: 'contain',
				},
			PictureFinish:
				{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginTop: 30,
					marginBottom: -10,
					zIndex: 1,
				},
			PictureFinishCom:
				{
					width: 60,
					height: 60,
					resizeMode: 'contain',
					marginTop: 30,
				},

			imgCommand: {
				flex: 0.2,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 18,
				paddingLeft: 30,
				paddingRight: 30,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -10,
				backgroundColor: '#ffffff',

			},
			descTextCom:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 24,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgBackFinish:
				{
					width: 420,
					height: 420,
					resizeMode: 'contain',
					marginTop: -100
				},
			titreText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 28,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},
			textCommImg:
				{
					color: Colors.main,
					fontSize: 18,
					textAlign: 'justify',
					padding: 10,
					flex: 1,
					marginTop: -140
				},
			line: {
				backgroundColor: '#afd4d3',
				height: 5,
				width: 80
			},
			titreTextList:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 24,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},

			contentPicture:
				{
					width: 320,
					height: 300,
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
					//justifyContent: 'flex-start',
					flex: 1,
					//flexDirection: 'column'
					backgroundColor: Colors.backgroundColor
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
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			bottomButtonText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 12,
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


			rightAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					alignItems: 'flex-start',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 25,
					alignSelf: 'center',
					//fontFamily		: Colors.textFont,
					backgroundColor: '#FFFFFF',
					borderColor: Colors.mainButton,
					maxHeight: 50
				},

			wrongAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					borderColor: Colors.mainButton,
					color: Colors.secondaryText,
					alignItems: 'flex-start',
					justifyContent: 'center',
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
					color: Colors.mainButton,
					fontFamily: Colors.textFont,
					fontSize: 22

				},

			answerButtonInnerWrapper:
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
					marginRight: 10,
					marginLeft: 10,
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
					marginRight: 10,
					marginLeft: 10,
					marginTop: 2,
				},
			labelText:
				{
					fontWeight: "bold",
					color: '#B90740',
					fontFamily: Colors.textFontBold,
					fontSize: 18,
				},
			inputTypeText:
				{
					backgroundColor: '#FFFFFF',
					height: 40,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: Colors.mainButton,
					padding: 5,
					fontSize: 18
				},
			placeholderText:
				{
					fontWeight: "bold",
					color: "#B7B7B7",
					fontFamily: Colors.textFont,
					fontSize: 18,

				},
			landingBottomWrapper:
				{
					flex: 0.5,
					marginBottom: 10,
					marginTop: 10,
					paddingLeft: 15,
					padding: 5,
					flexDirection: 'row',
					borderWidth: 0,
					backgroundColor: Colors.mainButton,
					borderRadius: 7
				},
			landingBottomText:
				{
					flex: 0.75,
					color: "#FFFFFF",
					fontFamily: Colors.textFont,
					fontSize: 20,
					fontWeight: 'bold'
				},
			landingBottomButtonNext:
				{
					textDecorationLine: 'underline',
					color: "#FFFFFF"
				},
			landingScreenTitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 22,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			landingScreenSubtitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 16,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			safeAreaView:
				{
					flex: 1,
					flexDirection: 'column',
					backgroundColor: Colors.backgroundColor,
				},
			safeAreaViewInner:
				{
					paddingLeft: 15,
					paddingRight: 15,
					backgroundColor: Colors.backgroundColor,
				}
		}
		///browserWeb
	} else {
		var Styles = {
			appTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					marginBottom: 170,
					paddingBottom: 0,
					flex: 2
				},
			tunnelTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					marginBottom: 0,
					paddingBottom: 0,

				},
			text:
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
			textLeft:
				{
					paddingTop: 10,
					textAlign: 'left',

				},
			textCenter:
				{
					textAlign: 'center',
				},
			tunnelButton:
				{
					flex: 1,
					width: '100%',
					backgroundColor: Colors.mainButton,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 20,
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			tunnelButtonText:
				{
					color: '#FFFFFF',
					fontSize: 18
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

			finishText:
				{
					color: Colors.mainButton,
					fontFamily: Colors.appTitleFont,
					fontSize: 33,
					textAlign: 'center',
					flex: 1,
				},
			descText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 30,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgtexte: {
				flex: 0.3,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 22,
				paddingLeft: 30,
				paddingRight: 30,
				paddingTop: 5,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -60,
				backgroundColor: '#ffffff',

			},
			bottomComm:
				{
					flex: 1,
					width: '50%',
					backgroundColor: '#fba76a',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 0,
					borderRadius: 20,
					alignSelf: 'center'
				},

			bottomCommText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 8,
				},

			PictureBravo:
				{

					width: 60,
					height: 60,
					resizeMode: 'contain',
				},
			PictureFinish:
				{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginTop: 30,
					marginBottom: -10,
					zIndex: 1,
				},
			PictureFinishCom:
				{
					width: 60,
					height: 60,
					resizeMode: 'contain',
					marginTop: 30,
				},

			imgCommand: {
				flex: 0.2,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 18,
				paddingLeft: 30,
				paddingRight: 30,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -10,
				backgroundColor: '#ffffff',

			},
			descTextCom:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 24,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgBackFinish:
				{
					width: 420,
					height: 420,
					resizeMode: 'contain',
					marginTop: -100
				},
			titreText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 28,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},
			textCommImg:
				{
					color: Colors.main,
					fontSize: 18,
					textAlign: 'justify',
					padding: 10,
					flex: 1,
					marginTop: -140
				},
			line: {
				backgroundColor: '#afd4d3',
				height: 5,
				width: 80
			},
			titreTextList:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 24,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},

			contentPicture:
				{   position: "initial",
					width: 800,
					height: 400,
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
					//justifyContent: 'flex-start',
					flex: 1,
					//flexDirection: 'column'
					backgroundColor: Colors.backgroundColor
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
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			bottomButtonText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 12,
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


			rightAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					alignItems: 'flex-start',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 25,
					alignSelf: 'center',
					//fontFamily		: Colors.textFont,
					backgroundColor: '#FFFFFF',
					borderColor: Colors.mainButton,
					maxHeight: 50
				},

			wrongAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					borderColor: Colors.mainButton,
					color: Colors.secondaryText,
					alignItems: 'flex-start',
					justifyContent: 'center',
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
					color: Colors.mainButton,
					fontFamily: Colors.textFont,
					fontSize: 22

				},

			answerButtonInnerWrapper:
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
					marginRight: 10,
					marginLeft: 10,
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
					marginRight: 10,
					marginLeft: 10,
					marginTop: 2,
				},
			labelText:
				{
					fontWeight: "bold",
					color: '#B90740',
					fontFamily: Colors.textFontBold,
					fontSize: 18,
				},
			inputTypeText:
				{
					backgroundColor: '#FFFFFF',
					height: 40,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: Colors.mainButton,
					padding: 5,
					fontSize: 18
				},
			placeholderText:
				{
					fontWeight: "bold",
					color: "#B7B7B7",
					fontFamily: Colors.textFont,
					fontSize: 18,

				},
			landingBottomWrapper:
				{
					flex: 0.5,
					marginBottom: 10,
					marginTop: 10,
					paddingLeft: 15,
					padding: 5,
					flexDirection: 'row',
					borderWidth: 0,
					backgroundColor: Colors.mainButton,
					borderRadius: 7
				},
			landingBottomText:
				{
					flex: 0.75,
					color: "#FFFFFF",
					fontFamily: Colors.textFont,
					fontSize: 20,
					fontWeight: 'bold'
				},
			landingBottomButtonNext:
				{
					textDecorationLine: 'underline',
					color: "#FFFFFF"
				},
			landingScreenTitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 22,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			landingScreenSubtitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 16,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			safeAreaView:
				{
					flex: 1,
					flexDirection: 'column',
					backgroundColor: Colors.backgroundColor,
				},
			safeAreaViewInner:
				{
					paddingLeft: 15,
					paddingRight: 15,
					backgroundColor: Colors.backgroundColor,
				}
		}
	}

} else {
	///App mobile small
	if (screenWidth <= 320) {
		var Styles = {

			appTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 20,
					marginBottom: 0,
					paddingBottom: 0,
					flex: 2
				},
			tunnelTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 22,
					marginBottom: 0,
					paddingBottom: 0,

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
			textLeft:
				{
					paddingTop: 10,
					textAlign: 'left',

				},
			textCenter:
				{
					textAlign: 'center',
				},
			viewopacitytunneletap3: {
				flex: 0.20,
				paddingTop: 2,
				paddingBottom: 2,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			},
			viewopacitytunneletap4: {
				flex: 0.32,
				paddingTop: 2,
				paddingBottom: 2,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			},
			tunnelButton:
				{
					flex: 1,
					width: '100%',
					backgroundColor: Colors.mainButton,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 20,
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			tunnelButtonText:
				{
					color: '#FFFFFF',
					fontSize: 16,
				},

			questionText:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.textFont,
					fontSize: 22,
					marginBottom: 0,
					paddingBottom: 0,
					marginTop: 0,
					paddingTop: 0,
					textAlign: 'center',
					flex: 1
				},
			finishText:
				{
					color: Colors.mainButton,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					textAlign: 'center',
					flex: 1,

				},
			descText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 22,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgtexte: {
				flex: 0.3,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 18,
				paddingLeft: 30,
				paddingRight: 30,
				paddingTop: 5,
				paddingBottom: 5,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -72,
				backgroundColor: '#ffffff',

			},
			bottomComm:
				{
					flex: 1,
					width: '50%',
					backgroundColor: '#fba76a',
					alignItems: 'center',
					justifyContent: 'center',
					paddingTop: 5,
					paddingBottom: 10,
					marginTop: 10,
					marginBottom: 0,
					borderRadius: 20,
					alignSelf: 'center'
				},

			bottomCommText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 16,
					padding: 8,
				},

			PictureBravo:
				{
					height: 45,
					width: 45,
					resizeMode: 'contain',
				},
			PictureFinish:
				{
					width: 80,
					height: 80,
					resizeMode: 'contain',
					marginTop: 40,
					marginBottom: -10,
					zIndex: 1,
				},
			PictureFinishCom:
				{
					width: 60,
					height: 60,
					resizeMode: 'contain',
					marginTop: 30,
				},

			imgCommand: {
				flex: 0.2,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 18,
				paddingLeft: 30,
				paddingRight: 30,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -10,
				backgroundColor: '#ffffff',

			},
			descTextCom:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 20,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgBackFinish:
				{
					width: 420,
					height: 420,
					resizeMode: 'contain',
					marginTop: -100
				},
			titreText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 24,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},
			textCommImg:
				{
					color: Colors.main,
					fontSize: 16,
					textAlign: 'justify',
					padding: 10,
					flex: 1,
					marginTop: -140
				},
			line:
				{
					backgroundColor: '#afd4d3',
					height: 5,
					width: 80
				},
			titreTextList:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 20,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},

			contentPicture:
				{

					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					resizeMode: 'contain',
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
					backgroundColor: Colors.backgroundColor
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
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},

			bottomButtonText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 14,
					padding: 8,
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
					paddingTop: 10,
					borderRadius: 20,
					alignSelf: 'center',
					fontFamily: Colors.textFont,
					paddingLeft: 15,
					paddingRight: 15,
					fontSize: 14
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
			rightAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					alignItems: 'flex-start',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 25,
					alignSelf: 'center',
					//fontFamily		: Colors.textFont,
					backgroundColor: '#FFFFFF',
					borderColor: Colors.mainButton,
					maxHeight: 50
				},

			wrongAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					borderColor: Colors.mainButton,
					color: Colors.secondaryText,
					alignItems: 'flex-start',
					justifyContent: 'center',
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
					color: Colors.mainButton,
					fontFamily: Colors.textFont,
					fontSize: 22

				},

			answerButtonInnerWrapper:
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
					marginRight: 10,
					marginLeft: 10,
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
					marginRight: 10,
					marginLeft: 10,
					marginTop: 2,
				},

			labelText:
				{
					fontWeight: "bold",
					color: '#B90740',
					fontFamily: Colors.textFontBold,
					fontSize: 16,
				},
			inputTypeText:
				{
					backgroundColor: '#FFFFFF',
					height: 30,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: Colors.mainButton,
					padding: 5,
					fontSize: 16
				},
			placeholderText:
				{
					fontWeight: "bold",
					color: "#B7B7B7",
					fontFamily: Colors.textFont,
					fontSize: 13,

				},
			landingBottomWrapper:
				{
					flex: 0.5,
					marginBottom: 10,
					marginTop: 10,
					paddingLeft: 15,
					padding: 5,
					flexDirection: 'row',
					borderWidth: 0,
					backgroundColor: Colors.mainButton,
					borderRadius: 7
				},
			landingBottomText:
				{
					flex: 0.75,
					color: "#FFFFFF",
					fontFamily: Colors.textFont,
					fontSize: 18,
					fontWeight: 'bold'
				},
			landingBottomButtonNext:
				{
					textDecorationLine: 'underline',
					color: "#FFFFFF"
				},
			landingScreenTitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 22,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			landingScreenSubtitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 16,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			safeAreaView:
				{
					flex: 1,
					flexDirection: 'column',
					backgroundColor: Colors.backgroundColor,
				},
			safeAreaViewInner:
				{
					paddingLeft: 15,
					paddingRight: 15,
					backgroundColor: Colors.backgroundColor,
				},
				optionlivraison : { 
					flex: 0.40, 
					paddingTop: 4, 
					paddingBottom: 2, 
					alignItems		: 'center',
					justifyContent	: 'center',
					flexDirection	: 'column',
 				}
		}
	} else {

		///App mobile Big
		var Styles = {
			optionlivraison : { 
				flex: 0.28, 
				paddingTop: 4, 
				paddingBottom: 2, 
				alignItems		: 'center',
				justifyContent	: 'center',
				flexDirection	: 'column',
			 },
			appTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					marginBottom: 0,
					paddingBottom: 0,
					flex: 2
				},
			tunnelTitle:
				{
					color: Colors.secondaryText,
					fontFamily: Colors.appTitleFont,
					fontSize: 30,
					marginBottom: 0,
					paddingBottom: 0,

				},
			text:
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
			textLeft:
				{
					paddingTop: 10,
					textAlign: 'left',

				},
			textCenter:
				{
					textAlign: 'center',
				},
			viewopacitytunneletap3: {
				flex: 0.10,
				paddingTop: 2,
				paddingBottom: 2,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			},
			viewopacitytunneletap4: {
				flex: 0.20,
				paddingTop: 2,
				paddingBottom: 2,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			},
			tunnelButton:
				{
					flex: 1,
					width: '100%',
					backgroundColor: Colors.mainButton,
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 20,
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			tunnelButtonText:
				{
					color: '#FFFFFF',
					fontSize: 18,
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

			finishText:
				{
					color: Colors.mainButton,
					fontFamily: Colors.appTitleFont,
					fontSize: 33,
					textAlign: 'center',
					flex: 1,
				},
			descText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 30,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgtexte: {
				flex: 0.3,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 22,
				paddingLeft: 30,
				paddingRight: 30,
				paddingTop: 5,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -60,
				backgroundColor: '#ffffff',

			},
			bottomComm:
				{
					flex: 1,
					width: '50%',
					backgroundColor: '#fba76a',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 0,
					borderRadius: 20,
					alignSelf: 'center'
				},

			bottomCommText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 8,
				},

			PictureBravo:
				{

					width: 60,
					height: 60,
					resizeMode: 'contain',
				},
			PictureFinish:
				{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					marginTop: 30,
					marginBottom: -10,
					zIndex: 1,
				},
			PictureFinishCom:
				{
					width: 60,
					height: 60,
					resizeMode: 'contain',
					marginTop: 30,
				},

			imgCommand: {
				flex: 0.2,
				color: "#5f6dc4",
				width: '100%',
				borderWidth: 1,
				borderColor: "#5f6dc4",
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
				fontSize: 18,
				paddingLeft: 30,
				paddingRight: 30,
				alignSelf: 'center',
				fontFamily: Colors.textFont,
				marginTop: -10,
				backgroundColor: '#ffffff',

			},
			descTextCom:
				{
					color: '#5f6dc4',
					fontFamily: Colors.textFont,
					fontSize: 24,
					textAlign: 'center',
					flex: 1,
					paddingTop: 15,

				},
			imgBackFinish:
				{
					width: 420,
					height: 420,
					resizeMode: 'contain',
					marginTop: -100
				},
			titreText:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 28,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},
			textCommImg:
				{
					color: Colors.main,
					fontSize: 18,
					textAlign: 'justify',
					padding: 10,
					flex: 1,
					marginTop: -140
				},
			line: {
				backgroundColor: '#afd4d3',
				height: 5,
				width: 80
			},
			titreTextList:
				{
					color: '#5f6dc4',
					fontFamily: Colors.appTitleFont,
					fontSize: 24,
					flex: 1,
					marginTop: 30,
					backgroundColor: "#ffffff8f",
					fontWeight: 'bold',
					marginTop: -170

				},

			contentPicture:
				{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					resizeMode: 'contain',
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
					backgroundColor: Colors.backgroundColor
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
					alignSelf: 'center',
					shadowColor: Colors.mainButton,
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: 0.8,
					shadowRadius: 6,
					elevation: 1
				},
			bottomButtonText:
				{
					backgroundColor: 'transparent',
					color: '#FFFFFF',
					fontSize: 18,
					padding: 12,
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


			rightAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					alignItems: 'flex-start',
					justifyContent: 'center',
					marginTop: 10,
					marginBottom: 10,
					borderRadius: 25,
					alignSelf: 'center',
					//fontFamily		: Colors.textFont,
					backgroundColor: '#FFFFFF',
					borderColor: Colors.mainButton,
					maxHeight: 50
				},

			wrongAnswerButton:
				{
					flex: 1,
					width: '50%',
					borderWidth: 1,
					borderColor: Colors.mainButton,
					color: Colors.secondaryText,
					alignItems: 'flex-start',
					justifyContent: 'center',
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
					color: Colors.mainButton,
					fontFamily: Colors.textFont,
					fontSize: 22

				},

			answerButtonInnerWrapper:
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
					marginRight: 10,
					marginLeft: 10,
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
					marginRight: 10,
					marginLeft: 10,
					marginTop: 2,
				},
			labelText:
				{
					fontWeight: "bold",
					color: '#B90740',
					fontFamily: Colors.textFontBold,
					fontSize: 18,
				},
			inputTypeText:
				{
					backgroundColor: '#FFFFFF',
					height: 40,
					borderRadius: 5,
					borderWidth: 1,
					borderColor: Colors.mainButton,
					padding: 5,
					fontSize: 18
				},
			placeholderText:
				{
					fontWeight: "bold",
					color: "#B7B7B7",
					fontFamily: Colors.textFont,
					fontSize: 18,

				},
			landingBottomWrapper:
				{
					flex: 0.5,
					marginBottom: 10,
					marginTop: 10,
					paddingLeft: 15,
					padding: 5,
					flexDirection: 'row',
					borderWidth: 0,
					backgroundColor: Colors.mainButton,
					borderRadius: 7
				},
			landingBottomText:
				{
					flex: 0.75,
					color: "#FFFFFF",
					fontFamily: Colors.textFont,
					fontSize: 20,
					fontWeight: 'bold'
				},
			landingBottomButtonNext:
				{
					textDecorationLine: 'underline',
					color: "#FFFFFF"
				},
			landingScreenTitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 22,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			landingScreenSubtitle:
				{
					color: Colors.mainColor,
					fontFamily: Colors.appTitleFont,
					fontSize: 16,
					marginLeft: 15,
					marginRight: 15,
					marginBottom: 15,
				},
			safeAreaView:
				{
					flex: 1,
					flexDirection: 'column',
					backgroundColor: Colors.backgroundColor,
				},
			safeAreaViewInner:
				{
					paddingLeft: 15,
					paddingRight: 15,
					backgroundColor: Colors.backgroundColor,
				}
		}
	}

}



export default StyleSheet.create(Styles);
