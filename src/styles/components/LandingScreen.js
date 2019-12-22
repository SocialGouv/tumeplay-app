import {StyleSheet} from 'react-native';
import Colors from '../Color';

// if browser && screenWidth < 420
var Styles = {
  gridContainer: {
    flex: 1,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 14,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },
  gridItemButton: {},
  gridItemPicture: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: 130,
    flex: 1,
  },
  gridItemTextContainer: {
    padding: 7,
    paddingLeft: 15,
    borderBottomLeftRadius: 7,
    backgroundColor: '#FFFFFF',
    borderBottomRightRadius: 7,
    width: '100%',
  },
  gridItemText: {
    margin: 0,
    color: Colors.mainButton,
    fontSize: 23,
    lineHeight: 24,
    fontFamily: Colors.titleCard,
  },
};

export default StyleSheet.create(Styles);
