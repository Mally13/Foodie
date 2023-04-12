import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import MyOrders from "../screens/MyOrders";
import Search from "../screens/Search";

import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{headerStyle:{ backgroundColor: '#00B4A6' }, headerShown: true, tabBarShowLabel: false  }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false,
                tabBarIcon: () => {
                    return (
                    <View
                        style={{
                        paddingTop: 12,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Image
                        source={require("../assets/icons/home.png")}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: "D86644",
                        }}
                        />
                    </View>
                    );
                },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                headerShown: false,
                tabBarIcon: () => {
                    return (
                    <View
                        style={{
                        paddingTop: 12,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Image
                        source={require("../assets/icons/search.png")}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: "#CBD5E1",
                        }}
                        />
                    </View>
                    );
                },
                }}
            />
            <Tab.Screen
                name="My Orders"
                component={MyOrders}
                options={{
                headerShown: false,
                tabBarIcon: () => {
                    return (
                    <View
                        style={{
                        paddingTop: 12,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Image
                        source={require("../assets/icons/heart.png")}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: "#CBD5E1",
                        }}
                        />
                    </View>
                    );
                },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                headerShown: false,
                tabBarIcon: () => {
                    return (
                    <View
                        style={{
                        paddingTop: 12,
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                    >
                        <Image
                        source={require("../assets/icons/user.png")}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: "#CBD5E1",
                        }}
                        />
                    </View>
                    );
                },
                }}
            />                
        </Tab.Navigator>
    );
};
export default BottomTabs;