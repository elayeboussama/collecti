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
import { useGetAllOrgsQuery } from "../../../redux/endpoints/OrganizationEndpoints";

const EventCard = ({item }) => {
  
  const [user, setUser]=useState()

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
    
    console.log("you are here :",organization)
    // if(organizations_data){
    //   setUser(organizations_data.organization.map((e)=>{console.log("zzzzzzzzzzzssssssssssssssssssssssss: ",e._id==item.organization_id)}))
    // }
  
  }, [organization])
  
console.log("de74: ",item)

const category = item.category
const date = item.date
const requirementFunds = item.requirementFunds

  return (
    <View>
      {category!=undefined && requirementFunds!=undefined && date!=undefined ? 
        
      <View style={styles.cardContainer}>
      <View style={styles.headerSection}>
        <Avatar
          size={32}
          rounded
          source={user? {  uri: `http://192.168.56.1:8080/${user.logo}`}:{ uri: "https://i.ibb.co/wg9Qvtp/logo2.png" }}
        />
        
        {/* <Text>
          {organization_data.name
            ? organization_data.name
            : "Organization name"} 
        </Text>*/}
      </View>
      <View style={styles.leftSection}>
        <View
          style={{
            height: 250,
            width: "100%",
          }}
        >
          <Image
            source={require("../../../assets/event.png")}
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
          <Chip
            title={"category"}
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
          <Chip
            title={"requirementFunds"}
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
          <Chip
            title={"date"}
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
        </View>
        <Divider />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionLeft}>
            <View style={styles.actionLeft}>
              <Text style={{ fontSize: 14 }}>Donate</Text>
              <MaterialIcons name="attach-money" size={18} color="#333" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionLeft}>
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
