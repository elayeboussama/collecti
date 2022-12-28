import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Chip } from "@rneui/themed";
import { ImageBackground } from "react-native";
import { Input } from "@rneui/themed";
import { ScrollView } from "react-native";
import { color } from "react-native-reanimated";
import { Formik } from "formik";
import * as yup from "yup";
import { useSignUpMutation } from "../../../redux/endpoints/AuthEndpoints";
import { CustomImagePicker, ImagePicker } from "../../components";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "@rneui/themed";
import { useState } from "react";
const AddEventScene = () => {
  const { theme } = useTheme();
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  function onDateSelected(event, value) {
    setDate(value);
    setTimePicker(false);
  }
  // const [signUp, { isLoading }] = useSignUpMutation();

  // const signupOrganization = async (values) => {
  //   try {
  //     console.log(values);
  //     const organization_data = await signUp({
  //       ...values,
  //     }).unwrap();
  //     console.log(organization_data);
  //     // navigate("/", { replace: true });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <ScrollView style={styles.container}>
      <CustomImagePicker type="event" image={image} setImage={setImage} />
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
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
          <View style={styles.form}>
            <Text style={styles.desc}> Event Name </Text>
            <Input
              placeholder="Enter your event name..."
              name="name"
              onChangeText={handleChange("name")}
              value={values.name}
              errorStyle={{ color: "red" }}
              errorMessage={errors.name ? errors.name : ""}
              renderErrorMessage={errors.name ? true : false}
              // leftIcon={{
              //   type: "font-awesome",
              //   name: "user",
              //   color: theme.colors.primary,
              // }}
            />
            <Text style={styles.desc}> Event Description </Text>
            <Input
              placeholder="Enter event description..."
              errorStyle={{ color: "red" }}
              name="email"
              onChangeText={handleChange("email")}
              value={values.email}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "email",
              //   color: theme.colors.primary,
              // }}
              multiline={true}
              errorMessage={errors.email ? errors.email : ""}
              renderErrorMessage={errors.email ? true : false}
            />
            <Text style={styles.desc}> Event Category </Text>
            <Input
              placeholder="Enter event category..."
              errorStyle={{ color: "red" }}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "lock",
              //   color: theme.colors.primary,
              // }}
              name="password"
              onChangeText={handleChange("password")}
              value={values.password}
              errorMessage={errors.password ? errors.password : ""}
              renderErrorMessage={errors.password ? true : false}
            />
            <Text style={styles.desc}> Event Date </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 8,
              }}
            >
              <Button
                title={"Edit Date"}
                onPress={() => setTimePicker(true)}
                containerStyle={{ width: "25%", marginRight: 8 }}
              />
              <Chip
                title={`${date.getFullYear().toString()}-${date
                  .getMonth()
                  .toString()}-${date.getDate().toString()}`}
                type="outline"
              />
            </View>
            {timePicker && (
              <DateTimePicker value={date} onChange={onDateSelected} />
            )}
            <Text style={styles.desc}> Requirement Fund </Text>
            <Input
              placeholder="Enter event description..."
              errorStyle={{ color: "red" }}
              name="email"
              onChangeText={handleChange("email")}
              value={values.email}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "email",
              //   color: theme.colors.primary,
              // }}
              multiline={true}
              errorMessage={errors.email ? errors.email : ""}
              renderErrorMessage={errors.email ? true : false}
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
              title={"Add event"}
              iconRight
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </View>
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
export default AddEventScene;
