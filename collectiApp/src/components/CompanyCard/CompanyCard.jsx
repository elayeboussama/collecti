import { Avatar, Button, Chip } from "@rneui/themed";
import React from "react";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Divider } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";


const CompanyCard = ({ navigation }) => {
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
            source={require("../../../assets/event.png")}
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
            height: 80,
            width: "40%",
            marginTop: -50,
            marginLeft: 12,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <Image
            source={require("../../../assets/menu-bg.jpeg")}
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
        <Text style={styles.eventName}>Company Name</Text>
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
            <Text style={{ fontSize: 14 }}>200 member</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="verified-user" size={18} color="#333" />
            <Text style={{ fontSize: 14 }}>8 Office members</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="more-time" size={18} color="#333" />
            <Text style={{ fontSize: 14 }}>2 Years</Text>
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
            onPress={() => navigation.push("CompanyProfile")}
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
