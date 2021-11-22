import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import styled from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screen/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../Screen/LoginScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import MainBottomTab from './MainBottomTab';
import ListAddScreen from '../Screen/ListAddScreen';
import SensorScreen from '../Screen/SensorScreen';
import SensoraddList from '../Screen/SesoraddList';
import SensorToken from '../Screen/SensorToken';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const InitNavi = () => {
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
    
    <Stack.Screen
    name="Sensor"
    component={SensorScreen}
    options={{headerShown:false}}/>

    <Stack.Screen
    name="SensorAdd"
    component={SensoraddList}
    options={{headerShown:false}}/>
    
    <Stack.Screen
    name="SensorToken"
    component={SensorToken}
    options={{headerShown:false}}/>
    </Stack.Navigator>
    );
};
export default InitNavi;