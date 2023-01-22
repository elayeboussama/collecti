// import {
//   useTheme
// } from "@rneui/themed";
// import { useEffect, useState } from "react";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { ScrollView, View, Text } from "react-native";
// import { styles } from "./styles";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import ImagePicker  from "react-native-image-picker";

// const CompleteInfosScene = () => {

//     const [token, setToken] = useState();
//     const [user, setUser] = useState();
//     const handleChange = async () => {
//       setToken(await AsyncStorage.getItem("token"));
//       const userVar = await AsyncStorage.getItem("user")
//       setUser(JSON.parse(userVar));
//     };
//     useEffect(() => {
//       handleChange();
//     }, []);
//     useEffect(() => {
//       console.log("scene token =>", token);
//       console.log("scene user =>", user);
//     }, [user]);
//     const [isVisible, setIsVisible] = useState(false);
//     const { theme } = useTheme();

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.headerSection}>
//           <View
//             style={{
//               height: 200,
//               width: "99%",
//               alignSelf: "center",
//               borderBottomLeftRadius: 12,
//               borderBottomRightRadius: 12,
//             }}
//           >
//             <TouchableOpacity onPress={uploadImageHandler}>
//               <Text> hello </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );

// };

// export default CompleteInfosScene;

import React, { useState, useEffect } from "react";
import { Pressable, Image, View, Platform, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";
import Octicons from "react-native-vector-icons/Octicons";
import { Avatar, Badge, Icon, withBadge } from "@rneui/themed";

import { Formik } from "formik";
import * as yup from "yup";
import {
  useUploadImageMutation,
  useUpdateOrgMutation,
} from "../../../redux/endpoints/OrganizationEndpoints";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeModules } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { ImageBackground } from "react-native";
// import RNFetchBlob from 'react-natine-fetch-blob'
// import BlobCourier from 'react-native-blob-courier';
// import { RNFetchBlob } from 'react-native-fetch-blob';
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import mime from "mime";
import CustomInput from "../../components/CustomInput/CustomInput";

