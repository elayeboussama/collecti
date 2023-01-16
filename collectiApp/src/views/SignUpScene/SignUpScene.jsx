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
import { useSignUpMutation } from "../../../redux/endpoints/AuthEndpoints";
const SignUpScene = ({setIndex}) => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const signupOrganization = async (values) => {
    try {
      console.log(values);
      const organization_data = await signUp({
        ...values,
      }).unwrap();
      console.log(organization_data);
      setIndex(0)
      
      // navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
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
      <Formik
        
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm_password: "",
          firstConnection: true,

        }}
        onSubmit={(values, {resetForm}) => {
          signupOrganization(values)
          resetForm({values:""})
        }}


      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.flexContainer}>
              <Input
                placeholder="Organization name"
                name="name"
                onChangeText={handleChange("name")}
                value={values.name}
                errorStyle={{ color: "red" }}
                errorMessage={errors.name ? errors.name : ""}
                renderErrorMessage={errors.name ? true : false}
                leftIcon={{
                  type: "font-awesome",
                  name: "user",
                  color: "#5F9DF7",
                }}
              />
            </View>

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
            />
            <Input
              placeholder="Confim Password"
              leftIcon={{
                type: "MaterialIcons",
                name: "lock",
                color: "#5F9DF7",
              }}
              name="confirm_password"
              onChangeText={handleChange("confirm_password")}
              value={values.confirm_password}
              errorStyle={{ color: "red" }}
              errorMessage={
                errors.confirm_password ? errors.confirm_password : ""
              }
              renderErrorMessage={errors.confirm_password ? true : false}
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
              title={"SignUp"}
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
const signUpValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-z]+$/, "You can not use number or special chars")
    .required("First name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
export default SignUpScene;
