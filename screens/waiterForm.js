import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert,ScrollView,ImageBackground} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function WaiterForm({navigation ,setModelOpen,setFoodItems,foodItems}) {
  const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[contactNo,setContactNo]=useState("")
    const[nic,setNIC]=useState("")
    const[salary,setSalary]=useState("")
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
    
  const submitWaiter=()=>{
    fetch('https://galaxy-rest-be.herokuapp.com/addWaiter/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name,
          email,
          password,
          contactNo,
          nic,
          salary
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // setFoodItems((prevFood)=>{
      //   return [data, ...prevFood]
      //  })
      Alert.alert(`Waiter ${data.name} added, REFRESH THE PAGE`)
      setModelOpen(false)
    
    })
    .catch(err=>{
      Alert.alert(err)
    })
  }
    return (
      <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <View style={globalStyles.container}>
        <ScrollView>
        <Formik
            initialValues={{name:'',email:'',password:'',nic:'',salary:'',contactNo:''}}>
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
                        onChangeText={text => setPassword(text)}
                        value={password}
                        />
                         <TextInput style={globalStyles.input}
                        label='Email'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        />
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                        label='Phone'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setContactNo(text)}
                        value={contactNo}
                        keyboardType='numeric'/>
                      
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        
                        label='NIC'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setNIC(text)}
                        
                        value={nic}
                        keyboardType='numeric'/>
                       
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
                        onChangeText={text => setSalary(text)}
                        value={salary}
                        
                        // onBlur={props.handleBlur('price')}
                        
                        // onChangeText={text => setPrice(text)}
                        // value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        /> 
                
                    <FlatButton text='Add' onPress={submitWaiter}/>
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }