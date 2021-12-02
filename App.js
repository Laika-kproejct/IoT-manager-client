import 'react-native-gesture-handler';
import React, { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitNavi from './src/Navigations/InitNavi';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';


const App = () => {
  
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <InitNavi/>
      </NavigationContainer>
    </SafeAreaView>
    
  );
}

export default App;