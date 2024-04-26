import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home_Screen from '../screens/Home_Screen';
import { colors } from '../Global/styles';
import My_Order from '../screens/My_Order';
import My_Account from '../screens/My_Account';
import Search_Result_Navigator from '../navigation/Search_navigator'

const BottomTab = createBottomTabNavigator();

export default function Buottom_tab_navigator() {
    return (
        <BottomTab.Navigator
            tabBarOptions={{ activeTintColor: colors.buttons }}
        >
            <BottomTab.Screen
                name="Home Screen"
                component={Home_Screen}
                options={
                    {
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="home"
                                type="material"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
            <BottomTab.Screen
                name="Search-Screen"
                component={Search_Result_Navigator}
                options={
                    {
                        tabBarLabel: 'Search ',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="search"
                                type="material"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
            <BottomTab.Screen
                name="My_Order"
                component={My_Order}
                options={
                    {
                        tabBarLabel: 'My Order ',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="view-list"
                                type="material"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
            <BottomTab.Screen
                name="My_Account"
                component={My_Account}
                options={
                    {
                        tabBarLabel: 'My Account ',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="person"
                                type="material"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }
            />
        </BottomTab.Navigator>
    )
}
