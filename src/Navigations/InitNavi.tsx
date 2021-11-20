import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../Screen/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import MainBottomTab from './MainBottomTab';
import ListAddScreen from '../Screen/ListAddScreen';

const Stack = createStackNavigator();

const InitNavi = () => {
    return(
    
    <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
    name="Main"
    component={MainScreen}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="Login"
    component={LoginScreen}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="SignUp"
    component={SignUpScreen}
    options={{headerShown:false}}/>
    
    <Stack.Screen
    name="Bottom"
    component={MainBottomTab}
    options={{headerShown:false}}/>
    

    <Stack.Screen
    name="Add"
    component={ListAddScreen}
    options={{headerShown:false}}/>
    </Stack.Navigator>
    
    );
};
export default InitNavi;