const CompleteInfosScene = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState({ email: "" });
  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));
    const userVar = await AsyncStorage.getItem("user");
    setUser(JSON.parse(userVar));
  };
  useEffect(() => {
    handleChange();
  }, []);
  var email = "";
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user);
    if (user.email != "") {
      email = user.email;
    }
  }, [user]);

  const handleChangeEmail = async (value) => {
    setUser({ ...user, email: value });
  };

  const handleChangeName = async (value) => {
    setUser({ ...user, name: value });
  };

  const [image, setImage] = useState(null);
  const [cover, setCover] = useState(null);

  const pickImage = async () => {
    //No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickCover = async () => {
    // No permissions request is necessary for launching the image library
    let resultCover = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resultCover);

    if (!resultCover.canceled) {
      setCover(resultCover.assets[0].uri);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  const [UploadImage, { isLoading }] = useUploadImageMutation();
  const [UpdateOrg, { isLoadingUpdate }] = useUpdateOrgMutation();
  var logo = "";
  var coverimage = "";
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

  const submitCover = async () => {
    const uri = cover;
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
    // setUser({...user, cover : uploadResult.path})
    return await UploadImage({ ...options }).unwrap();
    // console.log(isLoading)
    //return await fetch('http://192.168.56.1:8080/api/organization/upload', options);
  };

  const updateUser = async (values) => {
    setUser({ ...user, ...values });
  };

  const handleSubmit = async (values) => {
    const resultCover = await submitCover();
    const resultlogo = await submitImage();
    console.log(
      "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz-- ",
      resultCover
    );
    // console.log("sublit result: ",submitCover().toString())
    // const imagePath = submitImage().toString()
    // const coverPath = submitCover().toString()
    // console.log("from submit image : ",imagePath)
    // console.log("from submit cover : ",coverPath)
    await updateUser(values);
    const sendUser = {
      ...user,
      ...values,
      cover: resultCover.path,
      logo: resultlogo.path,
      firstConnection: false,
    };
    console.log("-----user:  " + JSON.stringify(sendUser));
    AsyncStorage.setItem("user", JSON.stringify(sendUser));
    const updateResult = await UpdateOrg({ ...sendUser }).unwrap();
    console.log(updateResult);
  };

  useEffect(() => {
    console.log("-----user from use effect:  " + JSON.stringify(user));
  }, [user]);

  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Item 1", value: "value 1" },
    { label: "Item 2", value: "value 2" },
    { label: "Item 3", value: "value 3" },
    { label: "Item 4", value: "value 4" },
    { label: "Item 5", value: "value 5" },
    { label: "Item 6", value: "value 6" },
    { label: "Item 7", value: "value 7" },
    { label: "Item 8", value: "value 8" },
  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.CoverView}>
          {cover ? (
            <Image source={{ uri: cover }} style={styles.UpCover} />
          ) : (
            <Image
              source={require("../../../assets/menu-bg.jpeg")}
              style={styles.UpCover}
            />
          )}
          <Pressable style={styles.UpCoverBtn} title="+" onPress={pickCover}>
            {cover ? (
              <Octicons name="pencil" size={15} />
            ) : (
              <Octicons name="upload" size={15} />
            )}
          </Pressable>
        </View>
        <Pressable style={styles.UpImageBtn} title="+" onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.UpImage} />
          ) : (
            <Octicons name="upload" size={22} />
          )}
          {image && (
            <View title="x" style={styles.UpImageUpdate}>
              <Octicons name="pencil" size={10} />
            </View>
          )}
        </Pressable>
      </View>
      <ScrollView style={styles.form}>
        {user && (
          <Formik
            // validationSchema={formValidationSchema}
            initialValues={{
              sector: "",
              socialMedia: [],
              description: "",
              planActions: "",
              Vision: "",
              directorName: "",
              teamMembersNames: [],
              phone: "",
              location: "",
              keywords: [],
            }}
            onSubmit={(values) => {
              handleSubmit(values);
              setTimeout(() => {
                NativeModules.DevSettings.reload();
              }, 1000);
            }}
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
                {
                  user.name && (
                    <CustomInput
                      onChangeText={(value) => handleChangeName(value)}
                      // onFocus={() => handleError(null, "last_name")}
                      iconName="office-building-cog"
                      label="Name"
                      placeholder="Enter your Name..."
                      error={errors.name}
                      value={user.name}
                    />
                  )
                  // <Input
                  //   style={styles.input}
                  //   placeholder="Name"
                  //   errorStyle={{ color: "red" }}
                  //   name="name"
                  //   onChangeText={(value)=>handleChangeName(value)}
                  //   value={"user.name"}
                  //   leftIcon={{
                  //     type: "MaterialIcons",
                  //     name: "person",
                  //     color: "#5F9DF7",
                  //   }}
                  //   errorMessage={errors.name ? errors.name : ""}
                  //   renderErrorMessage={errors.name ? true : false}
                  // />
                }

                {user.email && (
                  // <Input
                  //   style={styles.input}
                  //   placeholder="Email"
                  //   errorStyle={{ color: "red" }}
                  //   name="email"
                  //   onChangeText={(value) => handleChangeEmail(value)}
                  //   value={"user.email"}
                  //   leftIcon={{
                  //     type: "MaterialIcons",
                  //     name: "email",
                  //     color: "#5F9DF7",
                  //   }}
                  //   errorMessage={errors.email ? errors.email : ""}
                  //   renderErrorMessage={errors.email ? true : false}
                  // />
                  <CustomInput
                    onChangeText={(value) => handleChangeEmail(value)}
                    // onFocus={() => handleError(null, "last_name")}
                    iconName="email"
                    label="Email"
                    placeholder="Enter your Email..."
                    error={errors.email}
                    value={values.email}
                  />
                )}
                {/* <Input
                  style={styles.input}
                  placeholder="Phone"
                  errorStyle={{ color: "red" }}
                  name="phone"
                  onChangeText={handleChange("phone")}
                  value={values.phone}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "phone",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.phone ? errors.phone : ""}
                  renderErrorMessage={errors.phone ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("phone")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="phone"
                  label="Phone"
                  placeholder="Enter your Phone..."
                  error={errors.phone}
                  value={values.phone}
                />
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select sector" : "..."}
                  searchPlaceholder="Search..."
                  value={values.sector}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setUser({ ...user, sector: item.value });
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <AntDesign
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="Safety"
                      size={20}
                    />
                  )}
                />

                {/* <Input
                  style={styles.input}
                  placeholder="Director Name"
                  errorStyle={{ color: "red" }}
                  name="directorName"
                  onChangeText={handleChange("directorName")}
                  value={values.directorName}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "person",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.directorName ? errors.directorName : ""}
                  renderErrorMessage={errors.directorName ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("directorName")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="office-building-cog"
                  label="Director name"
                  placeholder="Enter your Director Name..."
                  error={errors.directorName}
                  value={values.directorName}
                />
                {/* <Input
                  style={styles.input}
                  placeholder="Location"
                  errorStyle={{ color: "red" }}
                  name="location"
                  onChangeText={handleChange("location")}
                  value={values.location}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "location-pin",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.location ? errors.location : ""}
                  renderErrorMessage={errors.location ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("location")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="location-enter"
                  label="Location"
                  placeholder="Enter your Location..."
                  error={errors.location}
                  value={values.location}
                />
                {/* <Input
                  style={styles.input}
                  placeholder="Description"
                  errorStyle={{ color: "red" }}
                  name="description"
                  onChangeText={handleChange("description")}
                  value={values.description}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "description",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.description ? errors.description : ""}
                  renderErrorMessage={errors.description ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("description")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="android-messages"
                  label="description"
                  placeholder="Enter your description..."
                  error={errors.description}
                  value={values.description}
                />
                {/* <Input
                  style={styles.input}
                  placeholder="Vision"
                  errorStyle={{ color: "red" }}
                  name="Vision"
                  onChangeText={handleChange("Vision")}
                  value={values.Vision}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "remove-red-eye",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.Vision ? errors.Vision : ""}
                  renderErrorMessage={errors.Vision ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("Vision")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="eye"
                  label="Vision"
                  placeholder="Enter your Vision..."
                  error={errors.Vision}
                  value={values.Vision}
                />
                {/* <Input
                  style={styles.input}
                  placeholder="Plan d'actions"
                  errorStyle={{ color: "red" }}
                  name="planActions"
                  onChangeText={handleChange("planActions")}
                  value={values.planActions}
                  leftIcon={{
                    type: "MaterialIcons",
                    name: "bar-chart",
                    color: "#5F9DF7",
                  }}
                  errorMessage={errors.planActions ? errors.planActions : ""}
                  renderErrorMessage={errors.planActions ? true : false}
                /> */}
                <CustomInput
                  onChangeText={handleChange("planActions")}
                  // onFocus={() => handleError(null, "last_name")}
                  iconName="chart-bar"
                  label="planActions"
                  placeholder="Enter your plan d'actions..."
                  error={errors.planActions}
                  value={values.planActions}
                />
                <Button
                  icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="white"
                      style={styles.sendBtn}
                    />
                  }
                  buttonStyle={styles.submitButton}
                  title={"save"}
                  iconRight
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        )}
      </ScrollView>
    </View>
  );
};
const formValidationSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  sector: yup.string().required("sector is Required"),
  socialMedia: yup.array(String),
  description: yup
    .string()
    .length(10, "description must be at least 10 caracter")
    .required("description is Required"),
  planActions: yup
    .string()
    .length(10, "Actions plan must be at least 10 caracter")
    .required("Actions plan is Required"),
  Vision: yup
    .string()
    .length(10, "Vision must be at least 10 caracter")
    .required("Vision is Required"),
  directorName: yup.string().required("Director name is Required"),
  teamMembersNames: yup
    .array(String)
    .required("Team members names are Required"),
  phone: yup.string().required("phone is Required"),
  location: yup.string().required("location is Required"),
  keywords: yup.array(String).required("keywords are Required"),
  email: yup,
});

