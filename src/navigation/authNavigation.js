import React from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Welcome_Screen from "../screens/Welcome";
import SignIn from "../screens/auth_screens/signIn";
import Home_Screen from "../screens/Home_Screen";
import SignUp from "../screens/auth_screens/signUp";

const Auth = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="Welcom_screen"
                component={Welcome_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
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
                name="Home_Screen"
                component={Home_Screen}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}