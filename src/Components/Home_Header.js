import React from "react";
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { colors, parameters } from '../Global/styles';
import { Icon, withBadge } from "react-native-elements";

export default function Home_Header({navigation}) {

    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.header}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '3.5%' }}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.cardbackgroundcolor}
                    size={32}
                />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.header_Text}> AQfoods </Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: '3.5%' }}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    color={colors.cardbackgroundcolor}
                    size={32}
                    onPress={() => { Alert.alert('Pressed') }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: 'space-between'
    },
    header_Text: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: "Cinzel Black"
    }
})