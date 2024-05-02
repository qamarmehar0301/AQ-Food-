import React from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Welcome_Screen from "../screens/Welcome";
import SignIn from "../screens/auth_screens/signIn";
import SignUp from "../screens/auth_screens/signUp";
import Privacy_page from "../screens/auth_screens/Privacy_page";
import Term_condition from '../screens/auth_screens/Term_condition';

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
                name="Privacy_page"
                component={Privacy_page}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="Term_condition"
                component={Term_condition}
                options={{
                    headerShown: false,
                    // ...TransitionPreset.RevealFromBottomAndroid
                }}
            />
           
        </Auth.Navigator>
    )
}