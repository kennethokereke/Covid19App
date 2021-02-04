import React,{useRef} from 'react'
import {
     View,
     Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
    Platform, Keyboard, SafeAreaView} from 'react-native'

    import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
    import FontAwesome from 'react-native-vector-icons/FontAwesome'
    import Feather from 'react-native-vector-icons/Feather'
    import BottomSheet from 'reanimated-bottom-sheet'
    import Animated from 'react-native-reanimated'



const ProfileScreenEdit = ({navigation}) => {

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
                <Text style={styles.panelButtonTitle}>Choose Picture</Text>
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
        

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()

        }}>

       
        <View style={[styles.container, ]}
        >
            <BottomSheet 
            ref={ref} 
            snapPoints={[450, 0, 0]} 
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1} 
            callbackNode={animationValue} 
            enabledGestureInteraction={true}/>
            <SafeAreaView style={[styles.headerBar, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                
                <Icon name="arrow-left" size={25} color="#009387" />
             
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Icon name="arrow-left" size={30} color="white" style={{right: 40}} />
                </TouchableOpacity>
               
                
                <Icon name="arrow-left" size={25} color="#009387" />
                
                <Text style={{marginRight: 24, fontWeight: 'bold', color: 'white',  }}>Edit Profile</Text>
                <Icon name="arrow-left" size={25} color="#009387" />
                <Icon name="arrow-left" size={25} color="#009387" />
                <Icon name="arrow-left" size={25} color="#009387" />
            </SafeAreaView>
           <TouchableWithoutFeedback onPress={() => ref.current.snapTo(1)}>
          <Animated.View style={{margin: 20, opacity: Animated.add(0.2, Animated.multiply(animationValue, 1.0))}}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => ref.current.snapTo(0)}
            >
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
          </Animated.View>
          </TouchableWithoutFeedback>
          
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
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    commandButton: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginTop: 10

    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        height: 450
       

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
    },
    headerBar: {
        backgroundColor: '#009387',
         width: 450, 
         height: 90, 
         marginBottom: 30, 
         justifyContent: 'center', 
         alignItems: 'center'
    }
})

export default ProfileScreenEdit
