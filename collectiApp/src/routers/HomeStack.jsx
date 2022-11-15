import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components";
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
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={views.HomeScene}
      options={{
        headerTitle: ({ navigation }) => (
          <Header title="Collecti" navigation={navigation} />
        ),
      }}
    />
  </Stack.Navigator>;
};

export default HomeStack;
