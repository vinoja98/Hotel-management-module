import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import FoodForm from './foodForm';

export default function Home({navigation}) {
  const[modelOpen,setModelOpen]=useState(false)
  const[foodItems,setFoodItems]=useState([
    {name:'Burger',price:200,description:'Robust',rating:4,key:'1'},
    {name:'Pizza',price:1000,description:'Spicy',rating:5,key:'2'},
    {name:'Pasta',price:800,description:'Spicy',rating:4,key:'3'},
    {name:'HotDog',price:300,description:'Robust',rating:5,key:'4'},
    {name:'Fanta',price:100,description:'Cooling',rating:4,key:'5'},
    {name:'Necto',price:120,description:'Cooling',rating:5,key:'6'},

  ])
  const addFood=(food)=>{
    food.key=Math.random().toString()
    setFoodItems((current)=>{
      return[food, ...current]
    })
    setModelOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modelOpen} animationType='slide'>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>

              <MaterialIcons
                name='close'
                size={24}
                style={[styles.modalToggle, styles.modalClose]}
                onPress={()=>setModelOpen(false)}
              />
              <FoodForm addFood={addFood}/>
          </View>
         </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={()=>setModelOpen(true)}
      />

      <Button title='go to Details' onPress={() =>
        navigation.navigate('Details')}
        color='black'/>
        <FlatList
          data={foodItems}
          renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('About',item)}>
                    <Card>
                        <Text style={globalStyles.itemText}>{item.name}</Text>
                    </Card> 
                </TouchableOpacity>
          )}
        />
    </View>
  );
}
const styles=StyleSheet.create({
 
  modalToggle:{
      marginBottom:10,
      borderWidth:1,
      borderColor:'gray',
      padding:10,
      borderRadius:10,
      alignSelf:'center'
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  modalContent:{
    flex:1,

  }
})