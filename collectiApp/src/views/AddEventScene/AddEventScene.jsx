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
import { useAddEventMutation } from "../../../redux/endpoints/EventEndpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../components/CustomInput/CustomInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetOneOrgsQuery, useUploadImageMutation } from "../../../redux/endpoints/OrganizationEndpoints";
import mime from "mime";
import { useEffect } from "react";
import axios from "axios"
const AddEventScene = ({navigation}) => {

  const [currentUser, setCurrentUser] = useState();
  const handleChange = async () => {
    const userVar = await AsyncStorage.getItem("user")
    setCurrentUser(JSON.parse(userVar));
  };
  useEffect(() => {
    handleChange();

    
  }, []);
  useEffect(() => {
    if(currentUser){
      console.log("scene event user =>", currentUser);
      
    }
    
  }, [currentUser,]);

  const { theme } = useTheme();
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  function onDateSelected(event, value) {
    setDate(value);
    setTimePicker(false);
  }
  const [AddEvent, { isLoading }] = useAddEventMutation();

  const [UploadImage, { isLoadingImage }] = useUploadImageMutation();
  

  const submitImage = async () => {
    const uri = image;
    const newImageUri = "file:///" + uri.split("file:/").join("");

    const formData = new FormData();
    formData.append("image", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    //  const uploadResult = await UploadImage({...options}).unwrap();
    // console.log(uploadResult.path)
    // setUser({...user, logo : uploadResult.path})
    // console.log(uploadResult.path)
    return await UploadImage({ ...options }).unwrap();
    //return await fetch('http://192.168.56.1:8080/api/organization/upload', options);
  };

  const addEventHandler = async (values) => {
    try {
      const resultImage = await submitImage();
      console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss: ",await submitImage());

      const event_data = await AddEvent({
        ...values,
        organization_id: currentUser && currentUser._id,
        date: date,
        image: [resultImage.path],
      });
      console.log(event_data);
      const id = await AsyncStorage.getItem("id")
      await axios.get(`http://192.168.56.1:8080/api/organization/${id}`).then(async(res)=>{
        await AsyncStorage.setItem("user", JSON.stringify(res.data.organization))
        navigation.navigate("Home")
    })
      
      // navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  function formatDate(date) {
    const newDate = new Date(date);
    const currentMonth = newDate.getMonth();
    const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
    const currentDate = newDate.getDate();
    const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
    return `${newDate.getFullYear()}-${Number(monthString) + 1}-${currentDate}`;
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate( "Home")}} style={{width:"20%", marginTop:10, marginLeft:10}}>
        <MaterialCommunityIcons name="arrow-left-circle-outline" size={25} color="#3B0081"/>
      </TouchableOpacity>
      <CustomImagePicker type="event" image={image} setImage={setImage} />
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: "",
          description: "",
          category: "",
          requirementFunds: "",
        }}
        onSubmit={(values) => addEventHandler(values)}
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
            {/* <Input
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
            /> */}
            <CustomInput
              onChangeText={handleChange("name")}
              // onFocus={() => handleError(null, "last_name")}
              placeholder="Enter your Event name..."
              error={errors.name}
              value={values.name}
            />
            <Text style={styles.desc}> Event Description </Text>
            {/* <Input
              placeholder="Enter event description..."
              errorStyle={{ color: "red" }}
              name="description"
              onChangeText={handleChange("description")}
              value={values.description}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "email",
              //   color: theme.colors.primary,
              // }}
              multiline={true}
              errorMessage={errors.description ? errors.description : ""}
              renderErrorMessage={errors.description ? true : false}
            /> */}
            <CustomInput
              onChangeText={handleChange("description")}
              // onFocus={() => handleError(null, "last_name")}
              placeholder="Enter your Event description..."
              error={errors.description}
              value={values.description}
              multiline
            />
            <Text style={styles.desc}> Event Category </Text>
            {/* <Input
              placeholder="Enter event category..."
              errorStyle={{ color: "red" }}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "lock",
              //   color: theme.colors.primary,
              // }}
              name="category"
              onChangeText={handleChange("category")}
              value={values.category}
              errorMessage={errors.category ? errors.category : ""}
              renderErrorMessage={errors.category ? true : false}
            /> */}
            <CustomInput
              onChangeText={handleChange("category")}
              // onFocus={() => handleError(null, "last_name")}
              placeholder="Enter your Event category..."
              error={errors.category}
              value={values.category}
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
                title={`${formatDate(date) }`}
                type="outline"
              />
            </View>
            {timePicker && (
              <DateTimePicker value={date} onChange={onDateSelected} />
            )}
            <Text style={styles.desc}> Requirement Fund </Text>
            {/* <Input
              placeholder="Enter event required fund..."
              errorStyle={{ color: "red" }}
              name="requirementFunds"
              onChangeText={handleChange("requirementFunds")}
              value={values.requirementFunds}
              // leftIcon={{
              //   type: "MaterialIcons",
              //   name: "email",
              //   color: theme.colors.primary,
              // }}
              multiline={true}
              errorMessage={
                errors.requirementFunds ? errors.requirementFunds : ""
              }
              renderErrorMessage={errors.requirementFunds ? true : false}
            /> */}
            <CustomInput
              onChangeText={handleChange("requirementFunds")}
              // onFocus={() => handleError(null, "last_name")}
              placeholder="Enter your Event fund..."
              error={errors.requirementFunds}
              value={values.requirementFunds}
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
  name: yup.string().required("event name is required"),
  description: yup.string().required("event description is required"),
  category: yup.string().required("event category is required"),
  requirementFunds: yup.string().required("event fund is required"),
});
export default AddEventScene;
