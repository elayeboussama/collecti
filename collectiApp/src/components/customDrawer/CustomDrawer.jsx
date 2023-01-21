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
<<<<<<< Updated upstream
=======
  const [token, setToken] = useState();
  const [user, setUser] = useState({email:""});
  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));
    const userVar = await AsyncStorage.getItem("user")
    setUser(JSON.parse(userVar));
  };
  useEffect(() => {
    handleChange();
  }, []);
  var email = ""
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user);
    if(user.email!=""){
      email = user.email
    }
  }, [user]);
>>>>>>> Stashed changes

  const handleChangeId = async () => {
    setUserId(await AsyncStorage.getItem("user_id"));
  };
  useEffect(() => {
    handleChangeId();
  }, []);
  useEffect(() => {
    console.log(user_id);
  }, [user_id]);
  const {
    data: organization_data,
    error,
    isLoading,
    isSuccess,
  } = useOrgDetailsQuery(user_id);
  const handleAddName = async () => {
    await AsyncStorage.setItem("name", organization_data.organization.name);
  };
  useEffect(() => {
    console.log("aaaaaaaaaaaaaaaaa", organization_data);
  }, [organization_data]);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
      >
<<<<<<< Updated upstream
        {organization_data && (
          <ImageBackground
            source={require("../../../assets/menu-bg.jpeg")}
            style={{ padding: 20 }}
          >
            <Image
              source={require("../../../assets/user-profile.jpg")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
=======
        <ImageBackground
          source={{  uri: `http://192.168.56.1:8080/${user.cover}`}}
          style={{ padding: 20 }}
        >
          <Image
            source={{  uri: `http://192.168.56.1:8080/${user.logo}`}}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
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
          <View style={{ flexDirection: "row" }}>
>>>>>>> Stashed changes
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "Roboto-Medium",
                marginBottom: 5,
              }}
            >
              {organization_data.organization.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
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
            </View>
          </ImageBackground>
        )}

        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
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
        </TouchableOpacity>
        {organization_data && (
          <TouchableOpacity
            onPress={async () => {
              await AsyncStorage.removeItem("token");
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
        )}
      </View>
    </View>
  );
};

export default CustomDrawer;
