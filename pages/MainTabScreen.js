



import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import {  createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Entypo from '@expo/vector-icons/Entypo'






const Tab = createMaterialBottomTabNavigator();

export function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Messages"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

