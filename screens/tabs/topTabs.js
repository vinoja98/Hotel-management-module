import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from './tab1';
import Tab2 from './tab2';

const TopBar=createMaterialTopTabNavigator()

const TopTab=()=>{
    return(
        <TopBar.Navigator>
            <TopBar.Screen name='bar1' component={Tab1}/>
            <TopBar.Screen name='bar2' component={Tab2}/>
        </TopBar.Navigator>
    )
}

export default TopTab;

