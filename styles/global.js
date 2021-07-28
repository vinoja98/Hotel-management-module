import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    front:{
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        width:'100%',
        height:'100%'
    },
    container: {
        flex:1,
        padding:24
      },
      itemText:{
          fontFamily:'nunito-regular'
          ,fontSize:18,
          color:'#03498f'
      },
      paragraph:{
          marginVertical:8,
          lineHeight:20
      },
      input:{
          borderWidth:1,
          borderColor:'#03498f',
          padding:10,
          fontSize:18,
          borderRadius:6
      },
      errorText:{
          color:'#03498f',
          fontFamily:'nunito-bold',
          marginBottom:10,
          textAlign:'center',
          marginTop:6
      },
      modalToggle:{
        color:'#03498f',
        marginBottom:10,
        borderWidth:1,
        borderColor:'#08b8e1',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
      marginTop:20,
      marginBottom:0
    },
    modalContent:{
        flex:1,
    
      },
})
export const images={
    ratings:{
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}