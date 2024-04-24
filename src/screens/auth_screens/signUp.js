import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView } from 'react-native';
import {colors} from '../../Global/styles'
import { Icon } from "react-native-elements";
import Header from "../../Components/Header";

export default function SignUp({ navigation }) {
    return (
        <View style={{ flex: 1 }} >
            <Header title="Sign Up" navigation={navigation} />

            <View style={{ marginLeft: '6%', marginTop: '3%' }}>
                <Text style={styles.title}> Sign Up </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: '3%' }}>
                <Text style={styles.text1}> Please Enter the Email and Password </Text>
                <Text style={styles.text1}> registered with your account </Text>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#ff8c52',
        fontSize: 25,
        fontWeight: 'bold',
    },
    text1: {
        color: colors.grey3,
        fontSize: 14
    },
})