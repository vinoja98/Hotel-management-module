import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles } from '../styles/global';
import {
    StyleSheet,
    Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

const SignupScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')

//   const sendCred= async (props)=>{
//      fetch("http://10.0.2.2:3000/signup",{
//        method:"POST",
//        headers: {
//         'Content-Type': 'application/json'
//       },
//       body:JSON.stringify({
//         "email":email,
//         "password":password
//       })
//      })
//      .then(res=>res.json())
//      .then(async (data)=>{
//             try {
//               await AsyncStorage.setItem('token',data.token)
//               props.navigation.replace("home")
//             } catch (e) {
//               console.log("error hai",e)
//             }
//      })
//   }
  
const styles = StyleSheet.create({
    
  headerLogo:{
      marginTop:30,
    height:100,
    width:100,
    borderRadius: 55,
    position:'absolute',
    
  },
  container: {
    flex:1,
    color:'white',
  },
  logo:{
    alignItems:'center'
  }

})


  return (
    <> 
   <KeyboardAvoidingView behavior="position" backgroundColor='white'>
     <StatusBar backgroundColor="blue" barStyle="light-content" />
    
      <Text 
      style={{fontSize:25,textAlign:'center',marginTop:30,color:"#08b8e1",fontFamily:'nunito-bold'}}>Welcome to</Text>
      <View style={styles.logo}>
      <Image style={styles.headerLogo} source={require('../assets/logo.png')}/>
      </View>
      
     
      {/* <View
      style={{
        borderBottomColor:"blue",
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:20,
        marginRight:20,
        marginTop:70
      }}
       /> */}
      
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View>
      <TextInput
        label='Name'
        mode="outlined"
        value={email}
        style={{marginTop:150,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={{colors:{primary:"#08b8e1"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='NIC'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginTop:18,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={{colors:{primary:"#08b8e1"}}}
     
      />
        <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginTop:18,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={{colors:{primary:"#08b8e1"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
        <TextInput
        label='Contact Number'
        mode="outlined"
        value={email}
        style={{marginTop:18,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={{colors:{primary:"#08b8e1"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
        <TextInput
        label='Password'
        mode="outlined"
        value={email}
        style={{marginTop:18,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={{colors:{primary:"#08b8e1"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      </View>
        </TouchableWithoutFeedback>
      <Button 
        mode="contained"
        style={{marginTop:38,alignSelf:'center',height:30,width:'60%',backgroundColor:"#08b8e1"}}
        onPress={()=>props.navigation.replace('login')}>
           <Text style={{
        fontSize:13,fontFamily:'nunito-bold',color:"#03498f"
      }}>Signup</Text>
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginTop:20,fontFamily:'nunito-bold',color:"#03498f",alignSelf:'center'
      }}
      onPress={()=>props.navigation.replace("login")}
      >Already have a account ?</Text>
      </TouchableOpacity>
    
      </KeyboardAvoidingView>
   </>
  );
};



export default SignupScreen;

