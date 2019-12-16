import {StyleSheet} from 'react-native';
import Colors from '../Color';

var Styles = {
  checkPicture: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 2,
  },
  plusPicture: {
    marginRight: 5,
    width: 30,
    height: 30,
    marginTop: -4,
    paddingTop: 0,
    resizeMode: 'contain',
  },
  explanationWrapper: {
    flex: 1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  explanationInnerWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    padding: 15,
    paddingBottom: 0,
  },
  explanationTextWrapper: {
    flex: 1.5,
    flexWrap: 'wrap',
    fontSize: 16,
  },
  nextButtonWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    maxHeight: 55,
    marginBottom: 20,
  },
  nextButton: {
    width: 46,
    height: 46,
    paddingLeft: 12,
    paddingTop: 12,
    borderRadius: 25,
    backgroundColor: Colors.mainButton,
  },
  nextButtonPicture: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  pictureAndTextWrapper: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    width: '100%',
    maxHeight: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  pictureAndTextPicture: {
    marginRight: 10,
    marginTop: 1,
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
};

export default StyleSheet.create(Styles);
