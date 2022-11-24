import { BottomSheet, Button, Input, ListItem, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";

const CompanySearchScene = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.searchCard}>
        <Text>Search</Text>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <MaterialIcons name="search" size={25} color="#333" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <CompanyCard navigation={navigation} />
        <CompanyCard />
        <CompanyCard />
      </ScrollView>

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.bottomSheet}>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <MaterialIcons
              name="close"
              size={25}
              color="#333"
              style={styles.closeButton}
            />
          </TouchableOpacity>
          <Input
            placeholder="Company name"
            errorStyle={{ color: "red" }}
            leftIcon={{
              type: "font-awesome",
              name: "user",
              color: theme.colors.primary,
            }}
            errorMessage=""
            renderErrorMessage={false}
          />
          <Input
            placeholder="Company Sector"
            leftIcon={{
              type: "MaterialIcons",
              name: "engineering",
              color: theme.colors.primary,
            }}
            errorStyle={{ color: "red" }}
            errorMessage=""
            renderErrorMessage={false}
          />
          <Input
            placeholder="Event Name"
            leftIcon={{
              type: "AntDesign",
              name: "edit",
              color: theme.colors.primary,
            }}
            errorStyle={{ color: "red" }}
            errorMessage=""
            renderErrorMessage={false}
          />
          <Input
            placeholder="Location"
            leftIcon={{
              type: "MaterialIcons",
              name: "edit-location",
              color: theme.colors.primary,
            }}
            errorStyle={{ color: "red" }}
            errorMessage=""
            renderErrorMessage={false}
          />
          <Button
            title="Search"
            onPress={() => setIsVisible(false)}
            buttonStyle={styles.button}
            icon={{ type: "font-awesome", name: "search", color: "#fff" }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};
export default CompanySearchScene;
