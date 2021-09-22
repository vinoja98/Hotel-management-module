import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,StatusBar,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import ReviewReply from './reviewReply'

export default function ReviewDetails({props}) {
 
  
  // return (
  //   <View style={globalStyles.container}>
  //     <StatusBar backgroundColor="#03498f" barStyle="light-content" />
  //     <Text style={globalStyles.itemText}>Review Details</Text>
      
  //   </View>
  // );
  const[loading,setLoading]=useState(true)
  const[reviews,setReviews]=useState([])
  const[modelOpen,setModelOpen]=useState(false)

   const fetchReviews = ()=>{
      
      fetch('https://galaxy-rest-be.herokuapp.com/review/')
      .then(res=>res.json())
      .then(results=>{
        setReviews(results)
        
        console.log(results)
        setLoading(false)
      }).catch(err=>{Alert.alert(err)})
   }
useEffect(()=>{
   fetchReviews()
},[])

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
              <ReviewReply setModelOpen={setModelOpen}
              />
          </View>
         </TouchableWithoutFeedback>
      </Modal>
        {/* {loading?  
            <ActivityIndicator size='large' color='#0000ff'/>
            :     */}
            <FlatList
            data={reviews}
             renderItem={({item})=>(
               
              <Card>

                <View  style={styles.cardCol}>  
                          <View style={styles.cardRow}>
                           {/* <Text style={globalStyles. blackText}>Review  : </Text> */}
                           <Text style={globalStyles.itemText}>{item.review}</Text>
                           </View>
                           
                           {/* <Text style={globalStyles.itemText}>rating :{item.rating}</Text> */}
                           <Image style={styles.pic} source={images.ratings[item.rating]}/>
                           <View >
                           <Text style={globalStyles.itemText}>{item.name}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>{item.createdAt.substring(0,10)}</Text>
                           <Text style={globalStyles.itemText}> at {item.createdAt.substring(11,16)}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>Reply : {item.reply}</Text>
                           
                           </View>
                           <TouchableOpacity onPress={()=>setModelOpen(true)}>
                             <Text style={globalStyles. blackText}>Add Reply</Text>
                          </TouchableOpacity>
                          
                       </View>
                     </Card> 
                   
             
                  
                  
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchReviews()}
             refreshing={loading}
           />
          {/* }
     */}
    </View>
   
  );
}
const styles=StyleSheet.create({

  cardCol:{
    flexDirection:'column',
    paddingLeft:5,
    flex:1
  },
  cardRow:{
    flexDirection:'row'
  },
  pic:{
    // flex: 1,
    width: 185,
    height: 35,
    // resizeMode: 'contain'
  },
})