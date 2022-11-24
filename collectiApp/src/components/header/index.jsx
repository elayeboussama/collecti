import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = ({ title }) => {


  return (
    <View style={styles.header}>
      
        <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    display:"flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  
  },
  
});

export default Header;
