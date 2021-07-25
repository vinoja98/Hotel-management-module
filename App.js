import React,{useState} from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from './routes/homeStack'
import Navi from './routes/ReviewStack'
import Navi2 from './routes/offersStack'
import Navi3 from './routes/roomBookingStack'

const Drawer=createDrawerNavigator()

const getFonts=()=>Font.loadAsync({
      'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
    })


export default function App() {
  const [fontsLoaded, setFontsLoaded]=useState(false)

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Drawer.Navigator
           drawerContentOptions={{
            activeTintColor: '#03498f',
            inactiveTintColor:'#08b8e1',
            itemStyle: { marginVertical: 5},
            labelStyle:{fontFamily:'nunito-bold'}
            
          }}
        >
            <Drawer.Screen name="Home" children={Navigator} />
            <Drawer.Screen name="Review Details" children={Navi}/>
            <Drawer.Screen name="Special Offers" children={Navi2}/>
            <Drawer.Screen name="Room Bookings" children={Navi3}/>
        </Drawer.Navigator>
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


