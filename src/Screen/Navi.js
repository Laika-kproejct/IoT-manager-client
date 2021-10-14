import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import {createStackNavigator,StackHeaderLeftButtonProps,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
/*import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerNavigationProp,
    } from '@react-navigation/drawer';*/

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import SomethingScreen from './SomethingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();
//const MaterialTab = createMaterialBottomTabNavigator();
//const MaterailTopTab = createMaterialTopTabNavigator();

const Navi = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name ="HomeScreen"
            component = {HomeScreen}
            />
            <Tab.Screen
            name ="SettingScreen"
            component = {SettingScreen}
            />
            <Tab.Screen
            name ="SomethingScreen"
            component = {SomethingScreen}
            />
    </Tab.Navigator>
    );
}
export default Navigator;



/*
const HomeStack = createStackNavigator(
    {
        HomeScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Home',
        }),
    }
);
const SettingStack = createStackNavigator(
    {
        SettingScreen,
        SomethingScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
        }),
        initialRouteName: 'SettingScreen',
    }
);
const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Setting: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Home'){
                    icon = "🌈";
                } else if(routeName === 'Setting'){
                    icon = "🌙"
                } 

                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);
const AppStack = createStackNavigator(
    {
        LoginScreen: LoginScreen,
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            }),
        },
    }
);

export default createAppContainer(AppStack);
*/
