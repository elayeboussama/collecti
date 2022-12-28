import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header } from "../components";
import * as views from "./../views";
import { MaterialIcons } from "@expo/vector-icons";

const screens = {
  Home: {
    screen: views.HomeScene,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Collecti" navigation={navigation} />,
      };
    },
  },
};

// home stack navigator screens

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={28}
            onPress={() => navigation.openDrawer()}
            style={{ position: "absolute", left: 16, color: "white" }}
          />
        ),
        title: "Collecti",
        headerStyle: {
          backgroundColor: "#432C7A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // Add a placeholder button without the `onPress` to avoid flicker
      })}
    >
      <Stack.Screen name="AddEvent" component={views.DonateScene} />
      <Stack.Screen name="Home" component={views.HomeScene} />
    </Stack.Navigator>
  );
};

export default HomeStack;
