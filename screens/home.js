import React,{useEffect,useState} from 'react';
import { Alert, StyleSheet, Text, View ,FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard,ActivityIndicator} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import FoodForm from './foodForm';
import FlatButton from '../shared/button';

export default function Home({navigation}) {
  const[loading,setLoading]=useState(true)
  const[modelOpen,setModelOpen]=useState(false)
  const[foodItems,setFoodItems]=useState([
    // {name:'Burger',price:200,description:'Robust',rating:4,_id:'1'},
    // {name:'Pizza',price:1000,description:'Spicy',rating:5,_id:'2'},
    // {name:'Pasta',price:800,description:'Spicy',rating:4,_id:'3'},
])

useEffect(()=>{
  fetch('http://10.0.2.2:5000/food/')
  .then(res=>res.json())
  .then(results=>{
    setFoodItems(results)
    setLoading(false)
  })
})

  const addFood=(food)=>{
    food._id=Math.random().toString()
    setFoodItems((current)=>{
      return[food, ...current]
    })
    setModelOpen(false)

  }


  const deleteFood= (_id) =>{
    setFoodItems((prevFood)=>{
     return prevFood.filter(food=> food._id != _id)
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
        { text: "Yes", onPress: () => deleteFood(item._id) }
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
              <FoodForm/>
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
        {loading?  
            <ActivityIndicator size='large' color='#0000ff'/>
            :    <FlatList
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
                             <MaterialIcons style={styles.del} name='delete' size={28} />
                     </TouchableOpacity>
                 </View>
               </View>
                  
                  
             )}
             keyExtractor={item=>item.id}
           />
          }
    
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
    // paddingRight:10
    // position:'absolute'
  },
  crdrow:{
    flexDirection:'row',
  },
  right:{
   color:'#03498f'
  },
  del:{
    color:'#03498f'
   },
  ant:{
    position:'absolute',
    right:0,
    justifyContent:'center'
  }
})