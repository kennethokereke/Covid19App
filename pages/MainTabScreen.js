



import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import {  createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Entypo from '@expo/vector-icons/Entypo'
import { createStackNavigator } from '@react-navigation/stack';




const dashboardStack = createStackNavigator()
const messageStack = createStackNavigator()

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
        component={HomeStackScreen}
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
        component={MessageStackScreen}
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

const HomeStackScreen = () => (
<dashboardStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <dashboardStack.Screen name="Home" component={HomeScreen} options={{
        title:'Dashboard'
       
        }} />
</dashboardStack.Navigator>
);

const MessageStackScreen = () => (
<messageStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <messageStack.Screen name="Messages" component={ChatScreen} options={{
        
        }} />
</messageStack.Navigator>
);

