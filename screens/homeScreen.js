import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from '../routes/homeStack'
import Navi from '../routes/ReviewStack'
import Navi3 from '../routes/roomBookingStack'
import { DrawerContent } from '../screens/drawerContent';

const Drawer=createDrawerNavigator()

const HomeScreen = (props) => {
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
