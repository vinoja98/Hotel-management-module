import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';

export default function FoodForm({navigation ,setModelOpen}) {
  const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    const[rating,setRating]=useState("")
    // const[modelOpen,setModelOpen]=useState(false)

    // const foodSchema=yup.object({
    //   name:yup.string()
    //   .required()
    //   .min(3),
    //   price:yup.string()
    //   .required()
    //   .min(2),
    //   description:yup.string()
    //   .required()
    //   .min(3),
    //   rating:yup.string()
    //   .required()
    //   .test('is 4 or 5','rating must be 4 or 5',(val)=>{
    //     return parseInt(val)<6 && parseInt(val)>3
    //   })
    // })
 
    
  const submitFood=(food)=>{
    fetch('http://10.0.2.2:5000/food/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name,
          price,
          description,
          rating,
         
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // Alert.alert(`food item ${data.name} added`)
      setModelOpen(false)
    
    })
    .catch(err=>{
      Alert.alert("something went wrong")
    })
  }
    return (
      <View style={globalStyles.container}>
        <Formik
            initialValues={{name:'',price:'',description:'',rating:''}}>
            {/* validationSchema={foodSchema}
            onSubmit={(values,actions)=>{
                    onsubmit(values)
                    actions.resetForm()
            }}
       */}
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                        label='Food Item'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setName(text)}
                        value={name}
                        
                        />
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                        label='Price'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setPrice(text)}
                        value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        multiline minHeight={80}
                        label='Description'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setDescription(text)}
                        
                        value={description}/>
                        {/* onBlur={props.handleBlur('description')} */}
                      {/* <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text> */}
                     <TextInput style={globalStyles.input}
                        label='Rating'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setRating(text)}
                        
                        value={rating}
                        // onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text> */}
                
                    <FlatButton text='Add' onPress={submitFood}/>
                </View>
            )
            }
        </Formik>
      </View>
    );
  }