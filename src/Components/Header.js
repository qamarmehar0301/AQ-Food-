import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { colors, parameters } from "../Global/styles";
import { Icon } from "react-native-elements";

export default function Header({ title, navigation }) {

    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Icon
                    type="material-community"
                    name = 'arrow-left'
                    size={28}
                    color={colors.cardbackgroundcolor}
                    onPress={() => navigation.goBack()}
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
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: '5%',
    },
});
