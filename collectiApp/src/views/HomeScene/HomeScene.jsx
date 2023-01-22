import { BottomSheet, Button, Input, ListItem, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

import { Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";

import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetAllEventsQuery } from "../../../redux/endpoints/EventEndpoints";
import CustomInput from "../../components/CustomInput/CustomInput";
import { useRoute } from "@react-navigation/native";
// import Loading from "../../components/Loading/Loading";

const HomeScene = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [eventsState, setEventsState] = useState()
  const { theme } = useTheme();
  const {
    data: events,
    error,
    isLoading,
    isSuccess,
  } = useGetAllEventsQuery();
  const route = useRoute();
  useEffect(() => {
    console.log("bbbbbbbbbbbbbbb", events);
    setEventsState(events)
  }, [events]);

  const ListEvents = () =>{
    return(
      <FlatList
        data={eventsState}
        renderItem={({ item }) => <EventCard  stack={route.name} navigation={navigation} item={item}  /> }
        keyExtractor={item => item._id}
      />
    )
  }

  return (
    <>
      {eventsState ? 
        <View style={styles.container}>
          <View style={styles.searchCard}>
            <Text>Search</Text>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <MaterialIcons name="search" size={25} color="#333" />
            </TouchableOpacity>
          </View>
          <View>
            {eventsState &&
               <ListEvents/>
            }
          </View>{/*here errrorr<EventCard item={item} />*/}
    
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
                icon={{ type: "font-awesome", name: "search", color: "#fff", size:13 }}
              />
            </View>
          </BottomSheet>
        </View>
      :

        <ActivityIndicator size="large" color="#00ff00" />
      }
    
    </>
  );
};
export default HomeScene;
