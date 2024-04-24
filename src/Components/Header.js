import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { colors, parameters } from "../Global/styles";
import { Icon } from "react-native-elements";

export default function Header({ title, navigation }) {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={()=> {
                navigation.navigate('Welcom_screen')}}>
                <Icon
                    type="material-community"
                    name = 'arrow-left'
                    size={30}
                    color={colors.cardbackgroundcolor}
                />
            </TouchableOpacity>
            <Text style={styles.header_text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        height: parameters.headerHeight,
    },
    header_text: {
        color: colors.header_text,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: '5%',
    },
    image: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
    }
});
