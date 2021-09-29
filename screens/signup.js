import React,{useState,useEffect} from 'react';
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
  TouchableWithoutFeedback,Keyboard,ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  const [name,setName] = useState('');
  const [nic,setNIC] = useState('');
  const [contactNo,setContact] = useState('');

  const sendCred= async (props)=>{
    
     fetch("http://10.0.2.2:5000/signup",{
       method:"POST",
       headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,
        nic,
        contactNo,
        email,
        password
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              
              await AsyncStorage.setItem('token',data.token)
              props.navigation.replace("homeScreen")
            } catch (e) {
              console.log("error",e)
            }
     })
  }
  
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
    backgroundColor:'white'
  },
  logo:{
    alignItems:'center'
  }

})


  return (
    <> 
  <View style={styles.container}>
   <StatusBar backgroundColor="#03498f" barStyle="light-content" />
    <ScrollView>
      <Text 
      style={{fontSize:25,textAlign:'center',marginTop:30,color:"#08b8e1",fontFamily:'nunito-bold'}}>Register Now!</Text>
      <View style={styles.logo}>
      <Image style={styles.headerLogo} source={require('../assets/logo.png')}/>
      </View>
      
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View>
      <TextInput
        label='Name'
        placeholder='Min 3 characters needed'
        mode="outlined"
        value={name}
        style={{marginTop:130,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1'
            }
          }
        }
        onChangeText={(text)=>setName(text)}
     
      />
      <TextInput
        label='NIC'
        placeholder='10 characters needed'
        mode="outlined"
        value={nic}
        onChangeText={(text)=>{setNIC(text)}}
        style={{marginTop:10,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1'
            }
          }
        }
     
      />
        <TextInput
        label='Email'
        placeholder='Min 5 characters needed'
        mode="outlined"
        value={email}
        style={{marginTop:10,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1'
            }
          }
        }
        onChangeText={(text)=>setEmail(text)}
     
      />
        <TextInput
        label='Contact Number'
        placeholder='12 characters needed'
        mode="outlined"
        value={contactNo}
        style={{marginTop:10,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1'
            }
          }
        }
        onChangeText={(text)=>setContact(text)}
     
      />
        <TextInput
        label='Password'
        placeholder='Min 5 characters needed'
        mode="outlined"
        value={password}
        style={{marginTop:10,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1'
            }
          }
        }
        onChangeText={(text)=>setPassword(text)}
     
      />
      </View>
        </TouchableWithoutFeedback>
      <Button 
        mode="contained"
        style={{marginTop:20,alignSelf:'center',height:30,width:'60%',backgroundColor:"#08b8e1"}}
        onPress={() => sendCred(props)}>
           <Text style={{
        fontSize:13,fontFamily:'nunito-bold',color:"#03498f"
      }}>Sign Up</Text>
      </Button>
     
        <Text
      style={{
        fontSize:18,marginTop:10,fontFamily:'nunito-bold',color:"#03498f",alignSelf:'center'
      }}
      onPress={()=>props.navigation.replace("login")}
      >Already have an account ?</Text>
      
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginTop:10,fontFamily:'nunito-bold',color:"#08b8e1",alignSelf:'center'
      }}
      onPress={()=>props.navigation.replace("login")}
      >Login</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>
   </>
  );
};



export default SignupScreen;

