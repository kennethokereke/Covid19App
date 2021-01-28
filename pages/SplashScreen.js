import React from 'react'
import { View,
         Text,
        Button,
        StyleSheet, 
        Dimensions,
        Image,
        TouchableOpacity
        } from 'react-native'
import Svg, { Path} from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const SplashScreen = () => {

    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
          
              <Svg width="60%" height="60%" viewBox="0 0 741.898 367.885" >
                     <Path d="M713.7 92a29.2 29.2 0 00-29.3 29.3v62.6h-5.7V57.3A29.2 29.2 0 00649.4 28a28.7 28.7 0 00-28.2 28.8v127.1h-5.8V29.3A29.2 29.2 0 00586.1 0 28.7 28.7 0 00558 28.7V184h-5.8V58A29.2 29.2 0 00523 28.7a28.7 28.7 0 00-28.2 28.8V227L472 195.8a28.7 28.7 0 10-46.5 33.8l90.2 124a34.5 34.5 0 0028 14.3h142a34.5 34.5 0 0033.5-26.6l19-81a138 138 0 003.7-31.6v-108A28.7 28.7 0 00713.7 92zM28.2 92a29.2 29.2 0 0129.3 29.3v62.6h5.7V57.3A29.2 29.2 0 0192.5 28a28.7 28.7 0 0128.2 28.8v127.1h5.8V29.3A29.2 29.2 0 01155.8 0a28.7 28.7 0 0128.1 28.7V184h5.8V58A29.2 29.2 0 01219 28.7a28.7 28.7 0 0128.2 28.8V227l22.7-31.2a28.7 28.7 0 1146.5 33.8l-90.2 124a34.5 34.5 0 01-28 14.3h-142a34.5 34.5 0 01-33.5-26.6l-19-81A138 138 0 010 228.7v-108A28.7 28.7 0 0128.2 92z" fill="#fff" />
                     <Path d="M417.5 71.9a30.6 30.6 0 00-41.8 3l-4.4 4.5L367 75a30.6 30.6 0 00-41.8-3 32.1 32.1 0 00-2.2 46.5l43.3 44.7a7 7 0 0010.2 0l43.3-44.7a32.1 32.1 0 00-2.2-46.5z" fill="#fff" />
              </Svg>
            </View>

            <View style={styles.footer}>
                <Text style={styles.title}>Stay Connected with everyone!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>

               
                <TouchableOpacity onPress={() => alert('click')} >  
                <LinearGradient 
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn} >

                     <Text style={styles.textSign}> Get Started</Text>
                     <MaterialIcons
                     name="navigate-next"
                     color="#fff"
                     size={20}
                     />

                </LinearGradient>
                </TouchableOpacity>
                </View>


            </View>
            
        </View>
    )
}



export default SplashScreen
const {height} = Dimensions.get('screen')
const heightLogo = height * 0.28
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#009387',
        },
        header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        footer: {
            flex: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30
        },
        logoWidth: {
            width: heightLogo,
           
        },

        logo: {
            width: heightLogo,
            height: heightLogo
        },

        logoHeight: {
            height: heightLogo
        },
        title: {
            color: '#05375a',
            fontSize: 30,
            fontWeight: 'bold'
      
        },
        text: {
            color: 'grey',
            marginTop: 5
        },
        button: {
            alignItems: 'flex-end',
            marginTop: 5
        },
        signIn: {
           width: 150,
           height: 40,
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: 20,
           flexDirection: 'row'
        },
        textSign: {
            color: 'white',
            fontWeight: 'bold',
      
        },
      
        
      })