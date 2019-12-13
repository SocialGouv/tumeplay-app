import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../styles/Color';
import CustomHeaderLeft from '../screens/components/header/CustomHeaderLeft';
import CustomHeaderRight from '../screens/components/header/CustomHeaderRight';
import ContentScreen from '../screens/ContentScreen';
import TunnelDeliverySelect from '../screens/tunnel/TunnelDeliverySelect';
import TunnelProductSelect from '../screens/tunnel/TunnelProductSelect';
import TunnelUserAddress from '../screens/tunnel/TunnelUserAddress';
import TunnelCartSummary from '../screens/tunnel/TunnelCartSummary';
import TunnelOrderConfirm from '../screens/tunnel/TunnelOrderConfirm';
import TunnelPickupSelect from '../screens/tunnel/TunnelPickupSelect';
import LandingScreen from '../screens/LandingScreen';
import QuizzFinishScreen from '../screens/QuizzFinishScreen';

const AppStack = createStackNavigator(
  {
    LandingScreen: {
      screen: LandingScreen,
    },
    ContentScreen: {
      screen: ContentScreen,
      navigationOptions: ({navigation}) => ({
        params: navigation.state.params,
        headerLeft: (
          <CustomHeaderLeft navigation={navigation} withBack={true} />
        ),
      }),
    },
    QuizzFinishScreen: {
      screen: QuizzFinishScreen,
    },
    TunnelProductSelect: {
      screen: TunnelProductSelect,
      navigationOptions: ({navigation}) => ({
        params: navigation.state.params,
        headerLeft: (
          <CustomHeaderLeft navigation={navigation} withBack={true} />
        ),
      }),
    },
    TunnelDeliverySelect: {
      screen: TunnelDeliverySelect,
    },
    TunnelUserAddress: {
      screen: TunnelUserAddress,
    },
    TunnelCartSummary: {
      screen: TunnelCartSummary,
    },
    TunnelOrderConfirm: {
      screen: TunnelOrderConfirm,
    },
    TunnelPickupSelect: {
      screen: TunnelPickupSelect,
    },
  },
  {
    initialRouteName: 'LandingScreen',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerLeft: <CustomHeaderLeft />,
      headerRight: <CustomHeaderRight />,
      headerStyle: {
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#3D1D0B',
      },
      headerTintColor: Colors.backgroundColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default AppStack;
