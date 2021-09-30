import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Platform,Button,Keyboard,Alert,TouchableOpacity} from 'react-native';
import { TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };
import * as yup from 'yup'
import FlatButton from '../shared/button';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {MaterialIcons} from '@expo/vector-icons'

export default function RoomBookingForm({open, setOpen, room, navigation}) {
  const[customerName,setName]=useState("")
  const[startDate,setDate]=useState(new Date())
  const[endDate,setDate2]=useState(new Date())
  const[customerEmail,setcustomerEmail]=useState("")
  const[customerContactNumber,setcustomerContactNumber]=useState("")
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    setDate(date)
    hideDatePicker();
  };

  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleConfirm2 = date => {
    // console.warn("A date has been picked: ", date);
    setDate2(date)
    hideDatePicker2();
  };

  const submitBooking=()=>{
    const data={
      customerName,
      customerEmail,
      customerContactNumber,
      startDate,
      endDate,
      room:room._id
    }
    if(data.customerEmail && data.customerContactNumber && data.customerName ){
    fetch('http://10.0.2.2:5000/booking/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName,
        customerEmail,
        customerContactNumber,
        startDate,
        endDate,
        room:room._id
         
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // setFoodItems((prevFood)=>{
      //   return [data, ...prevFood]
      //  })
      console.log(data)
      Alert.alert('Room booking added')
      setOpen(false)
    
    })
    .catch(err=>{
      Alert.alert("Something went wrong")
    })
  }else{
    Alert.alert("Please fill all the details")
  }
}
    return (
      // <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <View style={globalStyles.container}>
       <Text style={globalStyles.blackText}>Room No - {room?.roomNo}</Text>
        <Formik
            initialValues={{customerName:'',customerEmail:'',customerContactNumber:'',startDate:'',endDate:''}}>
            {/* validationSchema={foodSchema}
            onSubmit={(values,actions)=>{
                    onsubmit(values)
                    actions.resetForm()
            }}
       */}
            {(props)=>(
                <View> 
                    <TextInput style={globalStyles.input}
                        label="Customer's Name"
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text => setName(text)}
                        value={customerName}
                        
                        />
                         <TextInput style={globalStyles.input}
                        label="Customer's Email"
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text => setcustomerEmail(text)}
                        value={customerEmail}
                        
                        />
                         <TextInput style={globalStyles.input}
                        label="Customer's Contact Number"
                        mode="outlined"
                        theme={
                          {
                            fonts: {
                              regular: {
                                fontFamily: 'nunito-bold'
                              }
                            },
                            colors:{
                              primary:'#08b8e1',
                              accent:'#03498f',
                              placeholder:'#03498f',
                              text:'#08b8e1'
                            }
                          }
                        }
                        onChangeText={text => setcustomerContactNumber(text)}
                        value={customerContactNumber}
                        keyboardType='numeric'
                        
                        />
                     {/* <Button title="Show Start Date Picker" onPress={showDatePicker} /> */}
                     <TouchableOpacity onPress={showDatePicker}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Show Start Date Picker</Text>
                      </View>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                      minimumDate={new Date()}
                      date={startDate}
                      onDateChange={date1=>setDate(date1)}
                    />
                      <TouchableOpacity onPress={showDatePicker2}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Show End Date Picker</Text>
                      </View>
                    </TouchableOpacity>
                    {/* <Button title="Show End Date Picker" onPress={showDatePicker2} /> */}
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible2}
                      mode="date"
                      onConfirm={handleConfirm2}
                      onCancel={hideDatePicker2}
                      minimumDate={startDate}
                      date={endDate}
                      onDateChange={date1=>setDate2(date1)}
                    />
                    <FlatButton text='Add' onPress={submitBooking}/>
                </View>
            )
            }
            
        </Formik>
      </View>
      // </ImageBackground>
    );
  }

  const styles= StyleSheet.create({
    button:{
      marginTop:4,
      borderRadius:6,
      paddingVertical:12,
      paddingHorizontal:10,
      borderWidth:1,
      backgroundColor:'white',
      borderColor:'#03498f',
      opacity:0.8
  },
  buttonText:{
    color:'#03498f',
    fontFamily:'nunito-bold',
    // textTransform:'uppercase',
    fontSize:15,
    textAlign:'center'
  },
    
  })
