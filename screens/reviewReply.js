import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'

export default function ReviewReply({setModelOpen}) {
   
//     const getDetails = (type)=>{
     
//          switch(type){
//              case "name":
//                  return name
//              case "price":
//                 return price
//              case "description":
//                return description
//              case "rating":
//                  return rating
//          }
      
//       return ""
//    }
 
    
  const updateDetails = (_id)=>{
    const id=_id._id
    console.log(_id._id)
    console.log(name)

    fetch("https://galaxy-rest-be.herokuapp.com/food/update/"+id,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            id,
            name,
            price,
            description,
            rating:rating
        })
    })
    .then(res=>res.json())
    .then(result=>{
        setModelOpen(false)
    })
    .catch(err=>{
      Alert.alert(err)
  })
}
    return (
      <View style={globalStyles.container}>
          <Text style={globalStyles.itemText}>review : </Text>
        <Formik>
            {(props)=>(
                <View>
                   
                    <TextInput style={globalStyles.input}
                         minHeight={50}
                         label='Reply'
                         mode="outlined"
                         theme={{colors:{primary:"#08b8e1"}}}
                        minLength={3}/>
                        
                    <FlatButton  text='Add Reply'/>
                   
                </View>
            )
            }
        </Formik>
      </View>
    );
  }
