import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable } from 'react-native';
import Home_Header from "../Components/Home_Header";
import { colors, parameters } from '../Global/styles';
import { Icon } from "react-native-elements";
import { resturantsData } from '../Global/Data'

export default function Food_Card({
    onPresFood_Card,
    resturantsName,
    deliveryAvailable,
    disscountAvailable,
    noOfReviews,
    businessAddress,
    farAway,
    averageReview,
    screenWidth,
    images,
    
}) {
    return (
        <TouchableOpacity onPress={onPresFood_Card}>
 
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image }}
                    source={{ uri: images }}
                />
                <View>
                    <View>
                        <Text style={styles.resturantsName}> {resturantsName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' ,  marginBottom: 5 }}>

                        <View style={styles.distance}>
                            <Icon
                                type="material"
                                name="place"
                                color="#86939e"
                                size={18}
                                iconStyle={{
                                    marginTop: 3
                                }}
                            />
                            <Text style={styles.Min}> {farAway} Min </Text>
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={styles.business_address}> {businessAddress} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.review_container}>
                    <Text style={styles.review_text}> {averageReview} </Text>
                    <Text style={{ color: 'white' }}> {noOfReviews} reviews </Text>
                </View>
            </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 0.8,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
    },
    resturantsName: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
        color: colors.grey1
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        paddingHorizontal: 5,
        borderRightColor: colors.grey4,
        borderRightWidth: 1
    },
    Min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.grey3
    },
    business_address: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: colors.grey3
    },
    review_container: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: "rgba(52,52,52,0.3)",
        padding: 2,
        alignItems: 'center',
        borderTopRightRadius: 5,
        borderBottomEndRadius: 12,
    },
    review_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: -3
    }
})
