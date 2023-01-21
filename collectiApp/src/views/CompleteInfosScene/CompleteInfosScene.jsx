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

import React, { useState, useEffect } from 'react';
import { Pressable , Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from "./styles";
import Octicons from "react-native-vector-icons/Octicons";
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';



import { Formik } from "formik";
import * as yup from "yup";
import { useLoginMutation } from "../../../redux/endpoints/AuthEndpoints";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeModules } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { ImageBackground } from "react-native";
import RNFetchBlob from "rn-fetch-blob"



const CompleteInfosScene = () => {


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

    }


    const handleSubmit = ()=>{
      RNFetchBlob.fetch('POST', 'http://192.168.56.1:8080/api/organization/upload',{
        otherHeader:"foo",
        'Content-Type':'multipart/form-data',
      },[
        {name: 'video', filename: image.fileName, type: image.type, data: RNFetchBlob.wrap(image.path)},
        {
          name: 'info', data: JSON.stringify({
            videoTitle: 'title',
            videoDiscription: 'disc',
            paid: false,
            gymId: '000000000000'
          })
        },
      ]).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
    

    
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const loginOrganization = async (values) => {
      try {
        console.log(values);
        const organization_data = await login({
          ...values,
        }).unwrap();
        console.log(organization_data);
        dispatch(setCredentials(organization_data));
        await AsyncStorage.setItem("organization_data", JSON.stringify(organization_data))
        await AsyncStorage.setItem("firstConnection", organization_data.firstConnection)
        //console.log("zzzzzzz", await AsyncStorage.getItem("token"));
        if(organization_data.firstConnection == true){
          navigation.reset({
            index: 1,
            routes: [{ name: "Profile" }],
          });
        }else{
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }
        
  
        // navigate("/", { replace: true });
      } catch (err) {
        console.log(err);
      }
    };
    
  

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.CoverView}>
          {cover ? <Image source={{ uri: cover }} style={styles.UpCover} /> : <Image source={require("../../../assets/menu-bg.jpeg")} style={styles.UpCover} />}
          <Pressable  style={styles.UpCoverBtn} title="+" onPress={pickCover}>
            {cover ? <Octicons name="pencil" size={15} /> : <Octicons name="upload" size={15} />}
          </Pressable>
        </View>
        <Pressable  style={styles.UpImageBtn} title="+" onPress={pickImage}>
          {image ? <Image source={{ uri: image }} style={styles.UpImage} /> : <Octicons name="upload" size={22} />}
          {image &&
            <View title="x" style={styles.UpImageUpdate} >
              <Octicons name="pencil" size={10} />
            </View>
          }
        </Pressable>
      </View>
      <View style={styles.form}>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            loginOrganization(values);
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
      </View>
    </View>
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




export default CompleteInfosScene;
