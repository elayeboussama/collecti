import { createTheme, ThemeProvider } from '@rneui/themed';
import { theme } from "./src/styles"
import {RootDrawerNavigator,RootDrawerNavigatorUser} from './src/routers/Drawer';

import {store} from "./redux/store"
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux'; 
import { selectCurrentToken } from './redux/slicers/AuthSlice';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
const AppWrapper = () => {

  return (
    <Provider store={store}>
      <App /> 
    </Provider>
  )
}

const App=()=> {
  
  // const [storedToken,setStoredToken] = useState(AsyncStorage.getItem("token"));
  const storedToken = useSelector(selectCurrentToken)
  const [token,setToken] = useState()
  useEffect(()=>{
      setToken(storedToken) 
      console.log( "tokendddddd5: ",storedToken)
      console.log( "tokendddddd5: ",token)
  },[storedToken])
  return (
    <ThemeProvider theme={theme}>
      {token!==null ? 

        <RootDrawerNavigatorUser/>
        
        :

        <RootDrawerNavigator/>

      }
    </ThemeProvider>
  );
}

export default AppWrapper

