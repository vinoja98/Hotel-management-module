import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import RoomBooking from '../screens/roomBooking';

const Stack = createStackNavigator();

const ReviewStack = () => {
  return (
   <Stack.Navigator>
           <Stack.Screen 
              name="RoomBooking" component={ReviewDetails} 
              options={({navigation})=>{
                return{
                  headerTitle:()=><Header navigation={navigation} title="ROOM BOOKING"/>
                }
              }}             
             />
        
    </Stack.Navigator>
 
  );
};

export default  ReviewStack


