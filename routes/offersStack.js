import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import SpecialOffers from '../screens/speacialOffers';

const Stack = createStackNavigator();

const ReviewStack = () => {
  return (
   <Stack.Navigator>
           <Stack.Screen 
              name="SpecialOffers" component={ReviewDetails} 
              options={({navigation})=>{
                return{
                  headerTitle:()=><Header navigation={navigation} title="SPECIAL OFFERS"/>
                }
              }}             
             />
        
    </Stack.Navigator>
 
  );
};

export default  ReviewStack


