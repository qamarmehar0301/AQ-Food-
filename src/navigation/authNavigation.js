import React from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Welcome_Screen from "../screens/Welcome";
import SignIn from "../screens/auth_screens/signIn";
import Home_Screen from "../screens/Home_Screen";
import SignUp from "../screens/auth_screens/signUp";
import Buottom_tab_navigator from "./bottomTabNavigation";
import ResturantsMap_Screen from "../screens/ResturantsMap_Screen"
import Drawer_Navigation from "./DrawerNavigator";
import Rest_Profile_Screen from "../screens/Rest_Profile_Screen";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="Welcom_screen"
                component={Welcome_Screen}
                options={{
                    headerShown: false,
                    //...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
             <Auth.Screen
                name="Buottom_tab_navigator"
                component={Buottom_tab_navigator}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="Drawer_Navigator"
                component={Drawer_Navigation}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="ResturantsMap_Screen"
                component={ResturantsMap_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="Rest_Profile_Screen"
                component={Rest_Profile_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}