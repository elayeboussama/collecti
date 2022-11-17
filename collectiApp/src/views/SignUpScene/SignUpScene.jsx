import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/themed";
import { ImageBackground } from "react-native";
import { Input } from "@rneui/themed";
import { ScrollView } from "react-native";
import { color } from "react-native-reanimated";

const SignUpScene = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/login.jpg")}
        style={styles.backGroundPic}
      >
        <Button
          style={styles.backButton}
          icon={<Icon name="arrow-left" size={15} color="blue" />}
          buttonStyle={styles.backButton}
          type="outline"
        />
      </ImageBackground>
      <Text style={{ fontSize: 30, marginLeft: 12 }}>Sign Up</Text>
      <View style={styles.flexContainer}>
        <Input
          placeholder="First name"
          errorStyle={{ color: "red" }}
          leftIcon={{
            type: "font-awesome",
            name: "user",
            color: "#5F9DF7",
          }}
          errorMessage=""
          containerStyle={{ width: "50%" }}
          renderErrorMessage={false}
        />
        <Input
          placeholder="Last name"
          leftIcon={{
            type: "font-awesome",
            name: "user",
            color: "#5F9DF7",
          }}
          errorStyle={{ color: "red" }}
          errorMessage=""
          containerStyle={{ width: "50%" }}
          renderErrorMessage={false}
        />
      </View>
      <Input
        placeholder="Email"
        errorStyle={{ color: "red" }}
        leftIcon={{ type: "MaterialIcons", name: "email", color: "#5F9DF7" }}
        errorMessage=""
        renderErrorMessage={false}
      />

      <Input
        placeholder="Password"
        errorStyle={{ color: "red" }}
        leftIcon={{ type: "MaterialIcons", name: "lock", color: "#5F9DF7" }}
        errorMessage=""
        renderErrorMessage={false}
      />
      <Input
        placeholder="Confim Password"
        leftIcon={{ type: "MaterialIcons", name: "lock", color: "#5F9DF7" }}
        errorStyle={{ color: "red" }}
        errorMessage=""
        renderErrorMessage={false}
      />

      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            style={{ marginLeft: 12 }}
          />
        }
        buttonStyle={styles.submitButton}
        title={"Login"}
        iconRight
      />
    </ScrollView>
  );
};
export default SignUpScene;
