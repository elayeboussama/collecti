import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header } from "../components";
import * as views from "../views";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const screens = {
  Home: {
    screen: views.CompanyProfileScene,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="Profile" navigation={navigation} />,
      };
    },
  },
};

// home stack navigator screens

const Stack = createStackNavigator();

const EventStack = () => {
  
   const [org, setOrg] = useState()
   const handleChangeOrg = async () => {
     const orgVar = await AsyncStorage.getItem("user")
     setOrg(JSON.parse(orgVar));
   };
   useEffect(() => {
     handleChangeOrg();
   }, []);

   useEffect(() => {
     console.log("org Data Stack: ",org);
   }, [org]);

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
        title: "Event",
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
      {/* <Stack.Screen name="AddEvent" component={views.DonateScene} /> */}
        <Stack.Screen name="Home" component={views.HomeScene} />
        <Stack.Screen name="EventEdit" component={views.EditEventScene} />
        <Stack.Screen name="EventProfile" component={views.EventProfileScene} />
        <Stack.Screen name="Donate" component={views.DonateScene} />
        <Stack.Screen name="Payment" component={views.PaymentScreen} />
        <Stack.Screen name="Companies" component={views.CompanySearchScene} />
        <Stack.Screen
        name="CompanyProfile"
        
        component={views.CompanyProfileScene}
      />
    </Stack.Navigator>
  );
};

export default EventStack;
