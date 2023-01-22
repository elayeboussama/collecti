import { BottomSheet, Button, Input, ListItem, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import { useGetAllOrgsQuery } from "../../../redux/endpoints/OrganizationEndpoints";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../components/CustomInput/CustomInput";
import axios from "axios" 
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';
// import { selectOrganizations, setOrganizations } from '../../../redux/slicers/OrganizationSlice';

const CompanySearchScene =  ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();




  const { data, error, isLoading, isSuccess, refresh } = useGetAllOrgsQuery();
  const filteredData = data?.organization.filter(organization => organization.firstConnection === false && organization.status==="approved")
  useEffect(async() => {
    
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log("data: ", data);
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log("error: ", error);
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log("isLoading: ", isLoading);
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );
    console.log("isSuccess: ", isSuccess);
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );


  }, []);

  // const storedOrgs = useSelector(selectOrganizations)

  // console.log(orgns)
  // const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.searchCard}>
        <Text>Search</Text>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <MaterialIcons name="search" size={25} color="#333" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data != undefined ? (
          filteredData && filteredData.length === 0 ? <i>No organizations found</i> :
          filteredData?.map(organization => (
              <Text>hello</Text>
          ))
        ) : (
          <Text>no companies</Text>
        )}
      </ScrollView>

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.bottomSheet}>
          <TouchableOpacity onPress={() => setIsVisible(false)}>
            <MaterialIcons
              name="close"
              size={25}
              color="#333"
              style={styles.closeButton}
            />
          </TouchableOpacity>

          <CustomInput
            placeholder="Organization name..."
            iconName="office-building-cog"
          />
          <CustomInput
            placeholder="Organization sector..."
            iconName="office-building-cog"
          />

          <CustomInput
            placeholder="Event name..."
            iconName="office-building-cog"
          />
          <CustomInput
            placeholder="Event location..."
            iconName="office-building-cog"
          />
          <Button
            title="Search"
            onPress={() => setIsVisible(false)}
            buttonStyle={styles.button}
            icon={{ type: "font-awesome", name: "search", color: "#fff" }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};
export default CompanySearchScene;
