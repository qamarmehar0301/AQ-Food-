import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements'
import Home_Screen from "./Home_Screen";

export default function My_Order({navigation}){
    return(
        <View style = {styles.container}> 
            <View style=  {{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.text}> You Don't have any active Order Yet.</Text>
                <View style={{ marginHorizontal: '5%', marginVertical: 10 }}>
                    <Button
                        title='Order Now'
                        titleStyle={styles.buttonTitle}
                        buttonStyle={styles.styledButton}
                        // onPress={() => { navigation.navigate('Buottom_tab_navigator') }}
                        onPress={() => { navigation.navigate('Home Screen') }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    styledButton: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        width: '100%',
        paddingHorizontal: 20
    },
    buttonTitle: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -3,
    }
})