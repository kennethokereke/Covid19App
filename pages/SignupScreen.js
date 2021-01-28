import React from 'react'
import { View,
         Text,
        Button,
        StyleSheet } from 'react-native'

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignupScreen</Text>
            <Button
            title="Click here"
            onPress={() => alert('Button Clicked')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignupScreen
