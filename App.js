import 'react-native-gesture-handler';
import React from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import styled from 'styled-components/native';
import StyledText from './src/Components/StyledText';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen';
import SecondScreen from './src/Screen/SecondScreen';
import HomeScreen from './src/Screen/HomeScreen';
import MainScreen from './src/Screen/MainScreen';
import SettingScreen from './src/Screen/SettingScreen';
import SomethingScreen from './src/Screen/SomethingScreen';
import MainBottomTab from './src/Navigations/MainBottomTab';
import InitNavi from './src/Navigations/InitNavi';

const Wrapper = styled.View`
  width: 100%
`;

const App = () => {
  
  return (
    <Wrapper>
    <NavigationContainer>
      <InitNavi/>
    </NavigationContainer>
    </Wrapper>
  );
}

export default App;
