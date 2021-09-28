import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Platform,Button,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard,Alert,ImageBackground} from 'react-native';
import { TextInput} from 'react-native-paper';
import { globalStyles,images } from '../styles/global';
import { Formik,  Form, Field, ErrorMessage } from 'formik';
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };
import * as yup from 'yup'
import FlatButton from '../shared/button';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'

export default function RoomBookingForm({navigation ,setModelOpen}) {
  const[customerName,setName]=useState("")
  const[startDate,setDate]=useState(new Date())
    const[endDate,setDate2]=useState(new Date())
    const[room,setRoom]=useState("")
    const[loading,setLoading]=useState(true)
    const[rooms,setRooms]=useState([])

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
  const submitBooking=()=>{
    fetch('http://10.0.2.2:5000/booking/add',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerName,
        startDate,endDate,room
          // rating,
         
      })
    })
    .then(res=>res.json())
    .then(data=>{
      // setFoodItems((prevFood)=>{
      //   return [data, ...prevFood]
      //  })
      
      Alert.alert(`food item ${data.name} added`)
      setModelOpen(false)
    
    })
    .catch(err=>{
      Alert.alert(err)
    })
  }
    return (
      <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <View style={globalStyles.container}>
       
        <Formik
            initialValues={{name:'',email:'',password:''}}>
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
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setName(text)}
                        value={customerName}
                        
                        />
                     
                      <Dropdown 
                         
                          label="Room"
                          data={rooms.map(item=> ({value:item.roomNo}))}
                          // data={items}
                          onChangeText={item => setRoom(item)}
                        value={room}
                       />
                      
                       
                        {/* <TextInput style={globalStyles.input}
                        label='Room'
                        mode="outlined"
                        theme={{colors:{primary:"#08b8e1"}}}
                        onChangeText={text => setRoom(text)}
                        value={room} //here put a dropdown to select entire room object from db, this dropdown should be taken from the backend
                        keyboardType='numeric'
                        /> */}
                     <Button title="Show Start Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
        date={startDate}
        onDateChange={date1=>setDate(date1)}
      />
      <Button title="Show End Date Picker" onPress={showDatePicker2} />
       <DateTimePickerModal
        isVisible={isDatePickerVisible2}
        mode="date"
        onConfirm={handleConfirm2}
        onCancel={hideDatePicker2}
        minimumDate={startDate}
        date={endDate}
        onDateChange={date1=>setDate2(date1)}
      />
                   
                
                    <FlatButton text='Add'/>
                </View>
            )
            }
            
        </Formik>
      </View>
      </ImageBackground>
    );
  }