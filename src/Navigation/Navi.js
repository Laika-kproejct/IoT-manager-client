import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import LoginScreen from '../Screen/LoginScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import SettingScreen from '../Screen/SettingScreen';
import SecondScreen from '../Screen/SecondScreen';
import HomeScreen from '../Screen/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';

const LoadingWrapper = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Stack = createStackNavigator();

const Navi = () => {
  const [isExistUser, setIsExistUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    //로딩 중일 땐
    return (
      <LoadingWrapper>
        <StyledText color="white" size="25px">
          <LoadingSVG width="50px" height="50px" color="white" />
        </StyledText>
      </LoadingWrapper>
    );
  }
  return (
    <>
      <Stack.Navigator headerMode="none">
        {!isExistUser && (
          <>
            <Stack.Screen name="LogIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
        
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
        </>
        );
      };

export default Navi;