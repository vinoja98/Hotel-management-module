import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,TextInput,Button} from 'react-native';
import { globalStyles,images } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup'

const FoodSchema=yup.object({
    
})

export default function FoodForm({addFood}) {
    return (
      <View style={globalStyles.container}>
        <Formik
            initialValues={{name:'',price:'',description:'',rating:''}}
            onSubmit={(values,actions)=>{
                    addFood(values)
                    // actions.resetForm()
            }}>
            {(props)=>(
                <View>
                    <TextInput style={globalStyles.input}
                        placeholder='Name of Food Item'
                        onChangeText={props.handleChange('name')}
                        value={props.values.name}/>
                     <TextInput style={globalStyles.input}
                        placeholder='Price'
                        onChangeText={props.handleChange('price')}
                        value={props.values.price}
                        keyboardType='numeric'/>
                     <TextInput style={globalStyles.input}
                        multiline
                        placeholder='Description of Food Item'
                        onChangeText={props.handleChange('description')}
                        value={props.values.description}/>
                     <TextInput style={globalStyles.input}
                        placeholder='Rating(4/5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        keyboardType='numeric'/>
   
                    <Button color='#80593a' title='add' onPress={props.handleSubmit}/>
                </View>
            )
            }
        </Formik>
      </View>
    );
  }