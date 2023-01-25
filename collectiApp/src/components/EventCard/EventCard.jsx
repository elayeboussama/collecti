import { Avatar, Button, Chip } from "@rneui/themed";
import React, { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Divider } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
<<<<<<< Updated upstream
import { useGetAllOrgsQuery } from "../../../redux/endpoints/OrganizationEndpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
=======
import { useGetAllEventsQuery, useGetAllOrgsQuery } from "../../../redux/endpoints/EventEndpoints";

>>>>>>> Stashed changes

const EventCard = ({item,navigation,stack, stackPrev}) => {
  
  const [currentUser, setCurrentUser] = useState();
  const handleChange = async () => {
    const userVar = await AsyncStorage.getItem("user")
    setCurrentUser(JSON.parse(userVar));
  };
  useEffect(() => {
    if(AsyncStorage.getItem("user")){
      handleChange();
    }
    
  }, []);
  useEffect(() => {
    if(currentUser){
      console.log("scene event user =>", currentUser);
      
    }
    
  }, [currentUser,]);
  const [user, setUser]=useState()
  // const navigation = useNavigation();
  function formatDate(date) {
    const newDate = new Date(date)
    const currentMonth = newDate.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = newDate.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${newDate.getFullYear()}-${Number(monthString)+1}-${currentDate}`;
}
  const {
    data: organization,
    error,
    isLoading,
    isSuccess,
  } = useGetAllOrgsQuery();
  
  useEffect(() => {
    

      if(organization){
        if(organization.organization){
          setUser(organization.organization.filter((e)=>{return e._id==item.organization_id})[0])
        }
      }
  
  }, [organization])
  const [logo, setLogo]=useState("")
  const [image, setImage]=useState("")

  useEffect(()=>{
    
    if(user){
      if( user.logo.split("/")[0] == "https:" ){
        setLogo(user.logo)
      }else if(user.logo.split("/")[0] == "uploads"){
        setLogo(`http://192.168.56.1:8080/${user.logo}`)
      }else if (user.logo.split("\\")[0] == "uploads"){
        setLogo(`http://192.168.56.1:8080/${user.logo}`)
      }
    }
  },[user])

  useEffect(()=>{
    if(item){
      if( item.image[0] && item.image[0].split("/")[0] == "https:" ){
        setImage(item.image[0])
      }else if (item.image[0] && item.image[0].split("/")[0] == "https: " ){
        setImage(item.image[0])
      }else if (item.image[0] && item.image[0].split("/")[0] == "uploads"){
        setImage(`http://192.168.56.1:8080/${item.image[0]}`)
      }else if (item.image[0] && item.image[0].split("\\")[0] == "uploads"){
        setImage(`http://192.168.56.1:8080/${item.image[0]}`)
      }
    }
  },[item])
  
console.log("de74: ",item)



  return (
    <View>
      {item && user? 
        
      <View style={styles.cardContainer}>
      <View style={styles.headerSection}>
        <Avatar
          size={32}
          rounded
          source={user && user.logo && logo!=""? {  uri: logo}: require("../../../assets/logo2.png")}
        />
        
        <Text style={{marginLeft:10, marginBottom:5, fontSize:20}}>
          {user.name
            ? user.name
            : "Organization name"} 
        </Text>
      </View>
      <View style={styles.leftSection}>
        <View
          style={{
            height: 250,
            width: "100%",
          }}
        >
          <Image
            source={item && item.image[0] && image!="" ? {uri : image}: require("../../../assets/event.png")}
            style={{
              padding: 20,
              borderRadius: 12,
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text> {item.description}</Text>

        <View style={styles.chips}>
          <View style={styles.chip}>
            <MaterialIcons name="domain" size={15} color="#fff"/>
            <Text style={{color: "#fff", fontSize:12}}>{item.category}</Text>
          </View>
          <View style={styles.chip}>
            <MaterialIcons name="attach-money" size={18} color="#fff"/>
            <Text style={{color: "#fff", fontSize:12}}>donators : {item.donators}</Text>
          </View>
          <View style={styles.chip}>
            <MaterialIcons name="more-time" size={18} color="#fff"/>
            <Text style={{color: "#fff", fontSize:12}}>{formatDate(item.date)}</Text>
          </View>
          
        </View>
        <Divider />
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={()=>{navigation.navigate("Donate",{item:item, stack:stack, stackPrev:stackPrev})}}
            style={styles.actionLeft}>
            <View style={styles.actionLeft}>
              <Text style={{ fontSize: 14 }}>Donate</Text>
              <MaterialIcons name="attach-money" size={18} color="#333" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>{navigation.navigate("EventProfile",{item:item, user:user, stack:stack, stackPrev:stackPrev})}} style={styles.actionLeft}>
            <View style={styles.actionLeft}>
              <Text style={{ fontSize: 14 }}>Details</Text>
              <MaterialIcons name="arrow-forward" size={18} color="#333" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>  

    : <ActivityIndicator/>
    }

  </View>
  );
};

export default EventCard;
