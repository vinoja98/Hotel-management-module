import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,TextInput,Button} from 'react-native';

export default function FlatButton({text,onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        
      </View>
    </TouchableOpacity>
      
    );
  }

  const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:18,
        paddingHorizontal:10,
        backgroundColor:'#08b8e1'
    },
    buttonText:{
      color:'#03498f',
      fontFamily:'nunito-bold',
      // textTransform:'uppercase',
      fontSize:16,
      textAlign:'center'
    },
   
  })