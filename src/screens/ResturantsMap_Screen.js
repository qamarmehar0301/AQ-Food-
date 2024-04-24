import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";

export default function My_Order(){
    return(
       <View>
        <Text style={{color: 'black'}}> This is the Resturant Map Page </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})