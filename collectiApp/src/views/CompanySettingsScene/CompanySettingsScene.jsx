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
const CompanySettingsScene = () => {
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
          <OrgImagePicker
            image={profileImage}
            setImage={setPorfileImage}
            style={{ marginTop: -80, alignSelf: "center" }}
          />
          <View style={{ paddingHorizontal: 12 }}>
            <Text style={styles.desc}> Organisation Details</Text>
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "org_name")}
              onFocus={() => handleError(null, "org_name")}
              // iconName="update"
              label="Organization Name"
              placeholder="Organization Name"
              error={errors.org_name}
              value={values.org_name}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "org_sector")}
              onFocus={() => handleError(null, "org_sector")}
              // iconName="update"
              label="Organization Sector"
              placeholder="Organization Sector"
              error={errors.org_sector}
              value={values.org_sector}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "org_loc")}
              onFocus={() => handleError(null, "org_loc")}
              // iconName="update"
              label="Organization Location"
              placeholder="Organization Location"
              error={errors.org_loc}
              value={values.org_loc}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginVertical: 8,
              }}
            >
              <Button
                title={"Edit Date"}
                onPress={() => setTimePicker(true)}
                containerStyle={{ width: "25%", marginRight: 8 }}
              />
              <Chip
                title={`${date.getFullYear().toString()}-${date
                  .getMonth()
                  .toString()}-${date.getDate().toString()}`}
                type="outline"
              />
            </View>
            {timePicker && (
              <DateTimePicker value={date} onChange={onDateSelected} />
            )}
          </View>
        </View>
        <View style={styles.descSection}>
          <Text style={styles.desc}> Organisation Description </Text>
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
        </View>
        <View style={styles.descSection}>
          <Text style={styles.desc}> Members </Text>
          <View>
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "members_number")}
              onFocus={() => handleError(null, "org_name")}
              // iconName="update"
              label="Members Number"
              placeholder="Members Number"
              error={errors.members_number}
              value={values.members_number}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "office_members")}
              onFocus={() => handleError(null, "office_members")}
              // iconName="update"
              label="Office members"
              placeholder="Office members"
              error={errors.office_members}
              value={values.office_members}
            />
          </View>
        </View>
        <View style={styles.descSection}>
          <Text style={styles.desc}> Account settings </Text>
          <View>
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              // iconName="update"
              label="Email"
              placeholder="Email"
              error={errors.members_number}
              value={values.members_number}
              multiline
              numberOfLines={10}
            />
            <CustomInput
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "pasword")}
              // iconName="update"
              label="Password"
              placeholder="Passwrod"
              error={errors.password}
              value={values.password}
              password
            />
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
export default CompanySettingsScene;
