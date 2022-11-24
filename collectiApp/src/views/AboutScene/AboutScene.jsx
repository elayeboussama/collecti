import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
const AboutScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello About Page</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default AboutScene;
