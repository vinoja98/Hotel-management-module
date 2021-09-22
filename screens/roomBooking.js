import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import FlatButton from '../shared/button';

export default function RoomBooking({navigation,props}) {
 
  
  // return (
  //   <View style={globalStyles.container}>
  //     <StatusBar backgroundColor="#03498f" barStyle="light-content" />
  //     <Text style={globalStyles.itemText}>Review Details</Text>
      
  //   </View>
  // );
  const[loading,setLoading]=useState(true)
  const[reviews,setReviews]=useState([])


   const fetchReviews = ()=>{
      
      fetch('https://galaxy-rest-be.herokuapp.com/rooms/')
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
             <View style={styles.btn}>
                <FlatButton  text='View Room Bookings' onPress={() =>
                    navigation.navigate('Bookings')}/>
            </View>
            <FlatList
            data={reviews}
             renderItem={({item})=>(
               
                     <Card>

                      <View  style={styles.cardCol}>
                        <View style={styles.cardRow}>
                            <Text style={globalStyles. blackText}>Room No  : </Text>
                           <Text style={globalStyles.itemText}>{item.roomNo}</Text>
                        </View>
                        <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Bed Count : </Text>
                           <Text style={globalStyles.itemText}>{item.bedCount}</Text>
                        </View>
                        <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>{item.status}</Text>
                        </View>
                           
                           
                           
                       </View>
                     </Card> 
                   
             
                  
                  
             )}
             keyExtractor={item=>item._id}
             numColumns={2}
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
    paddingLeft:0,
    flex:1
  },
  new:{
    margin:5
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
  btn:{
    paddingLeft:0
  },
})