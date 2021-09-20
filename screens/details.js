import React,{useEffect,useState} from 'react';
import { Alert,StyleSheet, Text, View,Image,FlatList,StatusBar,Modal,TouchableWithoutFeedback,Keyboar,TouchableOpacity} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';

export default function Details() {
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
        <MaterialIcons
          name='add'
          size={24}
          style={ globalStyles.modalToggle}
          
        />
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
                           <Text style={globalStyles. blackText}>Name  : </Text><Text style={globalStyles.itemText}>Waiter1</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Address : </Text>
                           <Text style={globalStyles.itemText}>No7, Highlevel road</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Phone : </Text>
                           <Text style={globalStyles.itemText}>0789657777</Text>
                           </View>
                           <View style={styles.cardRow}>
                           <Text style={globalStyles. blackText}>Salary : </Text>
                           <Text style={globalStyles.itemText}>Rs 40,000</Text>
                           </View>
                       </View>
                       <View style={styles.iconCol}>
                            <TouchableOpacity >
                            <MaterialIcons name='delete' size={28} style={styles.edit}/>
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
    paddingTop:0,
    color:'#03498f'
   },
})