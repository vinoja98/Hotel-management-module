import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert,ScrollView,ImageBackground} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function FoodForm({navigation ,setModelOpen,setFoodItems,foodItems}) {
  const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    const[status,setStatus]=useState("")
    const[discount,setDiscount]=useState("")
    const[category,setCategory]=useState("")
    const[img,setImg]=useState("")
    const[code,setCode]=useState("")
    // const[modelOpen,setModelOpen]=useState(false)

    const foodSchema=yup.object({
      name:yup.string()
      .required()
      .min(3),
      price:yup.string()
      .required()
      .min(2),
      description:yup.string()
      .required()
      .min(3),
      rating:yup.string()
      .required()
      .test('is 4 or 5','rating must be 4 or 5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>3
      })
    })
 const data1=[{value:'Available',},
 {value:'Not Available',},]

 const data2=[{value:'Pizza',},{value:'Drinks',},{value:'Fried Rice',},{value:'Other',},]
    
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
          status,
          discount,
          category,
          img,
          code

      })
    })
    .then(res=>res.json())
    .then(data=>{
      // setFoodItems((prevFood)=>{
      //   return [data, ...prevFood]
      //  })
      Alert.alert(`food item ${data.name} added, REFRESH HOME PAGE`)
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
            initialValues={{name:'',price:'',description:'',category:'',status:'',discount:'',status:'',img:''}}>
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
                        <Dropdown 
                          label="Category"
                          data={data2}
                          onChangeText={text => setCategory(text)}
                        value={category}/>
                        <TextInput style={globalStyles.input}
                        label='Food Item Code'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setCode(text)}
                        value={code}
                        />
                         <TextInput style={globalStyles.input}
                        label='Image link'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setImg(text)}
                        value={img}
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
                        multiline minHeight={50}
                        label='Description'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setDescription(text)}
                        
                        value={description}/>
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
                        label='Discount Percentage'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        keyboardType='numeric'
                        onChangeText={text => setDiscount(text)}
                        value={discount}
             
                        
                        // onBlur={props.handleBlur('price')}
                        
                        // onChangeText={text => setPrice(text)}
                        // value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        /> 
                         
                         
                          <Dropdown 
                          label="Status"
                          data={data1}
                          onChangeText={text => setStatus(text)}
                        value={status}/>
                    <FlatButton text='Add' onPress={submitFood}/>
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }