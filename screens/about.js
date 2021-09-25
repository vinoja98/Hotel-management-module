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
             case "discount":
                 return route.params.discount
             case "category":
                  return route.params.category
              case "status":
                 return route.params.status
              case "img":
                return route.params.img
              case "code":
                  return route.params.code
         }
      
      return ""
   }
  const[modelOpen,setModelOpen]=useState(false)
  const[name,setName]=useState(getDetails("name"))
  const[price,setPrice]=useState(getDetails("price"))
  const[description,setDescription]=useState(getDetails("description"))
  const[discount,setDiscount]=useState(getDetails("discount"))
  const[category,setCategory]=useState(getDetails("category"))
  const[status,setStatus]=useState(getDetails("status"))
  const[img,setImg]=useState(getDetails("img"))
  const[code,setCode]=useState(getDetails("code"))
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
              name={name} price={price} description={description} discount={discount} category={category} 
              status={status} img={img} code={code}
              setName={setName}
              setPrice={setPrice}
              setDescription={setDescription}
              setDiscount={setDiscount}
              setCategory={setCategory}
              setStatus={setStatus}
              setImg={setImg}
              setCode={setCode}
              />
          </View>
         </TouchableWithoutFeedback>
      </Modal>
      <Card>
        {/* <View style={styles.cardTop}> */}
        <View  style={styles.cardCol}>
          <Image style={styles.pic2} source={{uri: img}}/>
          
              <Text style={globalStyles.itemText}>--- {name}</Text>
              <Text style={globalStyles.itemText}>--- {code}</Text>
              <Text style={globalStyles.itemText}>--- Rs.{price}</Text>
              <Text style={globalStyles.itemText}>--- {description}</Text>
              
          </View>
          <View style={styles.iconCol}>
            <TouchableOpacity onPress={()=>setModelOpen(true)} >
              <MaterialIcons name='mode-edit' size={28} style={styles.edit}/>
            </TouchableOpacity>
          </View>
          
        {/* </View> */}
        {/* <View style={styles.rating}>
            <Text style={globalStyles.itemText}>Rating:</Text>
            <Image style={styles.pic} source={images.ratings[rating]}/>
            
        </View> */}
        <View style={styles.rating}>
          <View style={styles.cardCol}>
          <Text style={[globalStyles.blackText,styles.createdText]}>createdAt:</Text>
          <View style={styles.cardRow}>
                           <Text style={[globalStyles.itemText,styles.created]}>{createdAt.substring(0,10)}</Text>
                           <Text style={[globalStyles.itemText,styles.created]}> at {createdAt.substring(11,16)}</Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={[globalStyles.blackText,styles.createdText]}>discount Percentage : </Text>
                           <Text style={[globalStyles.itemText,styles.created]}>{discount} </Text>
          </View>
          <View style={styles.cardRow}>
          <Text style={[globalStyles.blackText,styles.createdText]}>Category : </Text>
                           <Text style={[globalStyles.itemText,styles.created]}>{category} </Text>
          </View>
          <View style={styles.cardRow}>
          <Text style={[globalStyles.blackText,styles.createdText]}>Status : </Text>
                           <Text style={[globalStyles.itemText,styles.created]}>{status} </Text>
          </View>
          </View>
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
    width: 250,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 40,
    marginTop:10,
    alignSelf:'center'
  },
  cardCol:{
    flexDirection:'column',
    // paddingLeft:10,
  },
  cardTop:{
    flexDirection:'row',
  },
  iconCol:{
    flexDirection:'column',
    // paddingStart:35,
    // paddingEnd:20
    position:'absolute',
    right:-10,
  },
  edit:{
    color:'#03498f',
    paddingTop:10
  },
  created:{
    paddingTop:0,
    // right:42
  },
  createdText:{
    left:0
  },
  cardRow:{
    flexDirection:'row'
  },
})