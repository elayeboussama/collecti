import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as views from "./../views";
// stacks
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { ViewBase } from "react-native";
import { Header } from "../components";
import CustomDrawer from "../components/customDrawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
// drawer navigation options
// const RootDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeStack,
//   },
//   About: {
//     screen: AboutStack,
//   },
// });

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          headerTitle: ({ navigation }) => (
            <Header title="Collecti" navigation={navigation} />
          ),
        }}
      >
        <Drawer.Screen name="Home" options={{}} component={HomeStack} />
        <Drawer.Screen
          name="About"
          
          component={AboutStack}
        />
      </Drawer.Navigator> */}
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,

            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Auth"
          component={views.AuthScene}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MainContainer = () => {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
};

export default RootDrawerNavigator;
