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
        borderRadius:20,
        elevation:1,
        backgroundColor:'#dcbbdb',
        shadowOffset:{width:2,height:2},
        shadowColor:'#717070',
        shadowOpacity:0.5,
        shadowRadius:2,
        marginHorizontal:1
        ,marginVertical:1,
        borderWidth:4,
        borderColor:'#03498f',
        opacity:0.85
    },
    cardContent:{
        marginHorizontal:20
        ,marginVertical:10
    }
})