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

import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useGetAllEventsByOrgMutation,
  useGetAllEventsQuery,
} from "../../../redux/endpoints/EventEndpoints";
import { FlatList } from "react-native-gesture-handler";
const EventProfileScene = () => {
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
    <View style={styles.container}>
      <ScrollView>
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
              source={require("../../../assets/event.png")}
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
            Event Name
          </Text>
          <View style={styles.chips}>
            <Chip
              title="key_word"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
            />
            <Chip
              title="key_word"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
            />
            <Chip
              title="key_word"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
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
              <MaterialIcons
                name="supervised-user-circle"
                size={18}
                color="#333"
              />
              <Text style={{ fontSize: 14 }}>status</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="verified-user" size={18} color="#333" />
              <Text style={{ fontSize: 14 }}>creation date</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="more-time" size={18} color="#333" />
              <Text style={{ fontSize: 14 }}>date</Text>
            </View>
          </View>
        </View>
        <View style={styles.descSection}>
          <Text style={styles.desc}> Description </Text>
          <Text style={{ marginBottom: 12 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make{" "}
          </Text>

          <Text style={styles.desc}> Catch phase </Text>
          <Text style={{ marginBottom: 12 }}>this is the catch phrase</Text>
          <Text style={styles.desc}> Category </Text>
          <Text style={{ marginBottom: 12 }}>this is the Category</Text>
          <View style={styles.chips}>
            <Chip
              title="Raised Money"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
            />
            <Chip
              title="Required Fund"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
            />
            <Chip
              title="Donators"
              containerStyle={{ width: 80, marginLeft: 8 }}
              titleStyle={{ fontSize: 8 }}
            />
          </View>
        </View>
        <FAB
          visible={true}
          icon={{ name: "edit", color: "white" }}
          placement="right"
          color="#432C7A"
        />
      </ScrollView>
    </View>
  );
};
export default EventProfileScene;
