import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { Image } from "react-native-animatable";
import { parameters, colors } from '../Global/styles';
import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

export default function My_Account({ navigation }) {

    const handleLogout = () => {
        Alert.alert('Logout', 'Do you want to Logout? ', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: handleLogoutPress },
        ]);
    };

    const handleLogoutPress = async () => {
        await auth().signOut()
            .then(() => {
                // navigation.navigate('SignIn');
                console.log('Logout Success')
            })
            .catch((error) => Alert.alert("Error while logout", error));
    };

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>

                <View style={styles.icon_container}>
                    <View>
                        <Icon
                            type="material-community"
                            name='arrow-left'
                            size={30}
                            color={colors.grey5}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <View>
                        <Icon
                            type="material"
                            name="settings"
                            size={30}
                            color={colors.grey5}
                        />
                    </View>
                </View>

                <View style={styles.profile_Container}>
                    <View style={styles.profile_Img}>
                        <Image
                            source={{ uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165844201/original/c0aee438ce5e30b854ad37a9d90157f53cf3bb52/create-the-profile-cartoon-pictures.png" }}
                            style={styles.image}
                        />
                    </View>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>
                        My Name
                    </Text>
                    <TextInput
                        placeholder='My Name'
                        placeholderTextColor='#86939e'
                        style={styles.input}
                        editable={false}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>
                        Mobile Number
                    </Text>
                    <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor='#86939e'
                        style={styles.input}
                        editable={false}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>
                        E-mail
                    </Text>
                    <TextInput
                        placeholder='E-mail'
                        placeholderTextColor='#86939e'
                        style={styles.input}
                        editable={false}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>
                        Address
                    </Text>
                    <TextInput
                        placeholder='Address'
                        placeholderTextColor='#86939e'
                        style={styles.input}
                        editable={false}
                    />
                </View>

                <View style={{ marginHorizontal: '5%', marginVertical: 20 }}>
                    <Button
                        title='Log Out'
                        titleStyle={parameters.buttonTitle}
                        buttonStyle={parameters.styledButton}
                        onPress={handleLogout}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingTop: '5%'
    },
    profile_Container: {
        marginVertical: '5%',
        alignItems: 'center',
    },
    profile_Img: {
        height: 155,
        width: 155,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'contain',
        height: '90%',
        width: '90%',
        borderRadius: 100
    },
    textInputContainer: {
        flex: 1,
        paddingRight: '5%',
        paddingLeft: '3%',
    },
    inputText: {
        marginLeft: '2%',
        color: '#000',
        fontFamily: 'PT Sans',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
    },
    input: {
        width: '100%',
        height: 50,
        flexShrink: 0,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        color: '#708090',
        marginVertical: 10,
        paddingLeft: 10
    },
});
