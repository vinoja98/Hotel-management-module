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
                          <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Review  : </Text><Text style={globalStyles.itemText}>{item.review}</Text>
                           </View>
                           <View >
                           <Text style={globalStyles. blackText}>Recommendation : </Text>
                           <Text style={globalStyles.itemText}>{item.recommendation}</Text>
                           </View>
                           {/* <Text style={globalStyles.itemText}>rating :{item.rating}</Text> */}
                           <Image style={styles.pic} source={images.ratings[item.rating]}/>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>{item.createdAt.substring(0,10)}</Text>
                           <Text style={globalStyles.itemText}> at {item.createdAt.substring(11,16)}</Text>
                           </View>
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