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
import { useState } from "react";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import EventCard from "../../components/EventCard/EventCard";
import { ScrollView } from "react-native";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import { CustomImagePicker, OrgImagePicker } from "../../components";
import CustomInput from "../../components/CustomInput/CustomInput";
import DateTimePicker from "@react-native-community/datetimepicker";
const initialState = {
  org_name: "",
  org_sector: "",
  org_loc: "",
  org_date: "",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Reprehenderit, error consectetur dolore sint natus quibusdam abaliquid, aut libero neque qui eaque dignissimos eligendi deserunt.Corporis voluptatem ratione quia temporibus!",
  email: "",
  password: "",
  members_number: "",
  office_members: "",
};
const EditEventScene = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const [image, setImage] = useState(
    "https://i.postimg.cc/6qbtTHjS/menu-bg.jpg"
  );
  const [profileImage, setPorfileImage] = useState(
    "https://i.ibb.co/wg9Qvtp/logo2.png"
  );
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  function onDateSelected(event, value) {
    setDate(value);
    setTimePicker(false);
  }
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  const handleOnchange = (text, input) => {
    setValues((prevState) => ({ ...prevState, [input]: text }));
  };
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
            <CustomImagePicker type="event" image={image} setImage={setImage} />
          </View>
          {/* <Avatar
            size={160}
            containerStyle={{ marginTop: -80, alignSelf: "center" }}
            rounded
            source={{ uri: "https://i.ibb.co/wg9Qvtp/logo2.png" }}
          /> */}

          <View style={{ paddingHorizontal: 12, marginTop: 70 }}>
            <Text style={styles.desc}> Event Details</Text>
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "ev_name")}
              onFocus={() => handleError(null, "ev_name")}
              // iconName="update"
              label="Event Name"
              placeholder="Event Name"
              error={errors.ev_name}
              value={values.ev_name}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "desc")}
              onFocus={() => handleError(null, "desc")}
              // iconName="update"
              label="Description"
              placeholder="Description"
              error={errors.desc}
              value={values.desc}
              multiline
              numberOfLines={10}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "category")}
              onFocus={() => handleError(null, "category")}
              // iconName="update"
              label="Category"
              placeholder="Category"
              error={errors.category}
              value={values.category}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "required_fund")}
              onFocus={() => handleError(null, "org_loc")}
              // iconName="update"
              label="Required Fund"
              placeholder="Required Fund"
              error={errors.required_fund}
              value={values.required_fund}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 8,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginRight: 12 }}>Start Date</Text>
                <Chip
                  title={`${date.getFullYear().toString()}-${date
                    .getMonth()
                    .toString()}-${date.getDate().toString()}`}
                  onPress={() => setTimePicker(true)}
                  type="outline"
                  icon={{
                    name: "edit",
                    type: "font-awesome",
                    size: 20,
                    color: theme.colors.primary,
                  }}
                  iconRight
                />
              </View>
            </View>
            {timePicker && (
              <DateTimePicker value={date} onChange={onDateSelected} />
            )}
            <Button
              buttonStyle={styles.submitButton}
              title={"Save"}
              iconRight
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default EditEventScene;
