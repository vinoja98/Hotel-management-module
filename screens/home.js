import React,{useEffect,useState,useRef} from 'react';
import { Alert, StyleSheet, Text, View ,FlatList,TouchableOpacity,LayoutAnimation,
  Modal,TouchableWithoutFeedback,Keyboard,StatusBar,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import {AntDesign} from '@expo/vector-icons'
import FoodForm from './foodForm';
import FlatButton from '../shared/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import FadeInView from '../shared/fadeInView';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function Home({navigation,props}) {
  const[loading,setLoading]=useState(true)
  const[modelOpen,setModelOpen]=useState(false)
  const[foodItems,setFoodItems]=useState([])

  const Boiler = async ()=>{
    const token = await AsyncStorage.getItem("token")
    //console.log(token)
    fetch('https://galaxy-rest-be.herokuapp.com/food/')
    .then(res=>res.json())
    .then(results=>{
      setFoodItems(results)
      
      //console.log(results)
      setLoading(false)
    }).catch(err=>{Alert.alert(err)})
 }

useEffect(()=>{
 Boiler()
 return () => {
  setFoodItems({}); // This worked for me
};
},[])

   const logout =(props)=>{
      AsyncStorage.removeItem("token").then(()=>{
        navigation.replace("login")
      })
   }


  const deleteFood= async(_id,name) =>{
    const token = await AsyncStorage.getItem("token")
    console.log(_id)
    fetch("https://galaxy-rest-be.herokuapp.com/food/" +_id,{
      method: 'DELETE',
      headers:new Headers({
        'Content-Type': 'application/json',
        Authorization:"Bearer "+token
      }),
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
    <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
       <Toast ref={(ref) => Toast.setRef(ref)} />
    <FadeInView style={globalStyles.container}>
    <StatusBar backgroundColor="#03498f" barStyle="light-content" />
   
    
      <Modal visible={modelOpen} animationType='slide' >
      {/* <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}> */}
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
         {/* </ImageBackground> */}
      </Modal>
     
      <View style={styles.topROw}>
        <MaterialIcons
          name='add'
          size={24}
          style={ globalStyles.modalToggle}
          onPress={()=>setModelOpen(true)}
        />
        
        <View style={styles.btn}>
          <FlatButton testID="Staff.Button" text='Staff   Details' onPress={() =>
            navigation.navigate('Details')}/>
        </View>
        <View style={styles.btn2}>
          <FlatButton testID="Logout.Button" text='Logout' onPress={() => logout(props)}/>
          
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
                       <Ionicons name="fast-food-sharp" size={20} color="blue" />
                       {/* <Ionicons name="md-fast-food-outline" size={20} color="blue" /> */}
                           <Text style={[globalStyles.blackText,styles.nam]}>{item.name}</Text>
                           
                           <View style={styles.ant}>
                           
                           <TouchableOpacity testID="About.Button" onPress={()=>navigation.navigate('About',item)}>
                             <AntDesign  style={styles.right} name='doubleright' size={17} />
                             </TouchableOpacity>
                           </View>
                           <View style={styles.code}>
                           <Text style={globalStyles.itemText}>{item.code}</Text>
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
     
    </FadeInView>
    </ImageBackground>
   
  );
}
const styles=StyleSheet.create({
  nam:{
      paddingLeft:3
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#03498f',
  },

  topROw:{
    flexDirection:'row'
  },
  btn:{
    paddingLeft:25
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
   color:'#03498f',
   paddingTop:2
  },
  del:{
    paddingTop:5,
    color:'#dcbbdb'
   },
  ant:{
    position:'absolute',
    right:0,
    justifyContent:'center'
  },
  code:{
    position:'absolute',
    right:20,
    justifyContent:'center',
  }
})