import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Header } from "../components";
import * as views from "../views";
import { MaterialIcons } from "@expo/vector-icons";

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

const ProfileStack = () => {
  const [org, setOrg] = useState()
  const handleChangeOrg = async () => {
    setOrg(await AsyncStorage.getItem("user"));
    
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
        title: "Profile",
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
      <Stack.Screen name="Profile" component={views.CompanyProfileScene} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
