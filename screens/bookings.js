import React,{useEffect,useState} from 'react';
import { Alert,StyleSheet, Text, View,Image,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard,TouchableOpacity,ImageBackground} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import Toast from 'react-native-toast-message';
import RoomBookingForm from './roomBookingForm';
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
      
        fetch('http://10.0.2.2:5000/booking/')
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
    <View style={globalStyles.container}>
      
    <StatusBar backgroundColor="#03498f" barStyle="light-content" />
    
            <FlatList
            data={bookings}
             renderItem={({item})=>(
               
                     <Card>

                      <View  style={styles.cardCol}>
                          <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Customer Name : </Text><Text style={globalStyles.itemText}>{item.customerName}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Email : </Text><Text style={globalStyles.itemText}>{item.customerEmail}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>ContactNo : </Text><Text style={globalStyles.itemText}>{item.customerContactNumber}</Text>
                           </View>
                           {/* <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Room No : </Text>
                           <Text style={globalStyles.itemText}>{item.room.roomNo}</Text>
                           </View> */}
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Start Date : </Text>
                           <Text style={globalStyles.itemText}>{item.startDate.substring(0,10)}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>End Date : </Text>
                           <Text style={globalStyles.itemText}>{item.endDate.substring(0,10)}</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>RoomID: </Text>
                           <Text style={globalStyles.itemText}>{item.room}</Text>
                           </View>
                       </View>
                       {/* <View style={styles.iconCol}>
                            <TouchableOpacity >
                            <MaterialIcons name='delete' size={28} style={styles.edit}/>
                            </TouchableOpacity>
                        </View> */}
                     </Card> 
                   
             
                  
                  
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchBookings()}
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
  iconCol:{
    flexDirection:'column',
    // paddingStart:35,
    // paddingEnd:20
    position:'absolute',
    right:-10,
  },
  del:{
    paddingTop:5,
    color:'#03498f'
   },
})