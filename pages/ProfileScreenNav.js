import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreenEdit from './ProfileScreenEdit';

const ProfileStacks = createStackNavigator();



const ProfileStacksScreen = ({navigation}) => (
  
    <ProfileStacks.Navigator>
    <ProfileStacks.Screen name="Edit" 
    component={ProfileScreenEdit} 
    options={{
      
    }}/>
  
   
    </ProfileStacks.Navigator>




   
)

export default ProfileStacksScreen
