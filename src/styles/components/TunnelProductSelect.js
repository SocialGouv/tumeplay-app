import {StyleSheet} from 'react-native';
import Colors from '../Color';

var Styles = {
  topLogoPicture: {
    width: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 175,
    zIndex: 1,
    marginTop: 10,
  },
  topLogoCounterWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  textWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: -33,
    minWidth: 120,
    minHeight: 30,
    zIndex: 0,
  },
  topLogoCounter: {
    zIndex: 0,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 0,
    minWidth: 120,
    borderRadius: 20,
    borderWidth: 2,
    fontFamily: Colors.appTitleFont,
    borderColor: Colors.labelColor,
    color: Colors.labelColor,
    fontSize: 20,
  },
};

export default StyleSheet.create(Styles);
