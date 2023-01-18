import {
  Avatar,
  BottomSheet,
  Button,
  Chip,
  Divider,
  Input,
  ListItem,
  useTheme,
} from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CompleteInfosScene = () => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const handleChange = async () => {
    setToken(await AsyncStorage.getItem("token"));
    const userVar = await AsyncStorage.getItem("user")
    setUser(JSON.parse(userVar));
  };
  useEffect(() => {
    handleChange();
  }, []);
  useEffect(() => {
    console.log("scene token =>", token);
    console.log("scene user =>", user.name);
  }, [user]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();



  const uploadImageHandler = () =>{
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }else {
        console.log('User selected a file form camera or gallery', response); 
        const data = new FormData();
        data.append('name', 'avatar');
        data.append('fileData', {
          uri : response.uri,
          type: response.type,
          name: response.fileName
        });
        const config = {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          },
          body: data,
        };
        fetch("http://localhost:8080/api/organization/upload", config)
          .then((checkStatusAndGetJSONResponse)=>{       
            console.log(checkStatusAndGetJSONResponse);
          })
          .catch((err)=>{console.log(err)});
      }
    })
  }




  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerSection}>
          <View
            style={{
              height: 200,
              width: "99%",
              alignSelf: "center",
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
            }}
          >
            <TouchableHiglight onPress={uploadImageHandler}></TouchableHiglight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CompleteInfosScene;
