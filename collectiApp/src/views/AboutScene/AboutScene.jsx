import { Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
const AboutScene = () => {
  return (
    <View style={styles.container}>

      <View
        style={styles.welcomeSection}
      >
        <Image
          source={require("../../../assets/collecti.png")}
          style={{
            padding: 20,
            borderRadius: 12,
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={styles.SecondSection}>
        
        <View style={{flex:1, marginTop:10}}>
          <Text style={styles.TitleWelcome}>Welcome To Collecti App</Text>
          <Text style={styles.TextWelcome}>Your support helps us provide valuable resources and opportunities for our students, and we are deeply grateful for your contribution. Your generosity will make a real impact in the lives of our students and the success of our clubs..</Text>
        </View>
        <View
          style={styles.ImageSection}
        >
          <Image
            source={require("../../../assets/money.png")}
            style={styles.moneyBloc}
          />
        </View>
      </View>
      <View style={styles.SecondSection}>
        <View
          style={styles.ImageSection}
        >
          <Image
            source={require("../../../assets/About.png")}
            style={styles.moneyBloc}
          />
        </View>
        <View style={{flex:1 }}>
          <Text style={styles.TitleWelcome}>About us!</Text>
          <Text style={styles.TextWelcome}>Our platform is dedicated to supporting university clubs and organizations by providing financial assistance for their events and activities. We rely on the generosity of donors like you to help us continue this mission, and we are grateful for your support 🥰.</Text>
          {/* Our platform is dedicated to supporting university clubs and organizations by providing financial assistance for their events and activities. We believe that these clubs play a vital role in fostering a sense of community and personal growth among students, and we want to do our part in helping them thrive. We rely on the generosity of donors like you to help us continue this mission, and we are grateful for your support 🥰. */}
        </View>
        
      </View>
      <View style={styles.SecondSection}>
        
        <View style={{flex:1, marginTop:10}}>
          <Text style={styles.TitleWelcome}>Contact us</Text>
            <Text style={{fontSize:10}}>Facebook: www.facebook.com/Collecti.tn</Text>
            <Text style={{fontSize:10}}>Instagram: www.instagram.com/Collecti.tn</Text>
            <Text style={{fontSize:10}}>Twitter: www.twitter.com/Collecti.tn</Text>
        </View>
        <View
          style={styles.ImageSection}
        >
          <Image
            source={require("../../../assets/share.png")}
            style={styles.moneyBloc}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
export default AboutScene;
