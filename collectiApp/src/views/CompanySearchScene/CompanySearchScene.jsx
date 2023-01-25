import { BottomSheet, Button, Input, ListItem, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import { useGetAllEventsQuery, useGetAllOrgsQuery } from "../../../redux/endpoints/EventEndpoints";

// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useRoute } from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';
// import { selectOrganizations, setOrganizations } from '../../../redux/slicers/OrganizationSlice';

const CompanySearchScene = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [company_name, setCompany_name] = useState("");
  const [data, setData] = useState([]);
  const { theme } = useTheme();
<<<<<<< Updated upstream
  const route = useRoute();
  const {
    data: orgs,
    error,
    isLoading,
    isSuccess,
    refresh,
  } = useGetAllOrgsQuery();
  const filteredData = orgs?.organization.filter(
    (organization) =>
      organization.firstConnection === false &&
      organization.status === "approved"
  );
=======




  const { data, error, isLoading, isSuccess } = useGetAllOrgsQuery();
  console.log("eeeeeeeeeeee:",data)
  const filteredData = data?.organizations.filter(organization => organization.firstConnection === false && organization.status==="approved")
>>>>>>> Stashed changes
  useEffect(() => {
    console.log(
      "-------------------------------------------------------------------------------------------------------------------------------------------------"
    );
<<<<<<< Updated upstream
    console.log("daaaaaaaaaaaaaattttttttaaaaaaaaaaaaaa", orgs);
=======
    console.log("data: ", typeof(data));
>>>>>>> Stashed changes
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
  }, [orgs]);

  // const storedOrgs = useSelector(selectOrganizations)

  // console.log(orgns)
  // const dispatch = useDispatch();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const handleSearch = () => {
    setFilterFn({
      fn: (items) => {
        if (company_name === "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(company_name.toLocaleLowerCase())
          );
      },
    });
  };
  const getSearchedData = () => {
    return filterFn.fn(orgs.organization);
  };

  return (
    <>
      {orgs ? (
        <View style={styles.container}>
          <View style={styles.searchCard}>
            <Text>Search</Text>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <MaterialIcons name="search" size={25} color="#333" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {orgs && (
              <FlatList
                data={getSearchedData()}
                renderItem={({ item }) => (
                  <CompanyCard
                    stack={route.name}
                    navigation={navigation}
                    org={item}
                  />
                )}
                keyExtractor={(item) => item._id}
              />
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
                value={company_name}
                onChangeText={(value) => {
                  setCompany_name(value);
                  handleSearch();
                }}
              />
              {/* <CustomInput
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
              /> */}
              <Button
                title="Search"
                onPress={() => {
                  handleSearch();
                  setIsVisible(false);
                }}
                buttonStyle={styles.button}
                icon={{ type: "font-awesome", name: "search", color: "#fff" }}
              />
            </View>
          </BottomSheet>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#00aa00" />
      )}
    </>
  );
};
export default CompanySearchScene;
