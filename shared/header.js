import React from 'react';
import { StyleSheet, Text, View ,Button,Image,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation,title}) {

    const openMenu=()=>{
        navigation.openDrawer()
    }

    return (
      // <ImageBackground source={require('../assets/pexels-photo-2504911.jpeg')} style={styles.header}>
      <View style={styles.header}>
          <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
         <View style={styles.headerTitle}>
           
            <Text style={styles.headerText}>{ title }</Text>
            <View style={styles.logo}>
              <Image style={styles.headerLogo} source={require('../assets/logo.png')}/>
            </View>
         </View>
      </View>
       
    );
  }

  const styles = StyleSheet.create({
   header:{
    flex:1,
       flexDirection:'row',
       height:'100%',
      //  width:'100%',
       alignItems:'center',
      //  justifyContent:'center',
       backgroundColor:'white',height:56
   },
   headerText:{
       letterSpacing:1,
       fontSize:25,
       color:'#03498f',
       fontFamily:'nunito-bold',
      left:60,
      // paddingTop:5,
     alignSelf:'center',
       textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      position:'absolute'
   },
   icon:{
        position:'absolute',
        left:10,
        justifyContent:'center',
        color:'#03498f'
   },
   headerLogo:{
     height:50,
     width:50,
     borderRadius: 25,
     position:'absolute',
     
   },
   logo:{
    // position:'absolute',
    right:-320,
    paddingBottom:45
    // alignItems:'center'
   },
   headerTitle:{
     flexDirection:'row'
   }
})