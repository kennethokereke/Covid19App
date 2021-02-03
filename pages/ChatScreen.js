import React, { useLayoutEffect } from 'react'
import { View, Text , SafeAreaView, ScrollView} from 'react-native'
import Customlistitem from '../Component/CustomListItem'

const ChatScreen = ({navigation}) => {
    

    return (
        <SafeAreaView>
           <ScrollView>
               <Customlistitem  />
           </ScrollView>
        </SafeAreaView>
    )
}

export default ChatScreen
