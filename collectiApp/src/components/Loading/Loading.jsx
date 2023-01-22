import React, { useState, useEffect } from "react";
import { Image, View, Platform, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LoadStyles } from "./styles";

const Loading = () => {
  
  return (
    <View style={LoadStyles.boxes}>
      <View style={LoadStyles.box}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
      </View>
      <View style={LoadStyles.box}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
      </View>
      <View style={LoadStyles.box}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
      </View>
      <View style={LoadStyles.box}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
      </View>
  </View>
  );
};

export default Loading;
