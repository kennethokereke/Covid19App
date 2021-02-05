



import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import ProfileScreen from './Profile'
import MessageScreen from './Message'
import {  createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React, { useLayoutEffect, useRef } from 'react'
import { MaterialCommunityIcons, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';


import Entypo from '@expo/vector-icons/Entypo'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import { Avatar, colors } from 'react-native-elements'
import { auth } from '../Config/Firebase'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'


import Profile from './Profile'






const dashboardStack = createStackNavigator()
const messageStack = createStackNavigator()
const profileStack = createStackNavigator()


 




const Tab = createMaterialBottomTabNavigator();





export default function MainTabScreen({navigation}) {
  





  
  

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
        <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
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
        },
        headerBackTitle: "back"
    }}>
        <dashboardStack.Screen name="Home" component={HomeScreen} options={{
        title:'Dashboard'
       
        }} />
</dashboardStack.Navigator>
);



const MessageStackScreen = ({navigation}) => (
  
<messageStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        },
        headerBackTitle: 'Back',
        headerLeft: () => (
           <View style={{marginLeft: 20}}>
          <Avatar 
           rounded 
           source={{ uri: auth?.currentUser?.photoURL || "http://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png" }}/>
           </View>),
           headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 80,
              marginRight: 20,
              justifyContent: 'space-between',
          
            }}>
         
            
            <View/>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
              navigation.navigate('EditMessage')
            }} >
              <Feather name="edit" size={24} color="white"/>
            </TouchableOpacity>
           
            </View>
          )
        
       
       
    }}>
        <messageStack.Screen name="Messages" component={ChatScreen} options={{
        
        
        }} />
</messageStack.Navigator>
);



const ProfileStackScreen = ({navigation}) => (
  
 
  <profileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          },
          headerBackTitle: 'Back', 
          

          
          
          
          
      }}>
        <profileStack.Screen name="Profile" component={Profile} options={{
        
        
      }} />

     
  </profileStack.Navigator>


  
);





  