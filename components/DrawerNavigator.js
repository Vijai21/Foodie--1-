import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './AppTabNavigator';
import Details from '../screens/Details';

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component = {TabNavigator} />
            <Drawer.Screen name = 'Profile' component = {Details} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;