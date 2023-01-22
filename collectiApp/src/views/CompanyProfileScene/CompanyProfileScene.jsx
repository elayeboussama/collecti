import {
  Avatar,
  BottomSheet,
  Button,
  Chip,
  Divider,
  Input,
  ListItem,
  useTheme,
} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { Text, View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {  useGetAllEventsByOrgMutation, useGetAllEventsQuery } from "../../../redux/endpoints/EventEndpoints";
import { FlatList } from "react-native-gesture-handler";
import { useRoute } from '@react-navigation/native';
const CompanyProfileScene = ({navigation, route}) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [events, setEvents] = useState();
  var stack="Home"
  if(route){
    if(route.params){
      if(route.params.stack){
        stack = route.params.stack
      }
    }
    
  }
 
  const 
  [ getAllEventsByOrg, { isLoading }] = useGetAllEventsByOrgMutation();

  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));

    var userVar = await AsyncStorage.getItem("user")
    if(route){
      if(route.params){
        if(route.params.item){
          userVar = route.params.item
          setUser(route.params.item);
        }
      }
      
    }else{
      setUser(JSON.parse(userVar));
    }
    
  };
  useEffect(() => {
    handleChange();
  }, []);
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user);
    if(user){
      if(user.events){
        getAllEventsByOrg({events: user.events}).unwrap().then((payload)=>{
          console.log("aqwaqwaqwaqw: ",payload.event[0].image)
          setEvents(payload.event)
        })
      }
    }
  }, [user,]);

  useEffect(() => {
    console.log("zzzzzzzzzssssxxx: ",events)
  }, [events]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  function formatDate(date) {
    const newDate = new Date(date)
    const currentMonth = newDate.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = newDate.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${newDate.getFullYear()}-${Number(monthString)+1}-${currentDate}`;
  }

 


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

const ListEvents = () =>{
  return(
    <FlatList
      data={events}
      renderItem={({ item }) => <EventCard stack={route.name} navigation={navigation} item={item} user={user} /> }
      keyExtractor={item => item._id}
    />
  )
}
  return (
   
      <View style={styles.container}>
         { user ?
         <ScrollView>
          <TouchableOpacity onPress={()=>{navigation.navigate(stack)}} style={{width:"20%", marginTop:10, marginLeft:10}}>
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
                source={{  uri: `http://192.168.56.1:8080/${user.cover}`}}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  width: "100%",
                  height: "100%",
                }}
              ></Image>
            </View>
            <Avatar
              size={160}
              containerStyle={{ marginTop: -80, alignSelf: "center" }}
              rounded
              source={ {  uri: `http://192.168.56.1:8080/${user.logo}`}}
            />
            <Text
              style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold" }}
            >
              {user ?
                  user.name
              :""
            }
              {/* {user.name} */}
              {/* Organisation Name */}
            </Text>
            <View style={styles.chips}>
              
              <Chip
                title={user.sector}
                icon={{
                  name: 'domain',
                  type: 'MaterialIcons',
                  size: 20,
                  color: "#fff",
                }}
                type="solid"
                containerStyle={{ marginVertical: 15, marginHorizontal: 5 }}
              />
              <Chip
                title={user.status}
                icon={{
                  name: 'fiber-manual-record',
                  type: 'MaterialIcons',
                  size: 20,
                  color: user.status=="approved"?"#008A1F":"#D2630B",
                }}
                type="outline"
                containerStyle={{ marginVertical: 15, marginHorizontal: 5 }}
              />
              <Chip
                title={user.location}
                icon={{
                  name: 'location-pin',
                  type: 'MaterialIcons',
                  size: 20,
                  color: "#fff",
                }}
                type="solid"
                containerStyle={{ marginVertical: 15, marginHorizontal: 5 }}
              />
              
              
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
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={18}
                  color="#333"
                />
                <Text style={{ fontSize: 14 }}>{user.directorName}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="event" size={18} color="#333" />
                <Text style={{ fontSize: 14 }}>events: {user.events.length}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="more-time" size={18} color="#333" />
                <Text style={{ fontSize: 14 }}>{user ? formatDate(user.creationDate) :"" }</Text>
              </View>
            </View>
          </View>
          <View style={styles.descSection}>
            <Text style={styles.desc}> Organisation Description </Text>
            <Text>
            {user ?
                  user.description
              :""
            }
            </Text>
          </View>
          <View style={styles.descSection}>
            <Text style={styles.desc}> Organisation Actions Plan </Text>
            
            {/* {user ?
                  <FlatList
                  data={user.planActions.split(",")}
                  renderItem={({ item }) => <Text> * {item}</Text> }
                  keyExtractor={item => item._id}
                />
                  
              :""
            } */}
          </View>

          <View style={styles.descSection}>
            <Text style={styles.desc}> Organisation Vision </Text>
            <Text>
            {user ?
                  user.Vision
              :""
            }
            </Text>
          </View>
          <View style={styles.descSection}>
            <Text style={styles.desc}> Events </Text>
            {events &&
               <ListEvents/>
            }
          </View>
        </ScrollView>
        :<ActivityIndicator/>
      }
      </View>
    
  );
};
export default CompanyProfileScene;
