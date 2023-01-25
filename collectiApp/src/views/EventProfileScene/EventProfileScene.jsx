import {
  Avatar,
  BottomSheet,
  Button,
  Chip,
  Divider,
  FAB,
  Input,
  ListItem,
  useTheme,
} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { Text, View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useGetAllEventsByOrgMutation,
  useGetAllEventsQuery,
} from "../../../redux/endpoints/EventEndpoints";
import { FlatList } from "react-native-gesture-handler";
import { isError } from "lodash";
const EventProfileScene = ({navigation, route}) => {
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
    if(currentUser!=undefined){
      console.log("scene event user =>", currentUser);
      if(currentUser._id){
        console.log("scene event user =>", currentUser._id==item.organization_id);
      }
    }
    
  }, [currentUser,]);
  const item = route.params.item
  const user = route.params.user
  const stack = route.params.stack
  const stackPrev = route.params.stackPrev
  console.log("sce^voievropeniv",stack)

  function formatDate(date) {
    const newDate = new Date(date);
    const currentMonth = newDate.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = newDate.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${newDate.getFullYear()}-${Number(monthString) + 1}-${currentDate}`;
  }

  // const dataEvents= user &&

  // const [events, setEvents] =useState([])
  // useEffect(async() => {
  //   if(user){
  //     const dataEvents= await getAllEventsByOrg({events:user.events}).unwrap()
  //     setEvents(dataEvents)
  //   }
  // }, [user]);
  // useEffect(() => {
  //   console.log("bbbbbbbbbbbbbbb", events);
  // }, [events]);

  return (
    <>
      {item && user?
        <View style={styles.container}>
        <ScrollView>
        
          <TouchableOpacity onPress={()=>{navigation.navigate(stackPrev,{stack:stack})}} style={{width:"20%", marginTop:10, marginLeft:10}}>
            <MaterialCommunityIcons name="arrow-left-circle-outline" size={25} color="#3B0081"/>
          </TouchableOpacity>
          <View style={styles.headerSection}>
            <View
              style={{
                height: 200,
                width: "99%",
                alignSelf: "center",
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}
            >
              <Image
                source={item.image[0] ? {uri : `${item.image[0]}`}: require("../../../assets/event.png")}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  width: "100%",
                  height: "100%",
                }}
              ></Image>
            </View>
            <Text
              style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold" }}
            >
              {item.name}
            </Text>
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
            <Divider style={{ width: "90%", alignSelf: "center" }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 12,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  name="supervised-user-circle"
                  size={18}
                  color="#333"
                />
                <Text style={{ fontSize: 14 }}>requirement : {item.requirementFunds}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {item.status=="approved" ? 
                      <MaterialIcons name="verified-user" size={18} color="#128904" />
                    :
                      <Octicons name="unverified" size={18} color="#B64500" />

                    }
                
                <Text style={{ fontSize: 14 }}>{item.status}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="attach-money" size={18} color="#333"/>
                <Text style={{ fontSize: 14 }}>funds : {item.raisedMoney}</Text>
              </View>
            </View>
          </View>
          <View style={styles.descSection}>
            <Text style={styles.desc}> Description </Text>
            <Text style={{ marginBottom: 12, paddingLeft:10 }}>
              {item.description}
            </Text>
  
            <Text style={styles.desc}> Catch phase </Text>
            <Text style={{ marginBottom: 12, paddingLeft:10 }}>{item.catchPhrase}</Text>
            <Text style={styles.desc}> raised Money  </Text>
            <Text style={{ marginBottom: 12, paddingLeft:10 }}>{item.raisedMoney} $</Text>
            
          </View>
          {
            currentUser && item.organization_id == currentUser._id ?
              <FAB
              visible={true}
              icon={{ name: "edit", color: "white" }}
              placement="right"
              color="#432C7A"
              onPress={()=>{navigation.navigate("EventEdit",{item:item, stack:stack})}}
            />
            :""
          }
          
        </ScrollView>
      </View>  
      : 
      <ActivityIndicator/>
    
    }
    
    
    </>
  );
};
export default EventProfileScene;
