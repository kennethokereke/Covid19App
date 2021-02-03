import React from 'react'
import {
     View,
     Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    Platform} from 'react-native'

    import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
    import FontAwesome from 'react-native-vector-icons/FontAwesome'
    import Feather from 'react-native-vector-icons/Feather'

const ProfileScreenEdit = () => {
    return (
        <View style={styles.container}>
          <View style={{margin: 20}}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity
            onPress={() => {}}>
                <View style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ImageBackground
                    source={{
                        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    }}
                    style={{height: 100, width: 100}}
                    imageStyle={{borderRadius: 15}}
                    >
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                            <Icon name="camera" size={30} color="#fff" style={{
                                opacity: 0.7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 10
                            }}/>
                        </View>
                    </ImageBackground>

                </View>

            </TouchableOpacity>
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Kenneth Okereke</Text>
            </View>
          </View>
          <View style={styles.action}>
              <FontAwesome name="user-o" size={20}/>
              <TextInput
              placeholder="First name"
              autoCorrect={false}
              placeholderTextColor="#666666"
              style={styles.textInput}
              />
          </View>

          <View style={styles.action}>
              <Icon name="email-outline" size={20}/>
              <TextInput
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#666666"
              style={styles.textInput}
              />
          </View>
          <View style={styles.action}>
              <Icon name="lock" size={20}/>
              <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#666666"
              style={styles.textInput}
              />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginTop: 10

    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20

    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4

    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10
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
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7

    },
  
    action: {
       flexDirection: 'row',
       marginTop: 15,
       marginBottom: 20,
       borderBottomWidth: 1,
       borderBottomColor: '#a6a6a6',
       paddingBottom: 5,
       marginLeft: 20
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#ff0000',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    textInput: {
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 20,
        color: '#05375a'
    }
})

export default ProfileScreenEdit
