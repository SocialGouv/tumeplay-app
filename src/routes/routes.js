'use strict';

import { createStackNavigator } from 'react-navigation-stack';
import InfoScreen from '../screens/InfoScreen';

import QuestionA 				from '../screens/QuestionA';
import QuestionB 				from '../screens/QuestionB';
import AnswerScreen 			from '../screens/AnswerScreen';
import LandingPage		 		from '../screens/LandingPage';
import TunnelDeliverySelect 	from '../screens/tunnel/TunnelDeliverySelect';
import TunnelUserAddress 		from '../screens/tunnel/TunnelUserAddress';
import TunnelCartSummary 		from '../screens/tunnel/TunnelCartSummary';
import TunnelOrderConfirm 		from '../screens/tunnel/TunnelOrderConfirm';
import TunnelPickupSelect 		from '../screens/tunnel/TunnelPickupSelect';
import LandingScreen 			from '../screens/LandingScreen';



//import COLOR from '../styles/Color';

const AppStack = createStackNavigator(
    {
        FirstQuestion: {
            screen: QuestionB,
        },
        SecondQuestion: {
	        screen: QuestionA
	    },
        AnswerScreen: {
            screen: AnswerScreen,
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
        LandingPage: {
            screen: LandingPage,
        },
        LandingScreen: {
            screen: LandingScreen
        }
    },
    {
        headerLayoutPreset: 'center',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#123456",
            },
            headerTintColor: "FFFFFF",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default AppStack;
