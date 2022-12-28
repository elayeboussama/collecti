import React, { useState, useEffect } from "react";
import { Image, View, Platform, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { orgStyles, eventStyles } from "./styles";
import { useTheme } from "@rneui/themed";
const CustomImagePicker = (props) => {
  const { theme } = useTheme();
  const { type, image, setImage } = props;
  const styles = type === "event" ? eventStyles : orgStyles;
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  console.log("aaaaaaaaaaaa", image);
  return (
    <View style={styles.container}>
      {image ? (
        <>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          )}
          <View
            style={{
              borderColor: theme.colors.primary,
              borderWidth: 1,
              ...styles.uploadBtnContainer,
            }}
          >
            <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
              <AntDesign name="edit" size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <TouchableOpacity
          onPress={addImage}
          style={{
            // borderWidth: 1,
            // borderColor: theme.colors.primary,
            ...styles.emptyContainer,
          }}
        >
          <AntDesign
            name="cloudupload"
            size={50}
            color={theme.colors.primary}
          />
          <Text>Upload your event poster</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomImagePicker;
