import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components";
import * as views from "../views";

const Stack = createStackNavigator();
// home stack navigator screens
const AboutStack = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="About"
      component={views.AboutScene}
      options={{
        headerTitle: ({ navigation }) => (
          <Header title="Collecti" navigation={navigation} />
        ),
      }}
    />
  </Stack.Navigator>;
};

export default AboutStack;
