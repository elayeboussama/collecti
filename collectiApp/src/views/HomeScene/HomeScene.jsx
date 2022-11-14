import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
const HomeScene = () => {
  return (
    <View style={styles.container}>
      <Text>Hello home page</Text>
      <StatusBar style="auto" />
    </View>
  );
};
export default HomeScene;
