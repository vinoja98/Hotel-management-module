
import React,{useEffect,useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  ActivityIndicator,
  Text
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from '../routes/homeStack'
import Navi from '../routes/ReviewStack'
import Navi2 from '../routes/offersStack'
import Navi3 from '../routes/roomBookingStack'

const Drawer=createDrawerNavigator()

const HomeScreen = (props) => {
//    const [email,setEmail] = useState("loading")
//    const Boiler = async ()=>{
//       const token = await AsyncStorage.getItem("token")
//     fetch('http://10.0.2.2:3000/',{
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

//    const logout =(props)=>{
//       AsyncStorage.removeItem("token").then(()=>{
//         props.navigation.replace("login")
//       })
//    }

  return (
//    <> 
//     <Text style={{fontSize:18}}>your email is {email}</Text>
//     <Button 
//         mode="contained"
//         style={{marginLeft:18,marginRight:18,marginTop:18}}
//          onPress={() => logout(props)}>
//         logout
//       </Button>
//    </>
    
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
 
  );
};



export default HomeScreen;
