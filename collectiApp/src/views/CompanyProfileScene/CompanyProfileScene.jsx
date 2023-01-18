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

import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CompanyProfileScene = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));
    const userVar = await AsyncStorage.getItem("user")
    setUser(JSON.parse(userVar));
  };
  useEffect(() => {
    handleChange();
  }, []);
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user);
  }, [user]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

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
              source={require("../../../assets/menu-bg.jpeg")}
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
            source={{ uri: "https://i.ibb.co/wg9Qvtp/logo2.png" }}
          />
          <Text
            style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold" }}
          >
            {/* {user ?
                user.name
            :""
          } */}
            {/* {user.name} */}
            {/* Organisation Name */}
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
        </View>
        <View style={styles.descSection}>
          <Text style={styles.desc}> Organisation Description </Text>
          <Text>
          {/* {user ?
                user.description
            :""
          } */}
          </Text>
        </View>
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
    </View>
  );
};
export default CompanyProfileScene;
