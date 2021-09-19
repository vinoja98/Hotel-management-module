import React,{useEffect,useState} from 'react';
import { Alert, StyleSheet, Text, View ,FlatList,TouchableOpacity,
  Modal,TouchableWithoutFeedback,Keyboard,ActivityIndicator,StatusBar, KeyboardAvoidingView,} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import {AntDesign} from '@expo/vector-icons'
import FoodForm from './foodForm';
import FlatButton from '../shared/button';
import ActionButton from 'react-native-action-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation,props}) {
  const[loading,setLoading]=useState(true)
  const[modelOpen,setModelOpen]=useState(false)
  const[foodItems,setFoodItems]=useState([])


   const Boiler = async ()=>{
      const token = await AsyncStorage.getItem("token")
      console.log(token)
      fetch('http://10.0.2.2:5000/food/')
      .then(res=>res.json())
      .then(results=>{
        setFoodItems(results)
        
        console.log(results)
        setLoading(false)
      }).catch(err=>{Alert.alert(err)})
   }
useEffect(()=>{
   Boiler()
},[])

   const logout =(props)=>{
      AsyncStorage.removeItem("token").then(()=>{
        navigation.replace("login")
      })
   }
// useEffect(()=>{
//   fetch('http://10.0.2.2:5000/food/')
//   .then(res=>res.json())
//   .then(results=>{
//     setFoodItems(results)
//     setLoading(false)
//   })
// })

  const deleteFood= async(_id,name) =>{
    const token = await AsyncStorage.getItem("token")
    console.log(_id)
    fetch("http://10.0.2.2:5000/food/" +_id,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         id:_id
      })
    })
    .then(res=>res.json())
    .then(deleted=>{
      Alert.alert(`food item ${name} deleted`)
      setFoodItems((prevFood)=>{
     return prevFood.filter(food=> food._id != _id)
    })
    })
    .catch(err=>{
      Alert.alert("something went wrong")
    })
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
        { text: "Yes", onPress: () => deleteFood(item._id,item.name) }
      ]
    );
  return (
    <View style={globalStyles.container}>
    <StatusBar backgroundColor="#03498f" barStyle="light-content" />
    
      <Modal visible={modelOpen} animationType='slide'>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalContent}>

              <MaterialIcons
                name='close'
                size={24}
                style={[ globalStyles.modalToggle,  globalStyles.modalClose]}
                onPress={()=>setModelOpen(false)}
              />
              <FoodForm modelOpen={modelOpen} setModelOpen={setModelOpen} foodItems={foodItems} setFoodItems={setFoodItems}/>
          </View>
         </TouchableWithoutFeedback>
      </Modal>
     
      <View style={styles.topROw}>
        <MaterialIcons
          name='add'
          size={24}
          style={ globalStyles.modalToggle}
          onPress={()=>setModelOpen(true)}
        />
        
        <View style={styles.btn}>
          <FlatButton  text='Staff   Details' onPress={() =>
            navigation.navigate('Details')}/>
        </View>
        <View style={styles.btn2}>
          <FlatButton  text='Logout' onPress={() => logout(props)}/>
          
        </View>
        
      </View>
        {/* {loading?  
            <ActivityIndicator size='large' color='#0000ff'/>
            :     */}
            <FlatList
            data={foodItems}
             renderItem={({item})=>(
               <View style={styles.foodROw}>
                 <View style={styles.crd}>
                    
                     <Card>
                       <View style={styles.crdrow}>
                           <Text style={globalStyles.itemText}>{item.name}</Text>
                           
                           <View style={styles.ant}>
                           <TouchableOpacity onPress={()=>navigation.navigate('About',item)}>
                             <AntDesign  style={styles.right} name='doubleright' size={20} />
                             </TouchableOpacity>
                           </View>
                       </View>
                     </Card> 
                   
                 </View>
                 <View style={styles.del}>
                     <TouchableOpacity onPress={()=>deleteAlert({item,deleteFood})}>
                             <MaterialIcons style={styles.del} name='delete' size={28} />
                     </TouchableOpacity>
                 </View>
               </View>
                  
                  
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>Boiler()}
             refreshing={loading}
           />
          {/* }
     */}
    </View>
   
  );
}
const styles=StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#03498f',
  },

  topROw:{
    flexDirection:'row'
  },
  btn:{
    paddingLeft:70
  },
  btn2:{
    paddingLeft:10
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
    paddingTop:5,
    color:'#03498f'
   },
  ant:{
    position:'absolute',
    right:0,
    justifyContent:'center'
  }
})