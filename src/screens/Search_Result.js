import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import Search_Result_Card from "../Components/Search_Result_Card";
import { resturantsData } from '../Global/Data'
import { colors } from '../Global/styles'
import Header from "../Components/Header";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Search_Result({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Header title="Your Search" navigation={navigation}/>
            <View>
                <View style={{ marginVertical: '5%', marginLeft: '2.5%' }}>
                    <Text style={styles.text}> {resturantsData.length} results for {route.params.item}  </Text>
                </View>

                <ScrollView>

                    <FlatList
                        style={{ marginLeft: '1.5%', marginBottom: '8%' }}
                        // horizontal={false}
                        showsHorizontalScrollIndicator={false}
                        data={resturantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 20 }}>
                                <Search_Result_Card
                                    screenWidth={SCREEN_WIDTH * 0.94}
                                    images={item.images}
                                    resturantsName={item.resturantsName}
                                    businessAddress={item.businessAddress}
                                    noOfReviews={item.numberofReviews}
                                    averageReview={item.averageReviews}
                                    farAway={item.farAway}
                                     ProductData={item.ProductData}
                                />
                            </View>
                        )}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 24,
        color: colors.grey1,
        fontWeight: 'bold',
    },
})