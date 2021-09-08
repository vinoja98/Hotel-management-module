import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';

export default function ReviewDetails({props}) {
 
  
  // return (
  //   <View style={globalStyles.container}>
  //     <StatusBar backgroundColor="#03498f" barStyle="light-content" />
  //     <Text style={globalStyles.itemText}>Review Details</Text>
      
  //   </View>
  // );
  const[loading,setLoading]=useState(true)
  const[reviews,setReviews]=useState([])


   const fetchReviews = ()=>{
      
      fetch('http://10.0.2.2:5000/review/')
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
        {/* {loading?  
            <ActivityIndicator size='large' color='#0000ff'/>
            :     */}
            <FlatList
            data={reviews}
             renderItem={({item})=>(
               
                     <Card>

                      <View  style={styles.cardCol}>
                           <Text style={globalStyles.itemText}>Review  : {item.review}</Text>
                           <Text style={globalStyles.itemText}>Recommendation : {item.recommendation}</Text>
                           {/* <Text style={globalStyles.itemText}>rating :{item.rating}</Text> */}
                           <Image style={styles.pic} source={images.ratings[item.rating]}/>
                           <Text style={globalStyles.itemText}>{item.createdAt}</Text>
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
  pic:{
    // flex: 1,
    width: 150,
    height: 40,
    // resizeMode: 'contain'
  },
})