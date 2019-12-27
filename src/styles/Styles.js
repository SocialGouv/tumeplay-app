import Colors from './Color';

import SmallBrowser from './variants/Styles.browser.small';
import SmallMobile from './variants/Styles.mobile.small';

import Browser from './variants/Styles.browser';
import Mobile from './variants/Styles.mobile';

import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const {detect} = require('detect-browser');
const browser = detect();

var Styles = {
  appTitle: {
    color: Colors.secondaryText,
    fontFamily: Colors.appTitleFont,
    fontSize: 30,
    lineHeight: 34,
    marginBottom: 0,
    paddingBottom: 0,
    flex: 2,
  },
  tunnelTitle: {
    color: Colors.secondaryText,
    fontFamily: Colors.appTitleFont,
    fontSize: 30,
    marginBottom: 0,
    paddingBottom: 0,
  },
  text: {
    color: Colors.secondaryText,
    fontFamily: Colors.textFont,
    fontSize: 20,
    marginBottom: 0,
    paddingBottom: 0,
    marginTop: 0,
    paddingTop: 0,
    textAlign: 'center',
    flex: 1,
  },
  textLeft: {
    paddingTop: 10,
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  viewopacitytunneletap3: {
    flex: 0.1,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  viewopacitytunneletap4: {
    flex: 0.2,
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  withShadow: {
    shadowColor: Colors.mainButton,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 1,
  },
  tunnelButton: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.mainButton,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },

  tunnelButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  tunnelButtonTextOpaque: {
    opacity: 0.2,
    color: '#FFFFFF',
    fontSize: 18,
  },

  questionText: {
    color: Colors.secondaryText,
    fontFamily: Colors.appTitleFont,
    fontSize: 30,
    marginBottom: 0,
    paddingBottom: 0,
    marginTop: 0,
    paddingTop: 0,
    textAlign: 'center',
    flex: 1,
    lineHeight: 34,
  },

  finishText: {
    color: Colors.mainButton,
    fontFamily: Colors.appTitleFont,
    fontSize: 33,
    textAlign: 'center',
    flex: 1,
  },
  descText: {
    color: '#5f6dc4',
    fontFamily: Colors.textFont,
    fontSize: 30,
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
  },
  imgtexte: {
    flex: 0.3,
    color: '#5f6dc4',
    width: '100%',
    borderWidth: 1,
    borderColor: '#5f6dc4',
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
  bottomComm: {
    flex: 1,
    width: '50%',
    backgroundColor: '#fba76a',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 20,
    alignSelf: 'center',
  },
  bottomCommText: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 8,
  },
  PictureBravo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  PictureFinish: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: -5,
    zIndex: 1,
  },
  PictureFinishCom: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 30,
  },

  imgCommand: {
    flex: 0.2,
    color: '#5f6dc4',
    width: '100%',
    borderWidth: 1,
    borderColor: '#5f6dc4',
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
  descTextCom: {
    color: '#5f6dc4',
    fontFamily: Colors.textFont,
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
  },
  imgBackFinish: {
    width: 420,
    height: 420,
    resizeMode: 'contain',
    marginTop: -100,
  },
  titreText: {
    color: '#5f6dc4',
    fontFamily: Colors.appTitleFont,
    fontSize: 28,
    flex: 1,
    marginTop: 30,
    backgroundColor: '#ffffff8f',
    fontWeight: 'bold',
  },
  textCommImg: {
    color: Colors.main,
    fontSize: 18,
    textAlign: 'justify',
    padding: 10,
    flex: 1,
    marginTop: -140,
  },
  line: {
    backgroundColor: '#afd4d3',
    height: 5,
    width: 80,
  },
  titreTextList: {
    color: '#5f6dc4',
    fontFamily: Colors.appTitleFont,
    fontSize: 24,
    flex: 1,
    marginTop: 30,
    backgroundColor: '#ffffff8f',
    fontWeight: 'bold',
  },
  contentPicture: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    //margin			: 60
  },
  loader: {},
  container: {},
  list: {},
  lightText: {},
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  slide: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  bottomButton: {
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
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 1,
  },
  bottomButtonText: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 18,
    padding: 12,
  },
  rightAnswerButton: {
    flex: 1,
    width: '70%',
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
    maxHeight: 50,
  },
  wrongAnswerButton: {
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
  answerText: {
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
    fontSize: 17,
  },
  rightAnswerButtonText: {
    color: Colors.mainButton,
    fontFamily: Colors.textFont,
    fontSize: 22,
  },
  answerButtonInnerWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  wrongAnswerButtonText: {
    color: Colors.secondaryText,
    fontFamily: Colors.textFont,
    fontSize: 22,
  },
  wrongAnswerButtonIconWrapper: {
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
  rightAnswerButtonIconWrapper: {
    width: 25,
    height: 25,
    borderRadius: 25,
    paddingLeft: 0,
    paddingTop: 0,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 2,
  },
  labelText: {
    fontWeight: 'bold',
    color: Colors.labelColor,
    fontFamily: Colors.textFont,
    fontSize: 16,
    marginBottom: 2,
  },
  inputTypeText: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.mainButton,
    padding: 3,
    paddingLeft: 15,
    fontSize: 16,
  },
  placeholderText: {
    fontWeight: 'bold',
    color: '#B7B7B7',
    fontFamily: Colors.textFont,
    fontSize: 16,
  },
  landingBottomWrapper: {
    flex: 0.5,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 15,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 0,
    backgroundColor: Colors.mainButton,
    borderRadius: 7,
    minHeight: 45,
    alignItems: 'center',
  },
  landingBottomText: {
    flex: 0.75,
    color: '#FFFFFF',
    fontFamily: Colors.textFont,
    fontSize: 16,
    fontWeight: 'bold',
  },
  landingBottomButtonNext: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  landingScreenTitle: {
    color: Colors.mainColor,
    fontFamily: Colors.appTitleFont,
    fontSize: 26,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  landingScreenSubtitle: {
    color: Colors.mainColor,
    fontFamily: Colors.textFont,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
  },
  safeAreaViewInner: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.backgroundColor,
  },
};

let _conditionalStyle = {};

if (browser) {
  if (screenWidth <= 420) {
    _conditionalStyle = SmallBrowser;
  } else {
    _conditionalStyle = Browser;
  }
} else {
  if (screenWidth <= 320) {
    _conditionalStyle = SmallMobile;
  } else {
    _conditionalStyle = Mobile;
  }
}

{
  Object.keys(Styles).map(key => {
    if (key in _conditionalStyle) {
      Styles[key] = {...Styles[key], ..._conditionalStyle[key]};
    }
  });
}

export default StyleSheet.create(Styles);
