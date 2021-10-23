import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,TextInput,Button} from 'react-native';
import FadeInView from '../shared/fadeInView';

export default function FlatButton({text,onPress,testID}) {
    return (
    <TouchableOpacity onPress={onPress} testID={testID}>
        < FadeInView style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        
      </ FadeInView>
    </TouchableOpacity>
      
    );
  }

  const styles = StyleSheet.create({
    button:{
        borderRadius:15,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        backgroundColor:'#08b8e1',
        borderColor:'#03498f',
        opacity:0.8
    },
    buttonText:{
      color:'blue',
      fontFamily:'nunito-bold',
      // textTransform:'uppercase',
      fontSize:16,
      textAlign:'center'
    },
   
  })