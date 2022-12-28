import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width :"100%",
        display : "flex",
        flexDirection:"column",
        gap : 10,
        
    },
    form:{
        width:"100%",
        borderRadius:20,
        marginTop:-30,
        flex:1,
        elivation:3,
        backgroundColor : "white",
        padding:12,
    },
    desc:{
        fontSize: 14,
        marginTop:8,
        fontWeight: "bold",
        borderLeftWidth: 3,
        borderLeftColor: "#432C7A",
        paddingLeft: 8,
        
    },
    backButton:{
        height: 50,
        width: 50,
        
        borderRadius : 30,
    },
    backGroundPic:{
        width: "100%",
        height : 300,
        
    },
    submitButton:{
        marginTop: 12,
        width: "80%",
        alignSelf: "center",
        borderRadius: 12,
    },
    flexContainer:{
        display:"flex",
        width : "100%",
        flexDirection : "row",
        justifyContent : "center",
    }
});

export { styles }