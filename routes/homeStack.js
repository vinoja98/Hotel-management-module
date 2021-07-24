import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import About from '../screens/about';
import Header from '../shared/header';
import Details from '../screens/details';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation })=>{
                  return{
                    headerTitle:()=><Header navigation={navigation} title="HOME"/>
                  }
                }}
                
            />
            <Stack.Screen 
                name="About" component={About} 
                options={{
                  title:"About",
                  headerStyle:{backgroundColor:'#80593a',height:56},
                  headerTitleStyle:{fontFamily:'nunito-bold'},
                  headerTintColor:"black",
                  // headerTransparent:require('../assets/pexels-photo-2504911.jpeg'),
                  // height:60,
                 
            }}/>
           <Stack.Screen 
                name="Staff Details" component={Details} 
                options={{
                  title:"DETAILS",
                  headerStyle:{backgroundColor:'#80593a',height:56},
                  headerTintColor:"black",
                  headerTitleStyle:{fontFamily:'nunito-bold'},
                  // fontFamily:'nunito-regular'
            }}/>
          
        </Stack.Navigator>
 
  );
};
export default  HomeStack


