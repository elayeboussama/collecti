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
import CompanyStack from "./CompanyStack";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import ProfileStack from "./ProfileStack";
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
  const storedToken = useSelector(selectCurrentToken);
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const handleChangeToken = async () => {
    setToken(await AsyncStorage.getItem("token"));
    setUser(await AsyncStorage.getItem("user"));
  };
  useEffect(() => {
    handleChangeToken();
  }, []);
  useEffect(() => {
    console.log("drawer token =>", token);
    console.log("drawer user =>", user);
  }, [token]);

  return (
    <NavigationContainer>
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
        {token && (
        <Drawer.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="face-man-profile" size={22} color={color} />
              ),
            }}
          />)}
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
          name="Companies"
          component={CompanyStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="globe-outline" size={22} color={color} />
            ),
          }}
        />
        {!token && (
          <Drawer.Screen
            name="Auth"
            component={views.AuthScene}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="person-outline" size={22} color={color} />
              ),
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const RootDrawerNavigatorUser = () => {
  return (
    <NavigationContainer>
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
          name="Events"
          component={CompanyStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="globe-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// const MainContainer = () => {
//   return (
//     <NavigationContainer>
//       <RootDrawerNavigator />
//     </NavigationContainer>
//   );
// };

export { RootDrawerNavigator, RootDrawerNavigatorUser };
