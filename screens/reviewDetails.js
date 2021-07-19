import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,FlatList,TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({props}) {
 
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.itemText}>Review Details</Text>
      
    </View>
  );
}