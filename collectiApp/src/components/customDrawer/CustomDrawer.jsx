import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import { useOrgDetailsQuery } from "../../../redux/endpoints/AuthEndpoints";

const CustomDrawer = (props) => {
  const [user_id, setUserId] = useState();
  const [token, setToken] = useState();
  const [user, setUser] = useState({email:""});
  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));
    const userVar = await AsyncStorage.getItem("user")
    setUser(JSON.parse(userVar));
    setUserId(JSON.parse(userVar._id));
  };
  useEffect(() => {
    handleChange();
  }, []);
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user);
    
  }, [user]);


 
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
        <ImageBackground
          source={user ? {  uri: `http://192.168.56.1:8080/${user.cover}`} : require("../../../assets/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={user ? {  uri: `http://192.168.56.1:8080/${user.logo}`}: require("../../../assets/collecti (1).svg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              elevation:3
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Roboto-Medium",
              marginBottom: 5,
            }}
          >
            {user ? user.name :""}
          </Text>
          {/* <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Roboto-Regular",
                marginRight: 5,
              }}
            >
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View> */}
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ paddingHorizontal: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        {/* <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity> */}
        {user?
          <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            props.navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
            NativeModules.DevSettings.reload();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto-Medium",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
        
        :""
      
      }
      </View>
    </View>
  );
};

export default CustomDrawer;
