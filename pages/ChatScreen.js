import React, { useLayoutEffect, useRef } from 'react'
import { View, Text , SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import Animated from 'react-native-reanimated'
import BottomSheetBehavior from 'reanimated-bottom-sheet'
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
const styles = StyleSheet.create({

})
