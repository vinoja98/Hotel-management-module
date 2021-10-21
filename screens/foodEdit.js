import React,{useState} from 'react';
import { View,Alert,ScrollView,ImageBackground} from 'react-native';
import { Provider,Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
// import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
import DropDown from "react-native-paper-dropdown";
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function FoodEdit({name,price,description,discount,status,code,category,img,setModelOpen,_id,setDescription,setDiscount,setName,setPrice,setStatus,setCode,setCategory,setImg}) {

const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
     
 const data1=[{label:'Available',value:'Available',},
 {label:'Not Available',value:'Not Available',},]

 const data2=[{label:'Pizza',value:'Pizza',},{label:'Drinks',value:'Drinks',},{label:'Fried Rice',value:'Fried Rice',},{label:'Other',value:'Other',},]
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
      <Provider>
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
                        testID="FoodEdit.food"
                        value={name}
                        minLength={3}/>
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
                        {/* <Dropdown 
                          label="Category"
                          data={data2}
                          style = {{color:'#08b8e1' }} //for changed text color
                          baseColor='#03498f' //for initial text color
                          pickerStyle={{backgroundColor:'#dcbbdb'}}
                      
                          itemColor='blue'
                          selectedItemColor='#08b8e1'
                          itemTextStyle={{paddingLeft:30,fontFamily:'nunito-bold'}}
                          onChangeText={text =>setCategory(text)}
                          value={category}/> */}
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
                        testID="FoodEdit.code"
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
                        testID="FoodEdit.img"
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
                        testID="FoodEdit.price"
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
                        testID="FoodEdit.desc"
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
                        testID="FoodEdit.dis"
                       
                        /> 
                         
{/*                          
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
                        value={status}/> */}
                    <FlatButton  testID="edit.Button" text='Modify' onPress={()=>updateDetails({_id})}/>
                   
                </View>
            )
            }
        </Formik>
        </ScrollView>
      </View>
    </Provider>
    );
  }
