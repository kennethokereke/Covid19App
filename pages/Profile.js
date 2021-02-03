import React from 'react'
import { View, StyleSheet, SafeAreaView} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = ({navigation}) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                    source={{
                        uri: 'http://api.adoable.io/avatars/80/abott@adorable.png',
                    }}
                    size={60}
                    
                    />
                
                <View style={{marginLeft: 20}}>
                    <Title style={styles.title}>Joe doe</Title>
                    <Caption style={styles.caption}>amazing user</Caption>
                </View>
                </View>

            </View>

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
    }

})
