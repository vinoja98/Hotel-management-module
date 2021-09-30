import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,StatusBar,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard,ImageBackground} from 'react-native';
import { globalStyles,images } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/card';
import ReviewReply from './reviewReply'
const image = { uri: "https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png" };

export default function ReviewDetails({navigation,props}) {
 
  
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
    <ImageBackground source={image} resizeMode="cover" style={globalStyles.image}>
      <View style={globalStyles.container}>
      <StatusBar backgroundColor="#03498f" barStyle="light-content" />
            <FlatList
            data={reviews}
             renderItem={({item})=>(             
              <Card>
                <View  style={styles.cardCol}>  
                    <View style={styles.cardRow}>
                          <Text style={globalStyles.itemText}>{item.name}</Text>
                          <Image style={styles.pic} source={images.ratings[item.rating]}/>
                    </View>
                      <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>{item.review}</Text>
                      </View>
                      <View style={styles.cardRow}>
                           <Text style={globalStyles.itemText}>{item.createdAt.substring(0,10)}</Text>
                           <Text style={globalStyles.itemText}> at {item.createdAt.substring(11,16)}</Text>
                      </View>
                      <View style={[styles.cardRow,globalStyles.blackText]}>
                           <Text style={globalStyles.itemText}>Reply : {item.reply}</Text>
                           
                        </View>
                        <View style={styles.add}> 
                           <TouchableOpacity onPress={()=>navigation.navigate('ReviewReply',item)}>
                             <Text style={globalStyles. blackText}>Add Reply</Text>
                          </TouchableOpacity>
                        </View>
                  </View>
                 </Card>     
             )}
             keyExtractor={item=>item._id}
             onRefresh={()=>fetchReviews()}
             refreshing={loading}
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
    width:'100%',
    alignSelf:'center'
  },
  cardCol:{
    flexDirection:'column',
    paddingLeft:5,
    flex:1
  },
  cardRow:{
    flexDirection:'row'
  },
  pic:{
    flex: 1,
    width: 185,
    height: 15,
    resizeMode: 'contain'
    // flex: 1,
    // aspectRatio: 0.2, 
    // resizeMode: 'contain',
    // flex: 1,
    // width: '100%',
    // height: '100%',
    // resizeMode: 'cover', 
  },
})