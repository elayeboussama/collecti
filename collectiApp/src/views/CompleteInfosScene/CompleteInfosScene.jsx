import {
  useTheme
} from "@rneui/themed";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker  from "react-native-image-picker";


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
      console.log("scene user =>", user);
    }, [user]);
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();



    const uploadImageHandler = () =>{
      var options = {
        title: 'Select Image',
        customButtons: [
          {
            name: 'customOptionKey',
            title: 'Choose Photo from Custom Option'
          },
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log(
              'User tapped custom button: ',
              response.customButton
            );
            alert(response.customButton);
          } else {
            setFilePath(response);
          }
      });
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
            <TouchableOpacity onPress={uploadImageHandler}>
              <Text> hello </Text>  
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );

};

export default CompleteInfosScene;
