import { createTheme, ThemeProvider } from "@rneui/themed";
import { theme } from "./src/styles";
import {
  RootDrawerNavigator,
  RootDrawerNavigatorUser,
} from "./src/routers/Drawer";
import {NavigationContainer} from '@react-navigation/native';

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./redux/slicers/AuthSlice";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StripeProvider } from '@stripe/stripe-react-native';
const AppWrapper = () => {
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  // const [storedToken,setStoredToken] = useState(AsyncStorage.getItem("token"));
  const storedToken = useSelector(selectCurrentToken);
  console.log(storedToken);
  return (
    <StripeProvider
      publishableKey="pk_test_51L3ed5GrghRXOZPqErm6JUfCspJWAXLKMZX54HHSWXjLQ8k1hchvfPZ03tS2x9uc68WwMsipoPhfkZg1l9lPHbvU00y6Rtep09"
      // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
      
    >
      <ThemeProvider theme={theme}>
      
          <RootDrawerNavigator />
        
      </ThemeProvider>
    </StripeProvider>
  );
};

export default AppWrapper;
