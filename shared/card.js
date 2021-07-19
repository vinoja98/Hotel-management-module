import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function Card(props) {
    return (
      <View style={style.card}>
        <View style={style.cardContent}>
            {props.children}
        </View>
      </View>
    );
  }

  const style = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4
        ,marginVertical:6
    },
    cardContent:{
        marginHorizontal:20
        ,marginVertical:10
    }
})