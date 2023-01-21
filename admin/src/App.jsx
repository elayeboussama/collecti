import { Outlet } from "react-router";
import Drawer from "./components/Drawer";

function App() {

  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
}

export default App;
