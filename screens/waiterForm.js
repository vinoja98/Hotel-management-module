import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'

export default function WaiterForm({navigation ,setModelOpen,setFoodItems,foodItems}) {
  const[name,setName]=useState("")
    const[password,setPrice]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setDescription]=useState("")
    const[address,setAddress]=useState("")
    const[salary,setRating]=useState("")
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
    
  const submitFood=()=>{
    fetch('https://galaxy-rest-be.herokuapp.com/food/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name,
          price,
          description,
          // rating,
         
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // setFoodItems((prevFood)=>{
      //   return [data, ...prevFood]
      //  })
      Alert.alert(`food item ${data.name} added`)
      setModelOpen(false)
    
    })
    .catch(err=>{
      Alert.alert(err)
    })
  }
    return (
      <View style={globalStyles.container}>
        <Formik
            initialValues={{name:'',email:'',password:''}}>
            {/* validationSchema={foodSchema}
            onSubmit={(values,actions)=>{
                    onsubmit(values)
                    actions.resetForm()
            }}
       */}
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                        label='Name'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setName(text)}
                        value={name}
                        
                        />
                    
                        <TextInput style={globalStyles.input}
                        label='Password'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        
                        />
                         <TextInput style={globalStyles.input}
                        label='Email'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        
                        />
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                        label='Phone'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        // onChangeText={text => setPrice(text)}
                        // value={}
                        
                        // onBlur={props.handleBlur('price')}
                        />
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        
                        label='Address'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        // onChangeText={text => setDescription(text)}
                        
                        // value={description}
                        />
                        {/* onBlur={props.handleBlur('description')} */}
                      {/* <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text> */}
                     {/* <TextInput style={globalStyles.input}
                        label='Rating'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setRating(text)}
                        
                        value={rating}
                        // onBlur={props.handleBlur('rating')}
                        keyboardType='numeric'/> */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text> */}
                    <TextInput style={globalStyles.input}
                        label='Salary'
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
                
                    <FlatButton text='Add' onPress={submitFood}/>
                </View>
            )
            }
        </Formik>
      </View>
    );
  }