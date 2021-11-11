import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import Card from '../shared/card';
import FoodEdit from './foodEdit';
import FadeInView from '../shared/fadeInView';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function About({route}) {
  const {_id} =route.params
  const { createdAt } = route.params;

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
    <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
    <FadeInView style={globalStyles.container}>
      <Modal visible={modelOpen} animationType='slide' style={[globalStyles.container,globalStyles.color]}>
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
        <View  style={styles.cardCol}>
          <View style={styles.name}>
            <Text style={styles.nam}> {name}</Text>
            <Text style={styles.nam}>-- {code}</Text>
          </View>
          <View style={styles.price}>
            <Text style={globalStyles.itemText}>Rs.{price}</Text>
          </View>
          <Image style={styles.pic2} source={{uri: img}}/> 
          <View>
              <Text style={[globalStyles.itemText,styles.desc]}>{description}</Text>
          </View>
        </View>
        <View style={styles.iconCol}>
            <TouchableOpacity onPress={()=>setModelOpen(true)} >
              <MaterialIcons name='mode-edit' size={28} style={styles.edit}/>
            </TouchableOpacity>
        </View>
        <View style={styles.rating}>
              <View style={styles.cardCol}>
                  <View style={styles.cardRow}>
                    <AntDesign  style={styles.right} name='star' size={14} />
                    <Text style={[globalStyles.blackText,styles.createdText]}> Added to the system :</Text>
                  </View>
                  <View style={styles.cardRow}>
                      <Text style={[globalStyles.itemText,styles.created]}>{createdAt.substring(0,10)}</Text>
                      <Text style={[globalStyles.itemText,styles.created]}> at {createdAt.substring(11,16)}</Text>
                  </View>
                  <View style={styles.cardRow}>
                      <AntDesign  style={styles.right} name='star' size={14} />
                      <Text style={[globalStyles.blackText,styles.createdText]}>Discount Percentage : </Text>
                      <Text style={[globalStyles.itemText,styles.created]}>{discount} %</Text>
                  </View>
                  <View style={styles.cardRow}>
                    <AntDesign  style={styles.right} name='star' size={14} />
                    <Text style={[globalStyles.blackText,styles.createdText]}>Category : </Text>
                    <Text style={[globalStyles.itemText,styles.created]}>{category} </Text>
                  </View>
                  <View style={styles.cardRow}>
                    <AntDesign  style={styles.right} name='star' size={14} />
                    <Text style={[globalStyles.blackText,styles.createdText]}>Status : </Text>
                    <Text style={[globalStyles.itemText,styles.created]}>{status} </Text>
                  </View>
              </View>
        </View>
      </Card>
    </FadeInView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  right:{
    paddingTop:3,
    paddingRight:3,
    color:'#03498f'
   },
  rating:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:16,
      marginTop:16,
      borderTopWidth:1,
      borderTopColor:'purple'
  },
  pic:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  pic2:{
    width: 230,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 93,
    marginTop:10,
    alignSelf:'center'
  },
  cardCol:{
    flexDirection:'column',
  },
  price:{
    alignSelf:'center'
  },
  nam:{
    fontFamily:'nunito-bold',
    color:'#03498f',
    fontSize:18
  },
  name:{
    fontFamily:'nunito-bold',
    color:'#03498f',
    flexDirection:'row',
    alignSelf:'center',
    
  },
  desc:{
    textAlign:'center'
  },
  cardTop:{
    flexDirection:'row',
  },
  iconCol:{
    flexDirection:'column',
    position:'absolute',
    right:-10,
  },
  edit:{
    color:'#03498f',
    paddingTop:10
  },
  created:{
    paddingTop:0,
    paddingLeft:18
  },
  createdText:{
    left:0
  },
  cardRow:{
    flexDirection:'row',
    paddingTop:9
  },
})