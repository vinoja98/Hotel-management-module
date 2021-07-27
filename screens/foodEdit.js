import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,TextInput,Alert} from 'react-native';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';

export default function FoodEdit({name,price,description,rating,setModelOpen,_id,setDescription,setRating,setName,setPrice}) {
   
  
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

    fetch("http://10.0.2.2:5000/food/update/"+id,{
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
      Alert.alert("someting went wrong")
  })
}
    return (
      <View style={globalStyles.container}>
        <Formik>
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                         minHeight={50}
                        placeholder='Name of Food Item'
                        onChangeText={text =>setName(text)}
                        value={name}
                        minLength={3}/>
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                          minHeight={50}
                        placeholder='Price'
                        onChangeText={text => setPrice(text)}
                        value={price.toString()}
                        // onBlur={props.handleBlur('price')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        multiline minHeight={50}
                        placeholder='Description of Food Item'
                        onChangeText={text => setDescription(text)}
                        value={description}
                        minLength={3}/>
                        {/* onBlur={props.handleBlur('description')} */}
                      {/* <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text> */}
                     <TextInput style={globalStyles.input}
                         minHeight={50}
                        placeholder='Rating(4/5)'
                        onChangeText={text => setRating(text)}
                        value={rating.toString()}
                        // onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text> */}
                  
                    <FlatButton  text='Modify' onPress={()=>updateDetails({_id})}/>
                   
                </View>
            )
            }
        </Formik>
      </View>
    );
  }
