import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import  MainTabScreen  from './MainTabScreen';
import ProfileScreenEdit from './ProfileScreenEdit';
import Message from './Message';




const Rootstack = createStackNavigator();



const RootStackScreen = ({navigation}) => (
  
        <Rootstack.Navigator headerMode="none">
        <Rootstack.Screen name="SplashScreen" component={SplashScreen}/>
        <Rootstack.Screen name="LoginScreen" component={LoginScreen}/>
        <Rootstack.Screen name="SignUpScreen" component={SignupScreen}/>
        <Rootstack.Screen  name="MainTab" component={MainTabScreen}/>
        <Rootstack.Screen  name="Edit" component={ProfileScreenEdit} />
        <Rootstack.Screen  name="EditMessage" component={Message} />
        
        
       
        </Rootstack.Navigator>




       
    )

 



export default RootStackScreen



