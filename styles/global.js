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
        paddingTop:20,
        padding:24,
        
      },
      itemText:{
          fontFamily:'nunito-regular'
          ,fontSize:15,
          color:'#03498f'
      },
      blackText:{
        fontFamily:'nunito-bold'
        ,fontSize:15,
        color:'#03498f'
      },
      text:{
        fontFamily:'nunito-bold'
        ,fontSize:15,
        color:'#dcdbdb'
      },
      paragraph:{
          marginVertical:8,
          lineHeight:20
      },
      input:{
          borderWidth:0,
          borderColor:'#03498f',
        //   padding:0,
          fontSize:15,
          borderRadius:0
      },
      errorText:{
          color:'#03498f',
          fontFamily:'nunito-bold',
          marginBottom:10,
          textAlign:'center',
          marginTop:6
      },
      color:{
        backgroundColor:'#e4e2e2'
      },
      modalToggle:{
        color:'black',
        marginBottom:2,
        borderWidth:1,
        borderColor:'#03498f',
        backgroundColor:'#08b8e1',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        opacity:0.7
    },
    modalClose:{
      marginTop:5,
      marginBottom:-5
    },
    modalContent:{
        flex:1,
    
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
})
export const images={
    ratings:{
        '1':require('../assets/star1.png'),
        '2':require('../assets/star2.png'),
        '3':require('../assets/star3.png'),
        '4':require('../assets/star4.png'),
        '5':require('../assets/star5.png'),
    }
}