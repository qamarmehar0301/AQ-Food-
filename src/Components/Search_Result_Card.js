import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions, ImageBackground } from 'react-native';
import { Icon } from "react-native-elements";
import { colors } from '../Global/styles'
import { resturantsData } from "../Global/Data";
import Product_Card from "./Product_Card";

export default function Search_Result_Card({
    onPresResturant_Card,
    resturantsName,
    deliveryAvailable,
    disscountAvailable,
    noOfReviews,
    businessAddress,
    farAway,
    averageReview,
    screenWidth,
    images,
    ProductData
}) {
    return (
        <View>
            <TouchableOpacity onPress={onPresResturant_Card}>
                <View style={{ ...styles.cardView, width: screenWidth }}>
                    <Image
                        style={{ ...styles.image }}
                        source={{ uri: images }}
                    />
                    <View>
                        <View>
                            <Text style={styles.resturantsName}> {resturantsName}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
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
            <View style={{ marginTop: 5, paddingBottom: 20 }}>

                <FlatList
                    data={ProductData}
                    horizontal={true}
                    showsHorizontalScrollIndicator = {true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Product_Card
                            Prd_image={item.image}
                            Prd_price={item.price}
                            Prd_name={item.name}
                        />
                    )}
                    
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 5,
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
    },
    Product_Card: {
        height: 70,
        backgroundColor: 'pink'
    }
})