export default CompleteInfosScene;

{
  /* <Input
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
            
            // const handleSubmit = ()=>{
    //   RNFetchBlob.fetch('POST', 'http://192.168.56.1:8080/api/organization/upload',{
    //     otherHeader:"foo",
    //     'Content-Type':'multipart/form-data',
    //   },[
    //     {name: 'video', filename: image.fileName, type: image.type, data: RNFetchBlob.wrap(image.path)},
    //     {
    //       name: 'info', data: JSON.stringify({
    //         videoTitle: 'title',
    //         videoDiscription: 'disc',
    //         paid: false,
    //         gymId: '000000000000'
    //       })
    //     },
    //   ]).then((res)=>{
    //     console.log(res)
    //   }).catch((err)=>{
    //     console.log(err)
    //   })
    // }
    

    
    // const [login, { isLoading }] = useLoginMutation();
    // const dispatch = useDispatch();
    // const navigation = useNavigation();

    // const loginOrganization = async (values) => {
    //   try {
    //     console.log(values);
    //     const organization_data = await login({
    //       ...values,
    //     }).unwrap();
    //     console.log(organization_data);
    //     dispatch(setCredentials(organization_data));
    //     await AsyncStorage.setItem("organization_data", JSON.stringify(organization_data))
    //     await AsyncStorage.setItem("firstConnection", organization_data.firstConnection)
    //     //console.log("zzzzzzz", await AsyncStorage.getItem("token"));
    //     if(organization_data.firstConnection == true){
    //       navigation.reset({
    //         index: 1,
    //         routes: [{ name: "Profile" }],
    //       });
    //     }else{
    //       navigation.reset({
    //         index: 0,
    //         routes: [{ name: "Home" }],
    //       });
    //     }
        
  
    //     // navigate("/", { replace: true });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
            
          */
}
