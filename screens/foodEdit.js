import React,{useState} from 'react';
import { View,Alert,ScrollView,ImageBackground} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function FoodEdit({name,price,description,discount,status,code,category,img,setModelOpen,_id,setDescription,setDiscount,setName,setPrice,setStatus,setCode,setCategory,setImg}) {
   
const data1=[{value:'Available',},
{value:'Not Available',},]

const data2=[{value:'Pizza',},{value:'Drinks',},{value:'Fried Rice',},{value:'Other',},]
    
  const updateDetails = (_id)=>{
    const id=_id._id
    console.log(_id._id)
    console.log(name)
//     const data={
//       name,
//       price,
//       description,
//       status,
//       discount,
//       category,
//       img,
//       code
// }
    fetch("https://galaxy-rest-be.herokuapp.com/food/update/"+id,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          
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
    .then(result=>{
      Alert.alert(`food item updated, REFRESH HOME PAGE`)
        setModelOpen(false)
    })
    .catch(err=>{
      Alert.alert("something went wrong")
  })

}
    return (
     
      <View style={globalStyles.container}>
        <ScrollView>
        <Formik>
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                         minHeight={50}
                         label='Food Item'
                         mode="outlined"
                         theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text =>setName(text)}
                        value={name}
                        minLength={3}/>
                        <Dropdown 
                          label="Category"
                          data={data2}
                          style = {{color:'#08b8e1' }} //for changed text color
                          baseColor='#03498f' //for initial text color
                          pickerStyle={{backgroundColor:'#dcbbdb'}}
                      
                          itemColor='blue'
                          selectedItemColor='#08b8e1'
                          itemTextStyle={{paddingLeft:30,fontFamily:'nunito-bold'}}
                          onChangeText={text =>setCategory(text)}
                          value={category}/>
                        <TextInput style={globalStyles.input}
                        label='Food Item Code'
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text =>setCode(text)}
                        value={code}
                        />
                        <TextInput style={globalStyles.input}
                        label='Image link'
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text =>setImg(text)}
                        value={img}
                        />
                        {/* onBlur={props.handleBlur('name')}  */}
                    {/* <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text> */}
                     <TextInput style={globalStyles.input}
                          label='Price'
                          mode="outlined"
                          theme={
                            {
                              fonts: {
                                regular: {
                                  fontFamily: 'nunito-bold'
                                }
                              },
                              colors:{
                                primary:'#08b8e1',
                                accent:'#03498f',
                                placeholder:'#03498f',
                                text:'#08b8e1'
                              }
                            }
                          }
                        onChangeText={text => setPrice(text)}
                        value={price.toString()}
                        // onBlur={props.handleBlur('price')}
                        keyboardType='numeric'/>
                    {/* <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text> */}
                     <TextInput style={globalStyles.input}
                        multiline minHeight={50}
                        label='Description'
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text => setDescription(text)}
                        value={description}
                        minLength={3}/>
                        {/* onBlur={props.handleBlur('description')} */}
                      {/* <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text> */}
                   
                    {/* <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text> */}
                    <TextInput style={globalStyles.input}
                        label='Discount Percentage'
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        keyboardType='numeric'
                        onChangeText={text => setDiscount(text)}
                        value={discount.toString()}
                        
                       
                        /> 
                         
                         
                          <Dropdown 
                          label="Status"
                          style = {{color:'#08b8e1' }} //for changed text color
                          baseColor='#03498f' //for initial text color
                          // baseColor={'transparent'}
                          itemColor='blue'
                          pickerStyle={{backgroundColor:'#dcbbdb'}}
                         
                          selectedItemColor='#08b8e1'
                          itemTextStyle={{paddingLeft:30,fontFamily:'nunito-bold'}}
                          data={data1}
                          onChangeText={text => setStatus(text)}
                        value={status}/>
                    <FlatButton  text='Modify' onPress={()=>updateDetails({_id})}/>
                   
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
      
    );
  }
