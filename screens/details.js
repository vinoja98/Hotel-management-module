import React from 'react';
import { StyleSheet, Text, View ,Button,SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Details() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.itemText}>Details</Text>
      
    </View>
  );
}