import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';
import Details from '../screens/details';

const Stack = createStackNavigator();

const ReviewStack = () => {
  return (
   <Stack.Navigator>
           <Stack.Screen 
              name="ReviewDetails" component={ReviewDetails} 
              options={({navigation})=>{
                return{
                  headerTitle:()=><Header navigation={navigation} title="REVIEWS"/>
                }
              }}             
             />
        
    </Stack.Navigator>
 
  );
};

export default  ReviewStack


