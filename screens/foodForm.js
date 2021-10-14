import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert,ScrollView,ImageBackground} from 'react-native';
import { Provider,Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import axios from 'axios';
import Toast from 'react-native-toast-message';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
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
    
 const submitFood = ()=>{
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
  if(data.name && data.price && data.description && data.status && data.discount && data.category && data.img && data.code ){
    axios.post('http://10.0.2.2:5000/food/add',data).then(({data}) => {
      Alert.alert(`food item ${data.name} added, REFRESH HOME PAGE`)
      setModelOpen(false)
    
    }).catch(e => {
      Alert.alert(err)
    });
  } else {
   Alert.alert("Please fill all the details")
  }
}
  // const submitFood=()=>{
  //   fetch('https://galaxy-rest-be.herokuapp.com/food/add',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         name,
  //         price,
  //         description,
  //         status,
  //         discount,
  //         category,
  //         img,
  //         code

  //     })
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     // setFoodItems((prevFood)=>{
  //     //   return [data, ...prevFood]
  //     //  })
  //     Alert.alert(`food item ${data.name} added, REFRESH HOME PAGE`)
  //     setModelOpen(false)
    
  //   })
  //   .catch(err=>{
  //     Alert.alert(err)
  //   })
  // }
    return (
      // <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <Provider>
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
                        
                        />
                        {/* <Dropdown 
                          label="Category"
                          data={data2}
                          style = {{color:'#08b8e1',fontFamily:'nunito-bold' }} //for changed text color
                          baseColor='#03498f' //for initial text color
                          textColor='#03498f'
                          itemColor='blue'
                          selectedItemColor='#08b8e1'
                          itemTextStyle={{paddingLeft:30,fontFamily:'nunito-bold'}}
                          pickerStyle={{backgroundColor:'#dcbbdb'}}
                         
                          onChangeText={text => setCategory(text)}
                        value={category}
                        /> */}
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
                        />
                    
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
                        value={price}
                        
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
                        
                        value={description}/>
                       
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
                        value={discount}
             
                        
                        // onBlur={props.handleBlur('price')}
                        
                        // onChangeText={text => setPrice(text)}
                        // value={price}
                        
                        // onBlur={props.handleBlur('price')}
                        /> 
                         
                         
                          {/* <Dropdown 
                          label="Status"
                          data={data1}
                          onChangeText={text => setStatus(text)}
                          style = {{color:'#08b8e1' }} //for changed text color
                          baseColor='#03498f' //for initial text color
                          itemColor='blue'
                          pickerStyle={{backgroundColor:'#dcbbdb'}}
                         
                          selectedItemColor='#08b8e1'
                          itemTextStyle={{paddingLeft:30,fontFamily:'nunito-bold'}}
                        value={status}/> */}
                    <FlatButton text='Add' onPress={submitFood}/>
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
      </Provider>
    );
  }