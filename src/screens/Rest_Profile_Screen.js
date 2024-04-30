import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import Resturant_Header from "../Components/Resturant_Header";
import { colors, fonts } from '../Global/styles';
import { resturantsData } from "../Global/Data";
import { TabBar, TabView } from "react-native-tab-view"
import Menu_Screen from "./Rest_Profile_Tab/Menu_Screen";
import Info_Screen from "./Rest_Profile_Tab/Info_Screen";
import Reviews_Screen from "./Rest_Profile_Tab/Reviews_Screen";
import Gallery_Screen from "./Rest_Profile_Tab/Gallery_Screen";

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

export default function Rest_Profile_Screen({ navigation, route }) {

    const { id, resturant } = route.params
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'MENU' },
        { key: 'second', title: 'INFO' },
        { key: 'third', title: 'REVIEWS' },
        { key: 'fourth', title: 'GALLERY' },
    ])

    renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.cardbackgroundcolor }}
            scrollEnabled={true}
            tabStyle={styles.tabStyle}
            style={styles.tab}
            labelStyle={styles.tabLable}
            contentContainerStyle={styles.tabContainer}
        />
    )

    const UpdateRoute1 = () => {
        return (
            <View>
                <Text> </Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>

            <ScrollView>
                <View>
                    <Resturant_Header id={id} navigation={navigation} />

                    <View style={styles.text_View}>
                        {resturantsData[id].disscount ? (
                            <Text style={styles.text}> Get {resturantsData[id].disscount}% off on Food Total </Text>
                        ) : (
                            <Text style={styles.text}> No discount available </Text>
                        )}
                    </View>

                    {/* Rsturant Name, Collect, Delivery */}
                    <View style={styles.view2}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.res_name}>{resturantsData[id].resturantsName} </Text>
                            <Text style={styles.food_type}>{resturantsData[id].foodType} </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Icon
                                        name="star"
                                        type="material-community"
                                        size={16}
                                        color='grey'
                                    />
                                    <Text style={{ color: 'grey' }}>{resturantsData[id].averageReviews} ({resturantsData[id].numberofReviews}+) </Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Icon
                                        name="map-marker"
                                        type="material-community"
                                        size={16}
                                        color='grey'
                                    />
                                    <Text style={{ color: 'grey' }}>{resturantsData[id].farAway}km away </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#544C4C', fontSize: 18 }}>Collect </Text>
                            <View style={styles.collect_round}>
                                <Text style={styles.text3}>{resturantsData[id].collectTime}</Text>
                                <Text style={styles.text4}>min</Text>
                            </View>

                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#544C4C', fontSize: 18 }}>Delivery </Text>
                            <View style={styles.Delivery_round}>
                                <Text style={styles.text5}>{resturantsData[id].deliveryTime}</Text>
                                <Text style={styles.text6}>min</Text>
                            </View>

                        </View>

                    </View>
                </View>

                <View style={{ backgroundColor: colors.buttons, elevation: 5 }}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition="top"
                    />
                </View>
                {

                    index === 0 &&
                    <Menu_Screen resturant={resturant} />
                }
                {
                    index === 1 &&
                    <Info_Screen />
                }
                {
                    index === 2 &&
                    <Reviews_Screen />
                }
                {
                    index === 3 &&
                    <Gallery_Screen />
                }

            </ScrollView>

            <TouchableOpacity>
                <View style={styles.cartView}>
                    <View>
                        <Text style={styles.cart_text}> View Cart </Text>
                    </View>
                    <View style={styles.view13}>
                        <Text style={styles.text13}> 0 </Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    text_View: {
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'green',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    view2: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 5
    },
    res_name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    food_type: {
        color: 'grey',
        fontSize: 12,
    },
    text2: {
        color: 'black',
        fontSize: 18,
    },
    text3: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        marginTop: 5
    },
    text4: {
        fontSize: 13,
        color: 'black',
        marginBottom: 5
    },
    text5: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        marginTop: 5
    },
    text6: {
        fontSize: 13,
        color: 'white',
        marginBottom: 5
    },
    collect_round: {
        height: 45,
        width: 45,
        backgroundColor: '#F6F1F1',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    Delivery_round: {
        height: 45,
        width: 45,
        backgroundColor: colors.buttons,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tab: {
        paddingTop: 0,
        backgroundColor: colors.buttons,
        justifyContent: "space-between",
        alignItems: "center"
    },
    tabStyle: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45,
    },
    tabContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    tabLable: {
        fontWeight: 'bold',
        color: colors.cardbackground
    },
    cartView: {
        backgroundColor: colors.buttons,
        height: 50,
        alignContent: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    view12: {

        justifyContent: "space-between",
        alignItems: "center"
    },

    cart_text: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: 'white'
    },

    view13: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        marginRight: 10,
        borderColor: 'white',
        borderRadius: 10,
        paddingBottom: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text13: {
        paddingHorizontal: 3,
        fontWeight: "bold",
        fontSize: 18,
        color: colors.cardbackground,
    },
})