import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Animated, Alert } from 'react-native';
import { Icon } from "react-native-elements";
import { resturantsData, filterData } from "../Global/Data";
import { colors } from '../Global/styles';

export default function Resturant_Header({ navigation, id }) {

    const index2 = 10
    const currentValue = new Animated.Value(1)
    const [Liked, setLiked] = useState(false)
    const [Counter, setCounter] = useState(-2)
    const [Visible, setVisible] = useState(false)

    const likeHandler = () => {
        if (Liked == false)
            setVisible(true)

        setLiked(!Liked)
        setCounter(index2)
    }

    useEffect(() => {
        if (Liked == true) {
            Animated.spring(currentValue, {
                toValue: 3,
                friction: 2,
                useNativeDriver: true
            }).start(() => {
                Animated.spring(currentValue, {
                    toValue: 1,
                    friction: 2,
                    useNativeDriver: true
                }).start(() => {
                    setVisible(false)
                })
            })
        }
    }, [Liked])

    return (
        <View style={{ height: 170 }}>

            <ImageBackground
                style={{ height: 170}}
                source={{ uri: resturantsData[id].images }}
            >
                <View style={styles.view1}>
                    <View style={styles.back_arrow}>
                        <Icon
                            name="arrow-left"
                            type="material-community"
                            color='black'
                            size={25}
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <View style={styles.heart}>
                        <Icon
                            name={Liked && (index2 == Counter) ? "favorite" : "favorite-border"}
                            type="material"
                            color='red'
                            size={30}
                            onPress={likeHandler}
                        />
                    </View>
                </View>

                <View style={styles.view4}>
                    {
                        Visible && (index2 == Counter) &&
                        <Animated.View style ={{transform: [{scale: currentValue}]}}>
                            <Icon
                                name="favorite"
                                type="material"
                                color='red'
                                size={40}
                            />
                        </Animated.View>
                    }
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginHorizontal: 5
    },

    back_arrow: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: colors.cardbackgroundcolor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    heart: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },

    view4: {
        alignItems: "center",
        justifyContent: "center"
    }
})