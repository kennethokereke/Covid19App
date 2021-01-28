import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignupScreen'
import SignupScreen from './SignupScreen'

const Rootstack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  
        <Rootstack.Navigator headerMode='none'>
        <Rootstack.Screen name="SplashScreen" component={SplashScreen}/>
        <Rootstack.Screen name="SignInScreen" component={SignInScreen}/>
        <Rootstack.Screen name="SignUpScreen" component={SignupScreen}/>

        </Rootstack.Navigator>
       
    )




export default RootStackScreen


