import React from "react";
import { createNativeStackNavigator, TransitionPreset } from '@react-navigation/native-stack'
import Search_Screen from "../screens/Search_Screen";
import Search_Result from "../screens/Search_Result";
import Rest_Profile_Screen from "../screens/Rest_Profile_Screen"

const Search_R = createNativeStackNavigator();

export default function Search_Result_Navigator() {
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
            <Search_R.Screen
                name="Rest_Profile_Screen"
                component={Rest_Profile_Screen}
                options={
                    {
                        headerShown: false
                    }
                }
            />

        </Search_R.Navigator>
    )
}