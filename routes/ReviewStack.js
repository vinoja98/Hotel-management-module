import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReviewDetails from "../screens/reviewDetails";
import ReviewReply from '../screens/reviewReply';
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
               <Stack.Screen 
                name="ReviewReply" component={ReviewReply} 
                options={{
                  title:"ReviewReply",
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


