import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions, Modal } from 'react-native';
import { Icon } from "react-native-elements";
import { colors } from '../Global/styles';
import { menu } from "../Global/Data";
import { TabBar, TabView } from "react-native-tab-view";
import { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from "./menu_Tabs";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function Rest_menu_Screen({navigation, route}) {

    const [index, setIndex] = useState(0)
    const [routes] = useState(menu)

    renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.cardbackgroundcolor }}
            scrollEnabled={true}
            tabStyle={styles.tabStyle}
            style={styles.tab}
            labelStyle={styles.tabLable}
        />
    )
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 1:
                return <Route1 navigation={navigation} />
            case 2:
                return <Route2 navigation={navigation} />
            case 3:
                return <Route3 navigation={navigation} />
            case 4:
                return <Route4 navigation={navigation} />
            case 5:
                return <Route5 navigation={navigation} />
            case 6:
                return <Route6 navigation={navigation} />
            case 7:
                return <Route7 navigation={navigation} />
            case 8:
                return <Route8 navigation={navigation} />
            default:
                return null
        }
    }

    return (
        <View style = {{flex: 1}}>

            <View style={styles.menu_Header}>
                <Icon
                    name="arrow-left"
                    type="material-community"
                    size={30}
                    color='white'
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}> Menu Card </Text>
            </View>
          
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={SCREEN_WIDTH}
                renderTabBar={renderTabBar}
                tabBarPosition="top"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    menu_Header: {
        backgroundColor: colors.buttons,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15
    },
    tab: {
        backgroundColor: colors.buttons,
        justifyContent: "space-evenly",
    },
    tabStyle: {
        maxHeight: 45,
    },
    tabLable: {
        fontWeight: 'bold',
        color: colors.cardbackground,
        fontSize: 16
    },
})