import React from "react";
import { Text, View } from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigation";
import { color } from "react-native-elements/dist/helpers";

export default  function RootNavigator() {
    return(
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

