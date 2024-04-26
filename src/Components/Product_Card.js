import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import { colors } from '../Global/styles'

export default function Product_Card({ Prd_name, Prd_price, Prd_image }) {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={styles.text1}> {Prd_name} </Text>
                    <Text style={styles.text1}> PKR: {Prd_price} </Text>
                </View>
                <View style={styles.view4}>
                    <Image
                        style={styles.image}
                        source={{uri: Prd_image}}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: "white",
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: "black",
        margin: 5,
        width: 210,
        padding: 10
    },

    view2: {
        flexDirection: "row",
        padding: 0,
        justifyContent: "space-between"
    },

    view3: {
        justifyContent: "space-between",
        width: 110
    },

    text1: {
        fontSize: 15,
        color: colors.grey1,
    },

    view4: {
        width: 75,
        height: 65
    },

    image: {
        height: 65,
        width: 75
    }
})