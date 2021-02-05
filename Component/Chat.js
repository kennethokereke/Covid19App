import { Feather } from '@expo/vector-icons'
import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'


const Chat = () => {
    const ref = useRef()
    const animationValue = new Animated.Value(1)
    const renderInner = () => (
        <View style={styles.panel}>
             <View style={{alignItems: 'center'}}>
                 <Text style={styles.panelTitle}>Upload Photo</Text>
                 <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
             </View>
             <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
             </TouchableOpacity>
             
             <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose from Library</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.panelButton} onPress={() => ref.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
             </TouchableOpacity>
        </View>
       
      )
      
      const  renderHeader = () => (
          <View style={styles.header}>
          <View style={styles.panelHeader}>
              <View style={styles.panelHandle}>
      
      
              </View>
      
          </View>
          </View>
      )
    return (
            <View>
             <BottomSheet
          ref={ref} 
          snapPoints={[450, 0, 0]} 
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1} 
          callbackNode={animationValue} 
          enabledGestureInteraction={true}/>
          
       
          
          <TouchableOpacity activeOpacity={0.5} onPress={() => ref.current.snapTo(0)} >
            <Feather name="edit" size={24} color="white"/>
          </TouchableOpacity>
         
          </View>
          
    )
}

export default Chat
const styles = StyleSheet.create({
    panel: {

    }
})