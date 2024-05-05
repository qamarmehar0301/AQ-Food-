import React, { useState, useContext } from "react";
import { Text, View, StyleSheet,TouchableOpacity, AppState } from 'react-native';
import { Icon } from "react-native-elements";
import Header from "../Components/Header";
import { SignInContext } from "../context/auth_Context";

export default function My_Order({navigation}){

    const { dispatchSignIn } = useContext(SignInContext)


    async function handlenavigatie(){
        console.log('pressed')
        // dispatchSignIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
        navigation.navigate('My_Order')
    }
    return(
       <View>
       <Header title= 'Location' navigation={navigation}/>
       <TouchableOpacity onPress={handlenavigatie}> 
        <Text style = {{color: 'black'}}> Touch me </Text>
       </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})