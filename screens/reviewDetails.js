import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,FlatList,TouchableOpacity,SafeAreaView,StatusBar} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({props}) {
 
  
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="#03498f" barStyle="light-content" />
      <Text style={globalStyles.itemText}>Review Details</Text>
      
    </View>
  );
}