import React,{useEffect,useState} from 'react';
import { Alert,StyleSheet, Text, View,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboard,ImageBackground,TouchableOpacity} from 'react-native';
import { globalStyles} from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Card from '../shared/card';
import FlatButton from '../shared/button';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };
import RoomBookingForm from './roomBookingForm';

export default function RoomBooking({navigation,props}) {

  const[bookModel, setBookModel] = useState(false);
  const[selectedRoom, setSelectedRoom] = useState(null);
  const[rooms,setRooms]=useState([])
  const[loading,setLoading]=useState(true)

  const getRooms=()=>{
    fetch('http://10.0.2.2:5000/rooms/')
    .then(res=>res.json())
    .then(results=>{
      setRooms(results)
      setLoading(false)
    }).catch(err=>{Alert.alert(err)})
  }
  useEffect(()=>{
    getRooms()
  },[])  

  return (
  <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
    <View style={globalStyles.container}>
    <StatusBar backgroundColor="#03498f" barStyle="light-content" />
        <Modal visible={bookModel} animationType='slide' >
          {/* <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}> */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={globalStyles.modalContent}>

                  <MaterialIcons
                    name='close'
                    size={24}
                    style={[ globalStyles.modalToggle,  globalStyles.modalClose]}
                    onPress={()=>setBookModel(false)}
                  />
                  <RoomBookingForm navigation={navigation} open={bookModel} setOpen={setBookModel} room={selectedRoom}/>
              </View>
            </TouchableWithoutFeedback>
            {/* </ImageBackground> */}
          </Modal>
             <View style={styles.btn}>
                <FlatButton  text='View Room Bookings' onPress={() =>
                    navigation.navigate('Bookings')}/>
            </View>
            <FlatList
            data={rooms}
             renderItem={({item})=>(
              <Card  style={styles.new}>
                 <View  style={styles.cardCol}>
                        <View style={[styles.cardRow,styles.num]}>
                        <Fontisto name="room" size={35} color="#03498f" />
                           <Text style={[globalStyles. blackText,styles.room]}>{item.roomNo}</Text>
                        </View>
                        <View style={styles.cardRow}>
                        {item?.wifi && 
                        <View style={globalStyles.itemText}>
                            <FontAwesome5 name="wifi" size={20} color="blue"  style={styles.wifi}/>
                        </View>}
                        {item?.ac &&
                          <View style={globalStyles.itemText}>
                          
                          <MaterialCommunityIcons name="air-conditioner" size={24} color="blue" style={styles.edit}/>
                          </View>
                        }
                        </View>
                        <View style={[styles.cardRow,styles.num2]}>
                        <Ionicons name="bed-outline" size={24} color="blue"/>
                           <Text style={[globalStyles. blackText,styles.bed]}>{item.bedCount}</Text>
                        </View>
                       
                        <View style={[styles.cardRow,styles.price]}>
                           <Text style={globalStyles. blackText}>Rs.{item.price}</Text>
                        </View>
                        <View style={styles.add}> 
                        <TouchableOpacity onPress={()=> {
                            setSelectedRoom(item)
                            setBookModel(true);
                          }} >
                                <Text style={globalStyles.addtext}>Add Booking</Text>
                          </TouchableOpacity>   
                        </View>
              </View>
           </Card>       
                  
             )}
             keyExtractor={item=>item._id}
             numColumns={2}
       />
    </View>
  </ImageBackground>
   
  );
}
const styles=StyleSheet.create({
  add:{
    borderTopWidth:1,
    borderTopColor:'blue',
    backgroundColor:'#08b8e1',
    width:'100%'
  },
  price:{
    alignSelf:'center'
  },
  num:{
    alignSelf:'center',
    paddingBottom:12
  },
  num2:{
    alignSelf:'center',
    paddingTop:7
  },
room:{
  paddingTop:10,
  paddingLeft:10
},
bed:{
  paddingLeft:10,
  paddingTop:1,
},
  cardCol:{
    flexDirection:'column',
    paddingLeft:0,
    flex:1
  },
  wifi:{
    marginLeft:10
  },
  edit:{
      marginLeft:30
  },
  new:{
    margin:5,
    width:190
  },
  cardRow:{
    flexDirection:'row',
    paddingBottom:5
  },
  pic:{
    // flex: 1,
    width: 350,
    height: 100,
    // resizeMode: 'contain'
  },
  btn:{
    width:284
  },
  new:{
    alignItems:'center'
  }
})