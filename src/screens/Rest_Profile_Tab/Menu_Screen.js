import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native';
import { Icon, colors } from "react-native-elements";
import {
    ArifChatkhara_menu, NisarCharsiTikka_menu, ArifChatkhara_special, NisarCharsiTikka_special,
    smokeNsquada_menu, smokeNsquada_special, SavourFoods_menu, SavourFoods_special
} from "../../Global/Data";

export default function Menu_Screen({ navaigation, resturant }) {

    const getMenuData = () => {
        switch (resturant) {
            case "Arif Chatkhara":
            case "Arif Chatkhara ":
            case " Arif Chatkhara":
            case " Arif Chatkhara ":
                return ArifChatkhara_menu;
            case "Nisar Charsi Tikka":
            case "Nisar Charsi Tikka ":
            case " Nisar Charsi Tikka":
            case " Nisar Charsi Tikka ":
                return NisarCharsiTikka_menu;
            case "Smoke & Squads":
            case "Smoke & Squads ":
            case " Smoke & Squads":
            case " Smoke & Squads ":
                return smokeNsquada_menu;
            case "Savour Foods":
            case "Savour Foods ":
            case " Savour Foods":
            case " Savour Foods ":
                return SavourFoods_menu;

            default:
                console.log('Resturnat name ni mila')
                return [];
        }
    };

    const getSpecialMenuData = () => {
        switch (resturant) {
            case "Arif Chatkhara":
            case "Arif Chatkhara ":
            case " Arif Chatkhara":
            case " Arif Chatkhara ":
                return ArifChatkhara_special;
            case "Nisar Charsi Tikka":
            case "Nisar Charsi Tikka ":
            case " Nisar Charsi Tikka":
            case " Nisar Charsi Tikka ":
                return NisarCharsiTikka_special;
            case "Smoke & Squads":
            case "Smoke & Squads ":
            case " Smoke & Squads":
            case " Smoke & Squads ":
                return smokeNsquada_special;
            case "Savour Foods":
            case "Savour Foods ":
            case " Savour Foods":
            case " Savour Foods ":
                return SavourFoods_special;
            default:
                console.log('Resturnat name ni mila')
                return [];
        }
    };

    const handlePress = () => {

    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                {
                    getSpecialMenuData().map((item) =>
                        <View key={item.key} style={{ paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.view2}>
                                    <Icon
                                        name="star"
                                        type="material-community"
                                        color="#FFDE00"
                                        size={22}
                                    />
                                    <Text style={styles.text1}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
            <View>
                {
                    getMenuData().map((item) =>
                        <View key={item.key} style={{ paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={handlePress}>
                                <View style={styles.view2}>

                                    <Text style={{color: 'black', fontSize: 17}}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    view2: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5
    },
    text1: {
        color: 'black',
        fontSize: 18,
        textTransform: 'uppercase'
    }
})