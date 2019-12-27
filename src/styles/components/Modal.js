import {Platform} from 'react-native';

const isWeb = Platform.OS == 'web';

var Styles = {
  modal: {
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  },
  innerModal: {
    flex: 1,
    marginBottom: 25,
    marginRight: isWeb ? 'auto' : 25,
    marginLeft: isWeb ? 'auto' : 25,
    marginTop: 35,
    borderRadius: 7,
    borderColor: '#000000',
    position: 'relative',
    maxWidth: isWeb ? 500 : undefined,
    maxHeight: isWeb ? 650 : undefined,
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
};

// NOT USING STYLESHEET. It's a intended move ( avoid Web mode problems. )
export default Styles;
