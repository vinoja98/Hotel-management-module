import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import FoodEdit from './foodEdit';

export default function About({route}) {
  const {_id} =route.params

  const { createdAt } = route.params;
  // const { price} = route.params;
  // const { description } = route.params;
  // const { rating } = route.params;
      const getDetails = (type)=>{
     
         switch(type){
             case "name":
                 return route.params.name
             case "price":
                return route.params.price
             case "description":
               return route.params.description
             case "rating":
                 return route.params.rating
         }
      
      return ""
   }
  const[modelOpen,setModelOpen]=useState(false)
  const[name,setName]=useState(getDetails("name"))
  const[price,setPrice]=useState(getDetails("price"))
  const[description,setDescription]=useState(getDetails("description"))
  const[rating,setRating]=useState(getDetails("rating"))
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType='slide'>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>

              <MaterialIcons
                name='close'
                size={24}
                style={[ globalStyles.modalToggle,  globalStyles.modalClose]}
                onPress={()=>setModelOpen(false)}
              />
              <FoodEdit setModelOpen={setModelOpen} _id={_id} 
              name={name} price={price} description={description} rating={rating} 
              setName={setName}
              setPrice={setPrice}
              setDescription={setDescription}
              setRating={setRating}
              />
          </View>
         </TouchableWithoutFeedback>
      </Modal>
      <Card>
        <View style={styles.cardTop}>
          <Image style={styles.pic2} source={require('../assets/cover-for-street-food-in-sydney.jpg')}/>
          <View  style={styles.cardCol}>
              <Text style={globalStyles.itemText}>{name}</Text>
              
              <Text style={globalStyles.itemText}>Rs.{price}</Text>
              <Text style={globalStyles.itemText}>{description}</Text>
          </View>
          <View style={styles.iconCol}>
            <TouchableOpacity onPress={()=>setModelOpen(true)} >
              <MaterialIcons name='mode-edit' size={28} style={styles.edit}/>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.rating}>
            <Text style={globalStyles.itemText}>Rating:</Text>
            <Image style={styles.pic} source={images.ratings[rating]}/>
            
        </View>
        <View style={styles.rating}>
          <Text style={globalStyles.itemText}>createdAt:</Text>
          <Text style={globalStyles.itemText}>{createdAt}</Text>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:'#333'
  },
  pic:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  pic2:{
    width: 80,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 40,
    marginTop:10
  },
  cardCol:{
    flexDirection:'column',
    paddingLeft:30,
  },
  cardTop:{
    flexDirection:'row',
  },
  iconCol:{
    flexDirection:'column',
    paddingStart:35,
    paddingEnd:1
  },
  edit:{
    color:'#03498f',
    paddingTop:10
  }
})