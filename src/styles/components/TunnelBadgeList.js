import {StyleSheet} from 'react-native';
import Colors from '../Color';

var Styles = {
  topLogoPicture: {
    width: '100%',
    resizeMode: 'contain',
    height: 175,
    maxWidth: 150,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1,
  },
  topLogoText: {
    textAlign: 'center',
    position: 'absolute',
    top: '48%',
    color: '#FFFFFF',
    zIndex: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    fontFamily: Colors.textFont,
  },
  topLogoCounterWrapper: {
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 20,
  },
  textContainer: {
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    borderColor: Colors.labelColor,
    borderRadius: 20,
    marginTop: -10,
  },
  topLogoCounter: {
    zIndex: 0,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: Colors.appTitleFont,
    color: Colors.labelColor,
    fontSize: 15,
  },
};

export default StyleSheet.create(Styles);
