import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,FlatList,TouchableOpacity,SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function RoomBooking({props}) {
 
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.itemText}>Room Bookings</Text>
      
    </View>
  );
}