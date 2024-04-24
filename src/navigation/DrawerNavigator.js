import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import { colors } from "../Global/styles"
import { StyleSheet, View , Text} from "react-native";
import Buottom_tab_navigator from "./bottomTabNavigation";

//const Drawer = createDrawerNavigator();

export default function Drawer_Navigation() {
    return (
        // <Drawer.Navigator>
        //     <Drawer.Screen
        //         name="Buottom_tab_navigator"
        //         component={Buottom_tab_navigator}
        //         options={
        //             {
        //                 title: 'Client ',
        //                 drawerIcon: ({ focussed, size }) => (
        //                     <Icon
        //                         name="home"
        //                         type="material-community"
        //                         color={focussed ? '#7cc' : colors.grey3}
        //                         size={size}
        //                     />
        //                 )
        //             }
        //         }
        //     />
        // </Drawer.Navigator>
        <View>
            <Text style ={{color: 'black'}}>
                This is the Drwer Navigator 
            </Text>
        </View>
    )
}