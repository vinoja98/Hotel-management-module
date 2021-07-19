import React from 'react';
import { StyleSheet, Text, View ,Button,Image,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}) {

    const openMenu=()=>{
        navigation.openDrawer()
    }

    return (
      <ImageBackground source={require('../assets/pexels-photo-2504911.jpeg')} style={styles.header}>
          <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
         <View style={styles.headerTitle}>
            <Image style={styles.headerLogo} source={require('../assets/logo.png')}/>
            <Text style={styles.headerText}>{ title }</Text>
         </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
   header:{
    flex:1,
       flexDirection:'row',
       height:'100%',
      //  width:'100%',
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'pink',height:56
   },
   headerText:{
       letterSpacing:1,
      //  fontWeight:'bold',
       fontSize:25,
       color:'white',
       fontFamily:'nunito-bold',
       textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
   },
   icon:{
        position:'absolute',
        left:16,
        color:'white'
   },
   headerLogo:{
     height:30,
     width:30,
     marginHorizontal:12,
     borderRadius: 25
   },
   headerTitle:{
     flexDirection:'row'
   }
})