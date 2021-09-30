import React,{useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoadingScreen = (props) => {

  const detectLogin= async ()=>{
    const token = await AsyncStorage.getItem('token')
        if(token){
              props.navigation.replace("homeScreen")
        }else{
            props.navigation.replace("login")
        }
  }
  useEffect(()=>{
   detectLogin()
  },[])

  return (
   <View style={styles.loading}> 
    <ActivityIndicator size="large" color="blue" />
   </View>
  );
};

const styles= StyleSheet.create({
    loading:{
    //  flex:1,
    // justifyContent:"center",
    // alignItems:"center" 
    }
    
  })

export default LoadingScreen;
