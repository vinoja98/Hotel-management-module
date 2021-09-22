import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'

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
 
const data1=[{value:'Available',},
{value:'Not Available',},]

const data2=[{value:'Pizza',},{value:'Drinks',},{value:'Fried Rice',},{value:'Other',},]
    
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
        <Formik>
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                         minHeight={50}
                         label='Food Item'
                         mode="outlined"
                         theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text =>setName(text)}
                        value={name}
                        minLength={3}/>
                        <Dropdown 
                          label="Category"
                          data={data2}/>
                        <TextInput style={globalStyles.input}
                        label='Food Item Code'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        
                        />
                        <TextInput style={globalStyles.input}
                        label='Image link'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        
                        />
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                          minHeight={50}
                          label='Price'
                          mode="outlined"
                          theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setPrice(text)}
                        value={price.toString()}
                        // onBlur={props.handleBlur('price')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        multiline minHeight={50}
                        label='Description'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setDescription(text)}
                        value={description}
                        minLength={3}/>
                        {/* onBlur={props.handleBlur('description')} */}
                      {/* <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text> */}
                     {/* <TextInput style={globalStyles.input}
                         minHeight={50}
                         label='Rating'
                         mode="outlined"
                         theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setRating(text)}
                        value={rating.toString()}
                        // onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'/> */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text> */}
                    <TextInput style={globalStyles.input}
                        label='Discount Percentage'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        keyboardType='numeric'
                        // onChangeText={text => setPrice(text)}
                        // value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        
                        // onChangeText={text => setPrice(text)}
                        // value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        /> 
                         
                         
                          <Dropdown 
                          label="Status"
                          data={data1}/>
                    <FlatButton  text='Modify' onPress={()=>updateDetails({_id})}/>
                   
                </View>
            )
            }
        </Formik>
      </View>
    );
  }
