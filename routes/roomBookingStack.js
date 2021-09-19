import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import RoomBooking from '../screens/roomBooking';
import Bookings from '../screens/bookings'

const Stack = createStackNavigator();

const ReviewStack = () => {
  return (
   <Stack.Navigator>
           <Stack.Screen 
              name="RoomBooking" component={RoomBooking} 
              options={({navigation})=>{
                return{
                  headerTitle:()=><Header navigation={navigation} title="ROOM DETAILS"/>
                }
              }}             
             />
             <Stack.Screen 
                name="Bookings" component={Bookings} 
                options={{
                  title:"Bookings",
                  headerStyle:{backgroundColor:'#08b8e1',height:56},
                  headerTitleStyle:{fontFamily:'nunito-bold'},
                  headerTintColor:"#03498f",
                  // headerTransparent:require('../assets/pexels-photo-2504911.jpeg'),
                  // height:60,
                 
            }}/>
        
    </Stack.Navigator>
 
  );
};

export default  ReviewStack


