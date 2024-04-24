import React from "react";
import { Text, View } from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authNavigation";
import { color } from "react-native-elements/dist/helpers";

export default  function RootNavigator() {
    return(
        // <View>
        //     <Text style=  {{ color: 'black'}}> This is Working </Text>
        // </View>
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

