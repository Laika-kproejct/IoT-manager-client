import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screen/HomeScreen';
import DrawerScreen from '../screen/DrawerScreen';

const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default Main;