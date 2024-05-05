    import React from "react";
    import {View, StyleSheet, Text, FlatList, Touchable, TouchableOpacity, Alert} from 'react-native'
    import Menu_card from "../Components/Menu_Card";
    import {menuDetailedData} from '../Global/Data'

    export function Route1({navigation, route}){

        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={()=>{Alert.alert('ok hi ')}}>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen',{index})}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route2(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route3(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route4(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route5(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route6(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route7(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    export function Route8(){
        return(
            <View style = {{flex: 1}}>
                <FlatList
                    style = {{backgroundColor :'white'}}
                    data= {menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <Menu_card
                                productName={item.meal}
                                price={item.price}
                                productDetails={item.details}
                                image={item.image}
                                onPressMenuCard ={()=>{navigation.navigate('PreferenceScreen')}}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

    const styles = StyleSheet.create({
        contianer: {
            flex: 1 ,
            backgroundColor: '#673ab7'
        
        }
    })