import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import COLORS from "../../styles/const";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useTheme } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDonateMutation } from "../../../redux/endpoints/EventEndpoints";
import { CardField } from "@stripe/stripe-react-native";

const initialState = {
  email: "",
  amount: "",
  event: "",
};

const DonateScene = ({ navigation, route }) => {
  const item = route.params.item
  const stack = route.params.stack
  const stackPrev = route.params.stackPrev
  console.log("stack from dinate :",stack)
  const [donate, {isLoading}]=useDonateMutation();
  const [values, setValues] = useState({...initialState, event:item._id});
  const [errors, setErrors] = React.useState({});
  const { theme } = useTheme();
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const handleOnchange = (text, input) => {
    setValues((prevState) => ({ ...prevState, [input]: text }));
  };


  

  // const validate = async () => {
  //   Keyboard.dismiss();
  //   let isValid = true;
  //   if (!values.first_name) {
  //     handleError("Please input first name", "first_name");
  //     isValid = false;
  //   }
  //   if (!values.last_name) {
  //     handleError("Please input last name", "last_name");
  //     isValid = false;
  //   }
  //   if (!values.email) {
  //     handleError("Please input email", "email");
  //     isValid = false;
  //   }
  //   if (!values.donation_amount) {
  //     handleError("Please input donation_amount", "donation_amount");
  //     isValid = false;
  //   }
  //   if (isValid) {
  //     AddRdv();
  //   }
  // };

  const donation=async()=>{
    await donate({
      ...values,
    }) 
    Alert.alert('Payment State', 'Payment Done Successfuly', [
      
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    navigation.navigate(stackPrev, {stack:stack })
    
  }

  const AddRdv = () => {
    console.log("done !!!!");
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
  };
  return (
    <ScrollView style={styles.container}>
       <TouchableOpacity onPress={()=>{navigation.navigate(stackPrev, {stack:stack})}} style={{width:"20%", marginTop:10, marginLeft:10}}>
          <MaterialCommunityIcons name="arrow-left-circle-outline" size={25} color="#3B0081"/>
        </TouchableOpacity>
      <Text style={styles.title}>Event Donation</Text>
      
      
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
        onChangeText={(text) => handleOnchange(text, "amount")}
        // onFocus={() => handleError(null, "amount")}
        iconName="money"
        label="Donation Amount"
        placeholder="Enter your donation ammount..."
        // error={errors.amount}
        value={values.amount}
      />
      <CardField  placeholder={{number:'4242 4242 4242 4242'}} postalCodeEnabled={false} style={styles.CardField} cardStyle={{borderColor:"#000000", borderWidth:1, borderRadius:8}} />
      <View style={styles.action}>
        <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
          onPress={donation}
        >
          <Text style={styles.text}>Donate</Text>
        </Pressable>
        {/* <Pressable
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
          // onPress={reset}
        >
          <Text style={styles.text}>Clear</Text>
        </Pressable> */}
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
  CardField:{
    width:"100%",
    height:50,
    marginVertical:30
  }
});

export default DonateScene;
