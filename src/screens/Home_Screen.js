import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions, AppState } from 'react-native';
import { Icon } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import Home_Header from "../Components/Home_Header";
import { colors, parameters } from '../Global/styles';
import { filterData, resturantsData, Promotion_Resturant_Data } from '../Global/Data'
import Food_Card from "../Components/Food_card";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Home_Screen({ navigation }) {

    const [Delivery, setDelivery] = useState(true)
    const [checkIndex, setcheckIndex] = useState("0")

    return (
        <View style={styles.container}>

            <Home_Header/>

            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>

                {/* Delivery & Pick Up Button */}
                <View style={{ backgroundColor: colors.cardbackgroundcolor }}>
                    <View style={{ marginVertical: '3.5%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(true)
                                navigation.navigate('Bottom_Tab_Navigator')
                                
                            }}
                        >
                            <View style={{ ...styles.deliveryBtn, backgroundColor: Delivery ? colors.buttons : colors.grey4 }}>
                                <Text style={styles.textStyle}> Delivery </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false)
                                navigation.navigate('ResturantsMap_Screen')
                            }}
                        >
                            <View style={{ ...styles.deliveryBtn, backgroundColor: Delivery ? colors.grey4 : colors.buttons }}>
                                <Text style={styles.textStyle}> Pick Up </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Clock and Location View */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>

                    {/* Now and Location Icon */}
                    <View style={styles.location_view}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%' }}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ color: 'black' }}> UET Lahore </Text>
                        </View>
                        <View style={styles.clock}>
                            <Icon
                                type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{ color: 'black' }}> Now </Text>
                        </View>
                    </View>

                    {/* Tune Icon */}
                    <View style={{ marginRight: '5%' }}>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={26}
                        />
                    </View>
                </View>

                {/* Catagory  */}
                <View style={{ marginVertical: '3%' }}>
                    <View>
                        <Text style={styles.catagory}> Catagories </Text>
                    </View>

                    <View style={{ marginHorizontal: '2%' }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={filterData}
                            keyExtractor={(item) => item.id}
                            extraData={checkIndex}
                            renderItem={({ item, index }) => (

                                <Pressable onPress={() => { setcheckIndex(item.id) }}>
                                    <View style={checkIndex === item.id ? { ...styles.selected_catagory_card } : { ...styles.catagory_card }} >

                                        <Image source={item.image} style={styles.catagorgy_card_image} />

                                        <View style={{ height: '20%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={checkIndex === item.id ? { ...styles.selected_catagorgy_card_text } : { ...styles.catagorgy_card_text }} > {item.name} </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>

                {/* Free Delivery Now  */}
                <View>
                    <View>
                        <Text style={styles.catagory}>Free Delivery Now</Text>
                    </View>

                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: '1%' }}>
                            <Text style={styles.timer_text}> Options Changing in </Text>
                            <CountDown
                                until={5000}
                                size={13}
                                digitStyle={{ backgroundColor: colors.light_green }}
                                timeToShow={['H', 'M', 'S']}
                            // timeLabels = {{ h: 'Hours ' ,m: 'Min ', s:'Sec'}}
                            />
                        </View>

                        <FlatList
                            style={{ marginLeft: '1.5%', marginBottom: 10 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={resturantsData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Food_Card
                                        screenWidth={SCREEN_WIDTH * 0.8}
                                        images={item.images}
                                        resturantsName={item.resturantsName}
                                        businessAddress={item.businessAddress}
                                        noOfReviews={item.numberofReviews}
                                        averageReview={item.averageReviews}
                                        farAway={item.farAway}
                                    />
                                </View>
                            )}
                        />
                    </View>
                </View>

                {/* Promotion Available */}
                <View>
                    <View>
                        <Text style={styles.catagory}>Promotion Available</Text>
                    </View>

                    <View>
                        <FlatList
                            style={{ marginLeft: '1.5%', marginBottom: 10 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={Promotion_Resturant_Data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Food_Card
                                        screenWidth={SCREEN_WIDTH * 0.8}
                                        images={item.images}
                                        resturantsName={item.resturantsName}
                                        businessAddress={item.businessAddress}
                                        noOfReviews={item.numberofReviews}
                                        averageReview={item.averageReviews}
                                        farAway={item.farAway}
                                    />
                                </View>
                            )}
                        />
                    </View>
                </View>

                {/* Restaurant In Your Area  */}
                <View>
                    <View>
                        <Text style={styles.catagory}>Restaurant In Your Area </Text>
                    </View>
                    <View style={{ width: SCREEN_WIDTH }}>
                        {
                            resturantsData.map(item => (
                                <View key={item.id} style={{ paddingBottom: '5%', marginHorizontal: '1.5%' }} >
                                    <Food_Card
                                        screenWidth={SCREEN_WIDTH * 0.95}
                                        images={item.images}
                                        resturantsName={item.resturantsName}
                                        businessAddress={item.businessAddress}
                                        noOfReviews={item.numberofReviews}
                                        averageReview={item.averageReviews}
                                        farAway={item.farAway}
                                    />
                                </View>
                            ))
                        }
                    </View>
                </View>

            </ScrollView>

            {/* Map Floating Button */}
            { Delivery &&
                <View>
                    <TouchableOpacity style={styles.map_Btn} onPress={() => { navigation.navigate('ResturantsMap_Screen') }}>
                        <Icon
                            type="material-community"
                            name="map-marker"
                            color={colors.buttons}
                            size={32}
                        />
                        <Text style={{ color: colors.grey3 }}> Map </Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryBtn: {
        paddingHorizontal: '5%',
        paddingVertical: '2.5%',
        borderRadius: 15,
        alignItems: 'center'
    },
    textStyle: {
        marginLeft: '2%',
        fontSize: 16,
        color: 'black'
    },
    location_view: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: colors.grey4,
        alignItems: 'center',
        height: 35,
        width: '70%',
        marginLeft: '10%',
        justifyContent: 'space-between'
    },
    clock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '10%',
        backgroundColor: colors.cardbackgroundcolor,
        borderRadius: 10,
        width: 70
    },
    catagory: {
        fontSize: 25,
        color: colors.grey1,
        marginLeft: '2.5%',
        marginBottom: '3%'
    },
    timer_text: {
        color: 'black',
        fontSize: 16,
        marginHorizontal: '2.5%',
        marginBottom: '3%'
    },
    selected_catagory_card: {
        backgroundColor: colors.buttons,
        elevation: 2.5,
        borderRadius: 15,
        height: 140,
        width: 115,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catagory_card: {
        backgroundColor: colors.grey5,
        elevation: 2.5,
        borderRadius: 15,
        height: 140,
        width: 115,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catagorgy_card_image: {
        height: '70%',
        width: '80%',
        borderRadius: 70,
    },
    selected_catagorgy_card_text: {
        fontSize: 16,
        color: colors.cardbackgroundcolor,
        fontWeight: 'bold'
    },
    catagorgy_card_text: {
        fontSize: 16,
        color: colors.grey1,
        fontWeight: 'bold'
    },
    map_Btn: {
        backgroundColor: 'white',
        borderRadius: 30,
        bottom: 15, right: 15,
        elevation: 10,
        position: 'absolute',
        width: 60, height: 60,
        alignItems: 'center'
    }
})