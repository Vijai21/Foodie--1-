import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './components/AppTabNavigator';
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './components/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer> 
  );
}
