

import { ThemeProvider } from '@rneui/themed';
import { theme } from "./src/styles"
import Navigator from './src/routers/Drawer';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigator/>
    </ThemeProvider>
  );
}


