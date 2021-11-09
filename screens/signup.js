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
  TouchableWithoutFeedback,Keyboard,ScrollView
} from 'react-native';
import Toast from 'react-native-toast-message';

const SignupScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  const [name,setName] = useState('');
  const [nic,setNIC] = useState('');
  const [contactNo,setContact] = useState('');

  const sendCred=(props)=>{
    const data2={
      password,
      email,
      nic,
      name,
      contactNo
    }
    if(data2.password.length>4 && data2.email.length>10 && data2.name.length>2 && data2.nic.length==10 && data2.contactNo.length==12){
     fetch("https://galaxy-rest-be.herokuapp.com/signup",{
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
     .then(data =>{
            try {   
              props.navigation.replace("login")
              Toast.show({
                topOffset: 40,
                visibilityTime: 1500,
                position: 'top',
                type: 'success',
                text1: 'Successfully registered',
              });
            } catch (e) {
              Toast.show({
                topOffset: 40,
                visibilityTime: 1500,
                position: 'top',
                type: 'error',
                text1: 'Unknown Error',
              });
            }
     })
    }
    else {
      if (data2.password && data2.email && data2.nic && data2.contactNo && data2.name){
        Toast.show({
          topOffset: 40,
          visibilityTime: 1500,
          position: 'top',
          type: 'error',
          text1: 'Invalid Data',
        });
      }
      else{
        Toast.show({
          topOffset: 40,
          visibilityTime: 1500,
          position: 'top',
          type: 'error',
          text1: 'Fill All the Details',
        });
      }
      
    }
  }
  
const styles = StyleSheet.create({
    
  headerLogo:{
      marginTop:10,
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
    <Toast ref={(ref) => Toast.setRef(ref)} />
      <Text 
      style={{fontSize:25,textAlign:'center',marginTop:30,color:"#08b8e1",fontFamily:'nunito-bold'}}>Register Now!</Text>
      <View style={styles.logo}>
      <Image style={styles.headerLogo} testID="background" source={require('../assets/logo.png')}/>
      </View>
      
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View>
      <TextInput style={globalStyles.input}
      accessibilityLabel="Name"
        label='Name'
        placeholder='Min 3 characters needed'
        mode="outlined"
        value={name}
        style={{marginTop:110,alignSelf:'center',height:30,width:'60%',fontFamily:'nunito-bold'}}
        theme={
          {
            fonts: {
              regular: {
                fontFamily: 'nunito-bold'
              }
            },
            colors:{
              primary:'#08b8e1',
              accent:'#03498f',
              placeholder:'#03498f',
              text:'#08b8e1' 
            }
          }
        }
        onChangeText={(text)=>setName(text)}
        testID="SignUp.usernameInput"
      />
      <TextInput style={globalStyles.input}
      accessibilityLabel="NIC"
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
              primary:'#08b8e1',
              accent:'#03498f',
              placeholder:'#03498f',
              text:'#08b8e1' 
            }
          }
        }
        testID="SignUp.NICInput"
      />
        <TextInput style={globalStyles.input}
        accessibilityLabel="Email"
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
              primary:'#08b8e1',
              accent:'#03498f',
              placeholder:'#03498f',
              text:'#08b8e1' 
            }
          }
        }
        onChangeText={(text)=>setEmail(text)}
        testID="SignUp.emailInput"
      />
        <TextInput style={globalStyles.input}
        accessibilityLabel="Contact Number"
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
              primary:'#08b8e1',
              accent:'#03498f',
              placeholder:'#03498f',
              text:'#08b8e1' 
            }
          }
        }
        onChangeText={(text)=>setContact(text)}
        testID="SignUp.numInput"
      />
        <TextInput style={globalStyles.input}
        accessibilityLabel="Password"
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
              primary:'#08b8e1',
              accent:'#03498f',
              placeholder:'#03498f',
              text:'#08b8e1' 
            }
          }
        }
        onChangeText={(text)=>setPassword(text)}
        testID="SignUp.passInput"
      />
      </View>
        </TouchableWithoutFeedback>
      <Button testID="SignUp.Button"
        mode="contained"
        disabled={!email || !password || !nic ||!contactNo ||!name}
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
      >Already have an account ?</Text>
      
      <TouchableOpacity>
        <Text testID="login.Button"
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

