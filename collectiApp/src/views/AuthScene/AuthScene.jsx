import { Tab, TabView, Text, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Header } from "../../components";
import LoginScene from "../LoginScene/LoginScene";
import SignUpScene from "../SignUpScene/SignUpScene";

const AuthScene = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{
            paddingTop: 25,
            width: "100%",
          }}
        >
          <LoginScene />
        </TabView.Item>
        <TabView.Item style={{ paddingTop: 25, width: "100%" }}>
          <SignUpScene setIndex={setIndex}/>
        </TabView.Item>
      </TabView>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "transparent",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Login"
          titleStyle={(active) => ({
            color: active ? theme.colors.primary : "white",
            fontSize: 12,
          })}
          containerStyle={(active) => ({
            backgroundColor: active ? "white" : undefined,
          })}
          icon={(active) => ({
            name: "login",
            type: "MaterialIcons",
            color: active ? theme.colors.primary : "white",
          })}
        />
        <Tab.Item
          title="SignUp"
          titleStyle={(active) => ({
            color: active ? theme.colors.primary : "white",
            fontSize: 12,
          })}
          containerStyle={(active) => ({
            backgroundColor: active ? "white" : theme.colors.primary,
          })}
          icon={(active) => ({
            name: "switch-account",
            type: "MaterialIcons",
            color: active ? theme.colors.primary : "white",
          })}
        />
      </Tab>
    </View>
  );
};
export default AuthScene;
