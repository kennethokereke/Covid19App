import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions,
    Image,
    TextInput,
    TouchableOpacity, Platform,
    Keyboard,
    TouchableWithoutFeedback,

StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { auth } from '../Config/Firebase';


const SignupScreen = ({navigation}) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        imageUrl: '',
        check_textInputChange: false,
        check_fullNameChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
        
    })


    useEffect(() => {
        // if user is here then push them to the homepage
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace("MainTab")
            }
        })
        //make sure it doesnt rerender or remounts we unsubscrube for performance issue
        //add a clean up function
        return unSubscribe

    }, [])
    

   const handlePasswordChange = (val) => {
       setData({
           ...data,
           password: val
       })

   }

   

   const updateSecureTextEntry = (val) => {
       setData({
           ...data,
           password: val,
           secureTextEntry: !data.secureTextEntry
       })
   }

  

   const register = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
          authUser.user.updateProfile({
              displayName: data.name,
              //add avatar
              photoURL: imageUrl ||  "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",

          })

      })
      .catch((error) => alert(error.message))
}

 const checktextInputChange = (val) => {
        if(val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true

            }) 
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false 

        })
    }
}

const checkFullnameInputChange = (val) => {
    if(val.length !== 0 ) {
        setData({
            ...data,
            name: val,
            check_fullNameChange: true

        }) 
    } else {
        setData({
            ...data,
            name: val,
            check_fullNameChange: false 

    })
}
}
    return (
        

        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss()
            console.log('dismissed keybaord')
        }}>

        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/>
           <View style={styles.header}>
               <Text style={styles.text_header}>Register Now</Text>

           </View>

           {/* Email */}
           <Animatable.View style={styles.footer}
           animation="fadeInUpBig">
                <Text style={styles.text_footer}>Full Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput
                    placeholder="Full Name"
                    style={styles.textInput}
                    autoCapitalize= "none"
                    onChangeText={(val) => checkFullnameInputChange(val)}
                    

                    />
                    {data.check_fullNameChange ? 
                    <Animatable.View
                    animation="bounceIn"
                    >
                         <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                    />
                        
                    </Animatable.View>
                   
                    : null}

                </View>
                <Text style={styles.text_footer, {marginTop: 35}}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name="user-o"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize= "none"
                    onChangeText={(val) => checktextInputChange(val)}
                    

                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                    animation="bounceIn"
                    >
                         <Feather
                    name="check-circle"
                    color="green"
                    size={20}
                    />
                        
                    </Animatable.View>
                   
                    : null}

                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                    name="lock"
                    color="#05375a"
                    size={20}
                    />
                    <TextInput
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    onChangeText={(val) => handlePasswordChange(val)}
                    
                    />

                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                    <Feather
                    name="eye-off"
                    color="gray"
                    size={20}
                    />
                    :
                     <Feather
                     name="eye"
                    color="gray"
                    size={20}
                     
                     />   }

                    </TouchableOpacity>

                   

                </View>
               

                {/* image url */}

                



                {/* button  */}
                <View style={styles.button}>
                <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                    <Text style={[styles.textSign , {color: '#fff', }]}>
                        Sign Up
                    </Text>
                </LinearGradient>
                <TouchableOpacity
                onPress={register}

                style={[styles.signIn, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15
                }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>

                </TouchableOpacity>
                </View>
           </Animatable.View>
        </View>
        </TouchableWithoutFeedback>

       
    )
}



export default SignupScreen

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
        paddingHorizontal: 30,
        paddingTop:30
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
        marginTop: 20,
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
