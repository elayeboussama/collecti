import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "20%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});

export default Header;
