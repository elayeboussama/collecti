import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header } from "../components";
import * as views from "../views";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
// home stack navigator screens
const CompanyStack = () => {
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
      <Stack.Screen name="Companies" component={views.CompanySearchScene} />
      <Stack.Screen
        name="CompanyProfile"
        
        component={views.CompanyProfileScene}
      />
    </Stack.Navigator>
  );
};

export default CompanyStack;
