import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import { MainTabScreen } from './MainTabScreen';


const Rootstack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  
        <Rootstack.Navigator headerMode='none'>
        <Rootstack.Screen name="SplashScreen" component={SplashScreen}/>
        <Rootstack.Screen name="LoginScreen" component={LoginScreen}/>
        <Rootstack.Screen name="SignUpScreen" component={SignupScreen}/>
        <Rootstack.Screen name="MainTab" component={MainTabScreen}/>

       


        </Rootstack.Navigator>
       
    )




export default RootStackScreen


