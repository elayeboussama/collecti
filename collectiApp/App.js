import { createTheme, ThemeProvider } from '@rneui/themed';
import { theme } from "./src/styles"
import Navigator from './src/routers/Drawer';
import {store} from "./redux/store"
import { Provider } from 'react-redux';


const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App /> 
    </Provider>
  )
}

const App=()=> {
  return (
    <ThemeProvider theme={theme}>
      <Navigator/>
    </ThemeProvider>
  );
}

export default AppWrapper

