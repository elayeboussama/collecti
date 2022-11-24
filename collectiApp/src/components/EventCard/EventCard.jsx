import { Avatar, Button, Chip } from "@rneui/themed";
import React from "react";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Divider } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const EventCard = ({ title }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerSection}>
        <Avatar
          size={32}
          rounded
          source={{ uri: "https://i.ibb.co/wg9Qvtp/logo2.png" }}
        />
        <Text> Organisation Name </Text>
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
        <Text style={styles.eventName}>Event Name</Text>
        <Text>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          quisquam quaerat assumenda minus. Harum animi minima sapiente
        </Text>

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
  );
};

export default EventCard;
