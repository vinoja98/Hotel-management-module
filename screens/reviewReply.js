import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Alert, TouchableWithoutFeedback,Keyboard,ImageBackground} from 'react-native';
import { Button ,TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import FlatButton from '../shared/button';
import Toast from 'react-native-toast-message';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function ReviewReply({route,props,navigation}) {
   
  const {_id} =route.params
  const getDetails = (type)=>{
         switch(type){
             case "name":
                 return route.params.name
             case "review":
                return route.params.review
             case "rating":
               return route.params.rating
             case "reply":
                 return route.params.reply  
         }
      return ""
   }
  const[reply,setReply]=useState("")
  // const[name,setName]=useState(getDetails("name"))
  // const[rating,setRating]=useState(getDetails("rating"))
  // const[review,setReview]=useState(getDetails("review"))
  const updateDetails = (_id)=>{
    const id=_id._id
    console.log(_id._id)
    const data={reply}
    if(data.reply.length>3){
      fetch("http://10.0.2.2:5000/review/update/"+id,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            review:getDetails("review"),
            name:getDetails("name"),
            rating:getDetails("rating"),
            reply
        })
    })
    .then(res=>res.json())
    .then(result=>{
      Alert.alert(`reply updated, REFRESH REVIEW PAGE`)
      navigation.navigate("ReviewDetails")
    })
    .catch(err=>{
      Alert.alert(err)
  })
    }else{
      if(data.reply){
        Alert.alert("Please add valid reply")
      }
      else{
        Alert.alert("Please supply a reply")
      }
    }
   
}
    return (
      <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.text}>Review  : {getDetails("review")} </Text>
          <Formik> 
            {(props)=>( 
              // <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
              <View>
                    <TextInput style={globalStyles.input}
                         minHeight={50}
                         label='Reply'
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
                        minLength={3}
                        onChangeText={text =>setReply(text)}
                        value={reply}/>
                      
                       
                    <FlatButton  text='Add Reply' onPress={()=>updateDetails({_id})}/>
              </View>
                    // </TouchableWithoutFeedback>       
               )
              }   
          </Formik>     
        </View>
      </ImageBackground>
    );
  }
