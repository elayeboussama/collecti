import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "@rneui/themed";
import { ImageBackground } from "react-native";
import { Input } from "@rneui/themed";
import { ScrollView } from "react-native";
import { color } from "react-native-reanimated";
import { Formik } from "formik";
import * as yup from "yup";
const SingUpScene = () => {
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
      <Text style={{ fontSize: 30, marginLeft: 12 }}>Login</Text>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <Input
              placeholder="Email"
              errorStyle={{ color: "red" }}
              name="email"
              onChangeText={handleChange("email")}
              value={values.email}
              leftIcon={{
                type: "MaterialIcons",
                name: "email",
                color: "#5F9DF7",
              }}
              errorMessage={errors.email ? errors.email : ""}
              renderErrorMessage={errors.email ? true : false}
            />

            <Input
              placeholder="Password"
              errorStyle={{ color: "red" }}
              leftIcon={{
                type: "MaterialIcons",
                name: "lock",
                color: "#5F9DF7",
              }}
              name="password"
              onChangeText={handleChange("password")}
              value={values.password}
              errorMessage={errors.password ? errors.password : ""}
              renderErrorMessage={errors.password ? true : false}
              secureTextEntry={true}
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
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
export default SingUpScene;
