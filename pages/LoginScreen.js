import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello world</Text>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#009387'

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',

    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})
