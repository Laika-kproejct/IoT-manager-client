import 'react-native-gesture-handler';
import styled from 'styled-components/native';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navi from './src/Navigation/Navi';
//rimport {createStore, applyMiddleware} from 'redux';
//import {Provider} from 'react-redux';
//import ReduxThunk from 'redux-thunk';
//import { NavigationContainer } from '@react-navigation/native';
//import Navi from './src/Screen/Navi';
import HomeScreen from './src/Screen/HomeScreen';
import LoginScreen from './src/Screen/LoginScreen';
import EmailBox from './src/Components/EmailBox';
import LoginBtn from './src/Components/LoginBtn';


const App = () => {
  return (
    
    <NavigationContainer>
              <Navi/>
        </NavigationContainer>
    //<NavigationContainer>
     // <Navi/>
    //</NavigationContainer>

  );
}

export default App;
/*
const App = () => {
  return (
    <AppStack />
  );
}
export default App;
*/