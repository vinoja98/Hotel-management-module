import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
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
      }
})
export const images={
    ratings:{
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),
    }
}