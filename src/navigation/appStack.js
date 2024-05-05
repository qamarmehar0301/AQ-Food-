import React from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Buottom_tab_navigator from "./bottomTabNavigation";
import ResturantsMap_Screen from "../screens/ResturantsMap_Screen"
import Drawer_Navigation from "./DrawerNavigator";
import Rest_Profile_Screen from "../screens/Rest_Profile_Screen";
import My_Account from "../screens/My_Account";
import Rest_menu_Screen from "../screens/Rest_menu_Screen";
import PreferenceScreen from "../screens/PreferenceScreen";


const App = createNativeStackNavigator();

export default function AppStack() {
    return (
        <App.Navigator>
            <App.Screen
                name="Buottom_tab_navigator"
                component={Buottom_tab_navigator}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="Drawer_Navigator"
                component={Drawer_Navigation}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="ResturantsMap_Screen"
                component={ResturantsMap_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="Rest_Profile_Screen"
                component={Rest_Profile_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="Rest_menu_Screen"
                component={Rest_menu_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <App.Screen
                name="PreferenceScreen"
                component={PreferenceScreen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />

        </App.Navigator>
    )
}
