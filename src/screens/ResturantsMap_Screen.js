import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import Header from "../Components/Header";

export default function My_Order({navigation}){
    return(
       <View>
       <Header title= 'Location' navigation={navigation}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})