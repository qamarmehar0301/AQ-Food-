import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";

export default function Search_Screen(){
    return(
        <View style = {styles.container}> 
            <Text style = {{color: 'black'}}> This is the Search Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})