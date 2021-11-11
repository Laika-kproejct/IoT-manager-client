import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import InitNavi from './src/Navigations/InitNavi';
import { SafeAreaView } from 'react-native-safe-area-context';

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
