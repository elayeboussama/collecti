import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  ScrollView,
} from "react-native";
import COLORS from "../../styles/const";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useTheme } from "@rneui/themed";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  donation_amount: "",
};

const DonateScene = ({ navigation }) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = React.useState({});
  const { theme } = useTheme();
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const handleOnchange = (text, input) => {
    setValues((prevState) => ({ ...prevState, [input]: text }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!values.first_name) {
      handleError("Please input first name", "first_name");
      isValid = false;
    }
    if (!values.last_name) {
      handleError("Please input last name", "last_name");
      isValid = false;
    }
    if (!values.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!values.donation_amount) {
      handleError("Please input donation_amount", "donation_amount");
      isValid = false;
    }
    if (isValid) {
      AddRdv();
    }
  };

  const AddRdv = () => {
    console.log("done !!!!");
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Event Donation</Text>
      <CustomInput
        onChangeText={(text) => handleOnchange(text, "first_name")}
        onFocus={() => handleError(null, "first_name")}
        iconName="person"
        label="First Name"
        placeholder="Enter your first name..."
        error={errors.first_name}
        value={values.first_name}
      />
      <CustomInput
        onChangeText={(text) => handleOnchange(text, "last_name")}
        onFocus={() => handleError(null, "last_name")}
        iconName="person"
        label="Last Name"
        placeholder="Enter your last name..."
        error={errors.last_name}
        value={values.last_name}
      />
      <CustomInput
        onChangeText={(text) => handleOnchange(text, "email")}
        onFocus={() => handleError(null, "email")}
        iconName="email"
        label="Email"
        placeholder="Enter your email ..."
        error={errors.email}
        value={values.email}
      />
      <CustomInput
        onChangeText={(text) => handleOnchange(text, "donation_amount")}
        onFocus={() => handleError(null, "donation_amount")}
        iconName="money"
        label="Donation Amount"
        placeholder="Enter your donation ammount..."
        error={errors.donation_amount}
        value={values.donation_amount}
      />
      <View style={styles.action}>
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
          onPress={validate}
        >
          <Text style={styles.text}>Donate</Text>
        </Pressable>
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
          onPress={reset}
        >
          <Text style={styles.text}>Clear</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  title: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  action: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default DonateScene;
