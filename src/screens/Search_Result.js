import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, Dimensions, Alert } from 'react-native';
import Search_Result_Card from "../Components/Search_Result_Card";
import { resturantsData } from '../Global/Data'
import { colors } from '../Global/styles'
import Header from "../Components/Header";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Search_Result({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Header title="Your Search" navigation={navigation} />
            <ScrollView stickyHeaderIndices={[0]}>

                <View style={{ marginLeft: '2.5%', backgroundColor: 'white', paddingBottom: 15, paddingTop: 15 }}>
                    <Text style={styles.text}> {resturantsData.length} results for {route.params.item}  </Text>
                </View>

                <FlatList
                    style={{ marginHorizontal: '1.5%' }}
                    data={resturantsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={{ marginBottom: 5 }}>
                            <Search_Result_Card
                                screenWidth={SCREEN_WIDTH * 0.94}
                                images={item.images}
                                resturantsName={item.resturantsName}
                                businessAddress={item.businessAddress}
                                noOfReviews={item.numberofReviews}
                                averageReview={item.averageReviews}
                                farAway={item.farAway}
                                ProductData={item.ProductData}
                                onPresResturant_Card={() => { navigation.navigate('Rest_Profile_Screen', { id: index, resturant: item.resturantsName }) }}
                            />
                        </View>
                    )}
                />
                
            </ScrollView>
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