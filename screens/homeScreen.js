
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from '../routes/homeStack'
import Navi from '../routes/ReviewStack'
import Navi3 from '../routes/roomBookingStack'
import { DrawerContent } from '../screens/drawerContent';

const Drawer=createDrawerNavigator()

const HomeScreen = (props) => {
//    const [email,setEmail] = useState("loading")
//    const Boiler = async ()=>{
//       const token = await AsyncStorage.getItem("token")
//     fetch('http://10.0.2.2:5000/',{
//     headers:new Headers({
//       Authorization:"Bearer "+token
//     })
//     }).then(res=>res.json())
//     .then(data=>{
//       console.log(data)
//       setEmail(data.email)
//     }
//     )
//    }
// useEffect(()=>{
//    Boiler()
// },[])
  return (
          <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props}  
            activeTintColor= '#03498f'
            inactiveTintColor='#08b8e1'
            activeBackgroundColor='#dcbbdb'
           
            
           />
          
        }
           drawerContentOptions={{
            activeTintColor: '#03498f',
            inactiveTintColor:'#08b8e1',
            itemStyle: { marginVertical: 5},
            labelStyle:{fontFamily:'nunito-bold'}
            
          }}
        >
            <Drawer.Screen name="Navigator" children={Navigator} />
            <Drawer.Screen name="Navi" children={Navi}/>
            <Drawer.Screen name="Navi3" children={Navi3}/>
        </Drawer.Navigator>
 
  );
};



export default HomeScreen;
