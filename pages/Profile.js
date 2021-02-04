import React, { useRef } from 'react'
import { View, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

const Profile = ({navigation}) => {
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

    const ref = useRef()
    const animationValue = new Animated.Value(1)

    
    return (
        <SafeAreaView style={styles.container}>
             <BottomSheet
            ref={ref} 
            snapPoints={[450, 0, 0]} 
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1} 
            callbackNode={animationValue} 
            enabledGestureInteraction={true}/>
            <Animated.View style={[styles.userInfoSection,{margin: 20, opacity: Animated.add(0.2, Animated.multiply(animationValue, 1.0))}]}>
            <TouchableOpacity onPress={() => ref.current.snapTo(0)}
            >
                <View style={{flexDirection: 'row', marginTop: 15}}>

                    <ImageBackground
                    source={{
                        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 35}}
                    
                    >
                         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                            <Icon name="camera" size={30} color="white" style={{
                                opacity: 0.7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 10
                            }}/>
                        </View>


                    </ImageBackground>
                
                <View style={{marginLeft: 20}}>
                    <Title style={styles.title}>Joe doe</Title>
                    <Caption style={styles.caption}>amazing user</Caption>
                </View>
                </View>
                </TouchableOpacity>

            </Animated.View>

            <View style={styles.userInfoSection}>
                

                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20}/>
                    <Text style={{color: "#777777", marginLeft: 20}}>kennethokereke1@gmail.com</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {borderRightColor: '#dddddd', borderRightWidth: 1}]}>
                    <Title>1,000</Title>
                    <Caption>Cases in US</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>32.2M</Title>
                    <Caption>Total Vaccines</Caption>
                </View>

            </View>

            <View style={styles.menuWrapper}>
            {/* <TouchableRipple onPress={() => navigation.navigate('Edit')}>
                        <View style={styles.menuItem}>
                           
                            <Icon name="account-edit" color="#02d1c0" size={25} />
                            <Text style={styles.menuItemText}>Edit Profile</Text>

                        </View>
                    </TouchableRipple> */}
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                           
                            <Icon name="logout" color="#02d1c0" size={25} />
                            <Text style={styles.menuItemText}>Logout</Text>

                        </View>
                    </TouchableRipple>
                   
            </View>
           
        </SafeAreaView>
    )
}



export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    caption: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '500',

    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,

    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100

    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        height: 450
       

    },
    panelTitle: {
        fontSize: 27,
        height: 35
    },

    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    panelButton: {
        padding: 13,
        borderRadius: 18,
        backgroundColor: '#2ebfb3',
        alignItems: 'center',
        marginVertical: 7

    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20

    },
    panelHeader: {
        alignItems: 'center'
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10
    },



})
