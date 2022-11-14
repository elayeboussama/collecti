
import { RootRouter } from './src/routers';
import { ThemeProvider } from '@rneui/themed';
import {theme} from "./src/styles"
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootRouter/>
    </ThemeProvider>
  );
}


