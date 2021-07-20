import React,{useState} from 'react';
import { Alert, StyleSheet, Text, View ,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import FoodForm from './foodForm';
import FlatButton from '../shared/button';

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
  const deleteFood= (key) =>{
    setFoodItems((prevFood)=>{
     return prevFood.filter(food=> food.key != key)
    })
    setModelOpen(false)
 }
 const deleteAlert = ({item,deleteFood}) =>
    Alert.alert(
      "Deleting Food",
      "Are you sure you want to delete?",
      [
        {
          text: "No",
          onPress: () => console.log('cancel'),
          style: "cancel"
        },
        { text: "Yes", onPress: () => deleteFood(item.key) }
      ]
    );
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
      <View style={styles.topROw}>
        <MaterialIcons
          name='add'
          size={24}
          style={styles.modalToggle}
          onPress={()=>setModelOpen(true)}
        />
        <View style={styles.btn}>
          <FlatButton  text='go to Details' onPress={() =>
            navigation.navigate('Details')}/>
        </View>
        
      </View>
      
        <FlatList
          data={foodItems}
          renderItem={({item})=>(
            <View style={styles.foodROw}>
              <View style={styles.crd}>
                <TouchableOpacity onPress={()=>navigation.navigate('About',item)}> 
                  <Card>
                    <View style={styles.crdrow}>
                        <Text style={globalStyles.itemText}>{item.name}</Text>
                        <View style={styles.ant}>
                          <AntDesign  style={styles.right} name='doubleright' size={20} />
                        </View>
                    </View>
                  </Card> 
                </TouchableOpacity>
              </View>
              <View style={styles.del}>
                  <TouchableOpacity onPress={()=>deleteAlert({item,deleteFood})}>
                          <MaterialIcons  name='delete' size={28} />
                  </TouchableOpacity>
              </View>
            </View>
               
               
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

  },
  topROw:{
    flexDirection:'row'
  },
  btn:{
    paddingLeft:120
  },
  del:{
    width:'10%',
    paddingTop:15
    // position:'absolute'
  },
  foodROw:{
    flexDirection:'row',
    width:'100%',
    // position:'relative'
  }
  ,crd:{
    width:'90%',
    paddingRight:10
    // position:'absolute'
  },
  crdrow:{
    flexDirection:'row',
  },
  right:{
   
  },
  ant:{
    position:'absolute',
    right:0,
    justifyContent:'center'
  }
})