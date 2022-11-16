import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header } from "../components";
import * as views from "./../views";

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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={views.HomeScene} />
    </Stack.Navigator>
  );
};

export default HomeStack;
