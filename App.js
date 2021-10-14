import React,{useState,useEffect} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/loading';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/homeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const getFonts=()=>Font.loadAsync({
      'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
    })

export default function App() {
  const [fontsLoaded, setFontsLoaded]=useState(false)
  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
     const token = await AsyncStorage.getItem('token')
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  }
 useEffect(()=>{
    detectLogin()
 },[])

  if(fontsLoaded){
    return (
     
      <NavigationContainer>
          <Stack.Navigator
          headerMode="none">
                <Stack.Screen name="loading" component={LoadingScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={SignupScreen} />
                <Stack.Screen name="homeScreen" component={HomeScreen} /> 
          </Stack.Navigator>
      </NavigationContainer>
   
      );
  }
  else{
   return(
    <AppLoading
      startAsync={getFonts} 
      onFinish={()=>setFontsLoaded(true)}
      onError={console.warn}
    /> 
   )
  }
}


