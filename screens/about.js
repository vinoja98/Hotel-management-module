import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';

export default function About({route}) {
  const { name } = route.params;
  const { price} = route.params;
  const { description } = route.params;
  const { rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={styles.cardTop}>
          <Image style={styles.pic2} source={require('../assets/cover-for-street-food-in-sydney.jpg')}/>
          <View  style={styles.cardCol}>
              <Text style={globalStyles.itemText}>{name}</Text>
              <Text style={globalStyles.itemText}>Rs.{price}</Text>
              <Text style={globalStyles.itemText}>{description}</Text>
          </View>
          <View style={styles.iconCol}>
            <MaterialIcons name='delete' size={28}/>
            <MaterialIcons name='mode-edit' size={28} style={styles.edit}/>
          </View>
          
        </View>
        <View style={styles.rating}>
            <Text style={globalStyles.itemText}>Rating:</Text>
            <Image style={styles.pic} source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:'#333'
  },
  pic:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  pic2:{
    width: 80,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 40,
    marginTop:10
  },
  cardCol:{
    flexDirection:'column',
    paddingLeft:30,
  },
  cardTop:{
    flexDirection:'row',
  },
  iconCol:{
    flexDirection:'column',
    paddingStart:35,
    paddingEnd:1
  },
  edit:{
    paddingTop:10
  }
})