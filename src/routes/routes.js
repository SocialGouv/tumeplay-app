import React 					from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import InfoScreen from '../screens/InfoScreen';

import Colors					from '../styles/Color';
import CustomHeaderLeft			from '../screens/CustomHeaderLeft';
import CustomHeaderRight		from '../screens/CustomHeaderRight';
import ContentScreen	 		from '../screens/ContentScreen';
import TunnelDeliverySelect 	from '../screens/tunnel/TunnelDeliverySelect';
import TunnelUserAddress 		from '../screens/tunnel/TunnelUserAddress';
import TunnelCartSummary 		from '../screens/tunnel/TunnelCartSummary';
import TunnelOrderConfirm 		from '../screens/tunnel/TunnelOrderConfirm';
import TunnelPickupSelect 		from '../screens/tunnel/TunnelPickupSelect';
import LandingScreen 			from '../screens/LandingScreen';
import QuizzFinishScreen		from '../screens/QuizzFinishScreen';
import FinishScreenCommand from '../screens/FinishScreenCommand';



//import COLOR from '../styles/Color';

const AppStack = createStackNavigator(
    {
    	LandingScreen: {
            screen: LandingScreen
        },
    	ContentScreen: {
            screen: ContentScreen,
            navigationOptions : ({navigation}) => ({
	            params: navigation.state.params,
	            headerLeft : <CustomHeaderLeft navigation={navigation} withBack={true} />            
	        })
        },
   		QuizzFinishScreen: {
             screen: QuizzFinishScreen,
         },
        FinishScreenCommand: {
            screen: FinishScreenCommand,
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
    	initialRouteName	: 'LandingScreen', 
        headerLayoutPreset	: 'center',
        defaultNavigationOptions	: {
        	headerLeft  	: <CustomHeaderLeft />,
        	headerRight  	: <CustomHeaderRight />,
            headerStyle		: {
                backgroundColor	 : '#000000',
                borderBottomWidth: 1,
                borderBottomColor: '#3D1D0B'
            },
            headerTintColor	: Colors.backgroundColor,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default AppStack;
