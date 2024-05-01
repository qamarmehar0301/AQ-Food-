import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Search_Screen from "../screens/Search_Screen";
import Search_Result from "../screens/Search_Result";
import Rest_Profile_Screen from "../screens/Rest_Profile_Screen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Rest_menu_Screen from "../screens/Rest_menu_Screen";

const Search_R = createNativeStackNavigator();

export default function Search_Result_Navigator({ navigation, route }) {


    //This function is hiding the bottom tab on specific screens
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === "Rest_Profile_Screen" || routeName === "Search_Result" || routeName === "Rest_menu_Screen") {
            navigation.setOptions({
                tabBarStyle: { display: 'none' }
            });
        } else {
            navigation.setOptions({
                tabBarStyle: {}
            });
        }
    }, [navigation, route]);

    return (
        <Search_R.Navigator>
            <Search_R.Screen
                name="Search-Screen"
                component={Search_Screen}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Search_R.Screen
                name="Search_Result"
                component={Search_Result}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            {/* <Search_R.Screen
                name="Rest_Profile_Screen"
                component={Rest_Profile_Screen}
                options={
                    {
                        headerShown: false
                    }
                }
            /> */}
            <Search_R.Screen
                name="Rest_menu_Screen"
                component={Rest_menu_Screen}
                options={
                    {
                        headerShown: false
                    }
                }
            />

        </Search_R.Navigator>
    )
}