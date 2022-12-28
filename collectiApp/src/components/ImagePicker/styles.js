import { StyleSheet } from "react-native";

const orgStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:250,
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
        height:250,
        width:"100%",
        backgroundColor:'#efefef',
        position:'relative',
        borderBottomLeftRadius:12,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:1,
        position:'absolute',
        top:8,
        right:8,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'white',
        
        width:'12%',
        borderRadius:999,
        height:'17%',
    
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },
    emptyContainer:{
        // top:5,
        // borderRadius:12,
        width:"100%",
        height:"100%",
        backgroundColor:"#DEBACE",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderStyle:"dashed"
    }
})
export  {eventStyles, orgStyles};