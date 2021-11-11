import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert,ScrollView,ImageBackground} from 'react-native';
import { Provider,Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDown from "react-native-paper-dropdown";
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function FoodForm({navigation ,setModelOpen,setFoodItems,foodItems}) {
  const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[description,setDescription]=useState("")
    const[status,setStatus]=useState("")
    const[discount,setDiscount]=useState("")
    const[category,setCategory]=useState("");
    const[img,setImg]=useState("")
    const[code,setCode]=useState("")
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
  
 const data1=[{label:'Available',value:'Available',},
 {label:'Not Available',value:'Not Available',},]

 const data2=[{label:'Pizza',value:'Pizza',},{label:'Drinks',value:'Drinks',},{label:'Fried Rice',value:'Fried Rice',},{label:'Other',value:'Other',},]
    
 const submitFood = async()=>{
  const data={
          name,
          price,
          description,
          status,
          discount,
          category,
          img,
          code
  }
  const token = await AsyncStorage.getItem("token")
  if(data.name && data.price && data.description && data.status && data.discount && data.category && data.img && data.code.length==4 ){
  fetch("https://galaxy-rest-be.herokuapp.com/food/add",{
        method:"POST",
        headers:new Headers({
          'Content-Type': 'application/json',
          Authorization:"Bearer "+token
        }),
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
    .then(data=>{
      Alert.alert(`food item ${data.name} added, REFRESH HOME PAGE`)
        setModelOpen(false)
    })
    .catch(err=>{
      Alert.alert("something went wrong")
  })}
  else {
   Alert.alert("Please add valid details")
  }
 }
  
    return (
      // <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <Provider>
      <View style={globalStyles.container}>
        <ScrollView>
        <Formik
            initialValues={{name:'',price:'',description:'',category:'',status:'',discount:'',status:'',img:''}}>
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                        label='Food Item'
                        mode="outlined"
                        placeholder='Min 4 characters needed'
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
                        onChangeText={text => setName(text)}
                        value={name}
                        testID="FoodForm.food"
                        />
                         <DropDown
                        label={"Category"}
                        mode={"outlined"}
                        visible={showDropDown}

                        showDropDown={() =>  setShowDropDown(true)}

                        onDismiss={() =>  setShowDropDown(false)}
                        value={category}
                        activeColor={"#08b8e1"}
                        dropDownItemTextStyle={{fontFamily:'nunito-bold',color:'blue'}}
                        setValue={setCategory}
                        list={data2}
                      />
                      <DropDown
                      label={"Status"}
                      mode={"outlined"}
                      visible={showDropDown2}

                      showDropDown={() =>  setShowDropDown2(true)}

                      onDismiss={() =>  setShowDropDown2(false)}
                      value={status}
                      activeColor={"#08b8e1"}
                      dropDownItemTextStyle={{fontFamily:'nunito-bold',color:'blue'}}
                      setValue={setStatus}
                      list={data1}
                    />
                        <TextInput style={globalStyles.input}
                        label='Food Item Code'
                        mode="outlined"
                        placeholder='4 characters needed'
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
                        onChangeText={text => setCode(text)}
                        value={code}
                        testID="FoodForm.code"
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
                        onChangeText={text => setImg(text)}
                        value={img}
                        testID="FoodForm.img"
                        />
                    
                     <TextInput style={globalStyles.input}
                        label='Price'
                        placeholder='Min 3 characters needed'
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
                        value={price}
                        testID="FoodForm.price"
                        keyboardType='numeric'/>
      
                     <TextInput style={globalStyles.input}
                        multiline minHeight={50}
                        label='Description'
                        placeholder='Min 3 characters needed'
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
                        testID="FoodForm.desc"
                        value={description}/>
                       
                    <TextInput style={globalStyles.input}
                   testID="Percentage"
                        label='Discount Percentage'
                        mode="outlined"
                        placeholder='Value between 0 ,100'
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
                        value={discount}
             
                        testID="FoodForm.dis"
                        /> 
                    <FlatButton testID="food.Button" text='Add' onPress={submitFood}/>
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
      </Provider>
    );
  }