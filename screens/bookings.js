import React,{useEffect,useState} from 'react';
import { Alert,StyleSheet, Text, View,Image,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard,TouchableOpacity,ImageBackground} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Card from '../shared/card';
import FadeInView from '../shared/fadeInView';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function Bookings({props}) {
 
  
  // return (
  //   <View style={globalStyles.container}>
  //     <StatusBar backgroundColor="#03498f" barStyle="light-content" />
  //     <Text style={globalStyles.itemText}>Review Details</Text>
      
  //   </View>
  // );
  const[loading,setLoading]=useState(true)
  const[bookings,setBookings]=useState([])
  const[modelOpen,setModelOpen]=useState(false)

  
    const fetchBookings = ()=>{
      
        fetch('https://galaxy-rest-be.herokuapp.com/booking/')
        .then(res=>res.json())
        .then(results=>{
          setBookings(results)
          
          console.log(results)
          setLoading(false)
        }).catch(err=>{Alert.alert(err)})
     }
  useEffect(()=>{
     fetchBookings()
  },[])

  

  return (
    <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <FadeInView style={globalStyles.container}>  
          <StatusBar backgroundColor="#03498f" barStyle="light-content" />
            <FlatList
            data={bookings}
             renderItem={({item})=>(
                <Card>
                      <View  style={styles.cardCol}>
                          <View style={styles.cardRow}>
                          <Ionicons name='person-circle' size={20} style={styles.cus}/><Text style={globalStyles.itemText}>{item.customerName}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <MaterialCommunityIcons name="email-edit" size={20} style={styles.cus}/><Text style={globalStyles.itemText}>{item.customerEmail}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <MaterialIcons name='local-phone' size={20} style={styles.cus}/><Text style={globalStyles.itemText}>{item.customerContactNumber}</Text>
                           </View>
                           <View style={styles.cardRow}>
                              <FontAwesome5 name="calendar-alt" size={30} style={styles.cus2} />
                              <View  style={styles.cardCol}>
                                <Text style={globalStyles.itemText}>{item.startDate.substring(0,10)}</Text>
                                <Text style={globalStyles.itemText}>{item.endDate.substring(0,10)}</Text>
                              </View>
                           </View>
                           <View style={styles.cardRow}>
                           {/* <FontAwesome5 name="calendar-alt" size={20} style={styles.cus}/> */}
                           
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>RoomID: </Text>
                           <Text style={globalStyles.itemText}>{item.room}</Text>
                           </View>
                       </View>
                  </Card>      
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchBookings()}
             refreshing={loading}
           />
    </FadeInView>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({
  cal:{paddingLeft:30},
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
    width: 150,
    height: 40,
    // resizeMode: 'contain'
  },
  edit:{
    color:'#03498f',
    paddingTop:65
  },
  cus:{
    color:'blue',
    marginRight:30,
    
  },
  cus2:{
    color:'blue',
    marginRight:20,
    // paddingLeft:10
  },
  iconCol:{
    flexDirection:'column',
    position:'absolute',
    right:-10,
  },
  del:{
    paddingTop:5,
    color:'#03498f'
   },
})