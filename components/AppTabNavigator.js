import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import CreateScreen from '../screens/CreateScreen';
import RecipeScreen from '../screens/RecipeScreen';

const Tab = createMaterialBottomTabNavigator()
const TabNavigator = ()=>{
    return(
        <Tab.Navigator labeled = {false} barStyle = {styles.bottomTabStyle}
        screenOptions = {({route})=>({
            tabBarIcon: ({focused, color})=>{
            let iconName;
            if(route.name === "RecipeScreen"){
                iconName = focused ? 'home': 'home-outline';
            }
            else if(route.name === "CreateScreen"){
                iconName= focused ? 'create': 'create-outline';
            }
            return(
                <Ionicons name = {iconName} size = {RFValue(25)} color = {color}
                style = {{width: RFValue(30), height: RFValue(30)}}  />
            )}
        })}
        activeColor = {'black'} inactiveColor = {'white'} >
            <Tab.Screen name = 'RecipeScreen' component = {RecipeScreen} />
            <Tab.Screen name = 'CreateScreen' component = {CreateScreen} />
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: 'teal',
        height: '8%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
        position: 'absolute',
    }
})

export default TabNavigator;