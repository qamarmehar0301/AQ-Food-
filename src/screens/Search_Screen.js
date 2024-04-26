import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native';
import { Icon } from "react-native-elements";
import Search_Component from "../Components/Seacrh_Component";
import { filterData } from "../Global/Data";
import { colors } from "../Global/styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Search_Screen({navigation}) {
    return (
        <View style={styles.container}>
            <Search_Component />
            
            <FlatList
                style={styles.flatList}
                data={filterData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={()=> {navigation.navigate('Search_Result', { item: item.name })}}>
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.image_bg}
                                source={item.image}
                            >
                                <View style={styles.textView}>
                                    <Text style={{ color: 'white' }}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    flatList: {
        flex: 1,
        marginTop: '-160%',
    },
    listHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.grey5,
        paddingLeft: '3%'
    },
    imageView: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.4475,
    },
    image_bg: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textView: {
        backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
