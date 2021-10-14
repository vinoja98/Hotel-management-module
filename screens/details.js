import React,{useEffect,useState} from 'react';
import { Alert,StyleSheet, Text,Linking, View,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard,TouchableOpacity,ImageBackground} from 'react-native';
import { globalStyles } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import Card from '../shared/card';
import WaiterForm from './waiterForm'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function Details() {
  const[loading,setLoading]=useState(true)
  const[waiters,setwaiters]=useState([])
  const[modelOpen,setModelOpen]=useState(false)
  
    const fetchwaiters = ()=>{
      
        fetch('https://galaxy-rest-be.herokuapp.com/waiters/')
        .then(res=>res.json())
        .then(results=>{
          setwaiters(results)
          
          console.log(results)
          setLoading(false)
        }).catch(err=>{Alert.alert(err)})
     }
  useEffect(()=>{
     fetchwaiters()
  },[])

  return (
    <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="#03498f" barStyle="light-content" />
        <MaterialIcons
          name='add'
          size={24}
          style={ globalStyles.modalToggle}
          onPress={()=>setModelOpen(true)}
        />
        <Modal visible={modelOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={globalStyles.modalContent}>

                      <MaterialIcons
                        name='close'
                        size={24}
                        style={[ globalStyles.modalToggle,  globalStyles.modalClose]}
                        onPress={()=>setModelOpen(false)}
                      />
                      <WaiterForm modelOpen={modelOpen} setModelOpen={setModelOpen}/>
                  </View>
                </TouchableWithoutFeedback>
            </Modal>
            <FlatList
            data={waiters}
             renderItem={({item})=>(
                     <Card>
                      <View style={styles.cardRow}>
                        <View  style={styles.cardCol}>
                              <View style={styles.cardRow}>
                              <Ionicons name='person-circle' size={20} style={styles.edit}/><Text style={globalStyles.itemText}>{item.name}</Text>
                              </View>
                              <View style={styles.cardRow}>
                              <MaterialCommunityIcons name='identifier' size={20} style={styles.edit}/>
                              <Text style={globalStyles.itemText}>{item.nic}</Text>
                              </View>
                              <View style={styles.cardRow}>
                              <MaterialIcons name='local-phone' size={20} style={styles.edit}/>
                              <Text style={globalStyles.itemText}>{item.contactNo}</Text>
                              </View>
                              <View style={styles.cardRow}>
                              <FontAwesome5 name="amazon-pay" size={20} style={styles.edit} />
                              <Text style={globalStyles.itemText}>Rs. {item.salary}</Text>
                              </View>
                           </View>
                           <TouchableOpacity onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=+${item.contactNo}`)}>
                           <FontAwesome5 name="whatsapp" size={28} color="blue" />
                          </TouchableOpacity>
                          
                       </View>
                     </Card>   
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchwaiters()}
             refreshing={loading}
           />
          
          {/* }
     */}
    </View>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({

  cardCol:{
    flexDirection:'column',
    paddingLeft:0,
    flex:1
  },
  cardRow:{
    flexDirection:'row'
  },
  pic:{
    // flex: 1,
    width: 150,
    height: 40,
    // resizeMode: 'contain'
  },
  edit:{
    color:'blue',
    marginRight:20
  },
  iconCol:{
    flexDirection:'column',
    position:'absolute',
    right:-10,
  },
  del:{
    paddingTop:0,
    color:'#03498f'
   },
})

//   const deleteWaiter= async(_id,name) =>{
//     const token = await AsyncStorage.getItem("token")
//     console.log(_id)
//     fetch("http://10.0.2.2:5000/addWaiter/" +_id,{
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//          id:_id
//       })
//     })
//     .then(res=>res.json())
//     .then(deleted=>{
//       console.log("hello")
//       Alert.alert(`${name} is deleted`)
//       setwaiters((prevWaiter)=>{
//      return prevWaiter.filter(waiter=> waiter._id != _id)
//     })
    
    
//     })
//     .catch(err=>{
//       Alert.alert("something went wrong")
//     })
//  }
//  const deleteAlert = ({item,deleteWaiter}) =>
//     Alert.alert(
//       "Deleting Waiter",
//       "Are you sure you want to delete?",
//       [
//         {
//           text: "No",
//           onPress: () => console.log('cancel'),
//           style: "cancel"
//         },
//         { text: "Yes", onPress: () => deleteWaiter(item._id,item.name) }
//       ]
//     );