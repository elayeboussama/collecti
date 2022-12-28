import { StyleSheet } from "react-native";

const orgStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})
const eventStyles=StyleSheet.create({
    container:{
        height:200,
        width:"100%",
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:12,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:1,
        position:'absolute',
        right:0,
        
        backgroundColor:'lightgrey',
        width:'15%',
        borderRadius:999,
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})
export  {eventStyles, orgStyles};