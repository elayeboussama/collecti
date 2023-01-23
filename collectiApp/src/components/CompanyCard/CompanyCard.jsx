import { Avatar, Button, Chip } from "@rneui/themed";
import React from "react";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Divider } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const CompanyCard = ({ navigation, org, stack }) => {

  function formatDate(date) {
    const newDate = new Date(date)
    const currentMonth = newDate.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = newDate.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${newDate.getFullYear()}-${Number(monthString)+1}-${currentDate}`;
  }
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftSection}>
        <View
          style={{
            height: 200,
            width: "100%",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <Image
            source={org.cover ? {  uri: `http://192.168.56.1:8080/${org.cover}`} : require("../../../assets/goose-funky.png")}
            style={{
              padding: 20,
              borderRadius: 12,
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </View>
        <View
          style={{
            height: 100,
            width:  100,
            marginTop: -50,
            marginLeft: 12,
          }}
        >
          <Image
            source={org.logo ? {  uri: `http://192.168.56.1:8080/${org.logo}`} :require("../../../assets/menu-bg.jpeg")}
            style={{
              padding: 20,
              borderRadius: 100,
              width: "100%",
              height: "100%",
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.eventName}>{org.name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 12,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="event"
              size={18}
              color="#333"
            />
            <Text style={{ fontSize: 14 }}>{org.events.length}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="verified-user" size={18} color="#333" />
            <Text style={{ fontSize: 14 }}>8 Office members</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="more-time" size={18} color="#333" />
            <Text style={{ fontSize: 14 }}>{org ? formatDate(org.creationDate) :"" }</Text>
          </View>
        </View>
        <View style={styles.chips}>
          <Chip
            title="Sector"
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
          <Chip
            title="Location"
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
          <Chip
            title="Start Date"
            containerStyle={{ width: 80, marginLeft: 8 }}
            titleStyle={{ fontSize: 8 }}
          />
        </View>
        <Divider />
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionLeft}
            onPress={() => {
              navigation.navigate("CompanyProfile", {org:org, stack:stack, item:org})
            }}
          >
            <View style={styles.actionLeft}>
              <Text style={{ fontSize: 14 }}>Details</Text>
              <MaterialIcons name="arrow-forward" size={18} color="#333" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CompanyCard;
