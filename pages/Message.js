import React, { useRef } from 'react'
import { View, Text , TouchableOpacity, Touchable, StyleSheet, SafeAreaView} from 'react-native'
import { createStackNavigator} from '@react-navigation/stack';
import Chat from '../Component/Chat';
import BottomSheet from 'reanimated-bottom-sheet';
import ChatScreen from './ChatScreen';
import Animated from 'react-native-reanimated';
import { Avatar } from 'react-native-elements';
import { auth } from '../Config/Firebase';
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import EditChat from './EditChat';

const messageStack = createStackNavigator()
const messageNav = createStackNavigator()


    

    




const Message = ({navigate}) => {
  

   
 return (
        <messageStack.Navigator screenOptions={{
            title: 'Create Group',
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            headerBackTitle: 'Back',
          
        }}>
            <messageStack.Screen name="Messages" component={EditChat} options={{
            
            
            }} />
    
        </messageStack.Navigator>
 )
  
        }


export default Message
const styles = StyleSheet.create({
    constainer: {
        flex: 1
    }
})

