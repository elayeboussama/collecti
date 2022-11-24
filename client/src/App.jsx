import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Drawer from "./components/shared/Drawer";

function App() {
  return (
    <div>
      <Drawer>
        <Navbar />
        <Outlet />
        <Footer />
      </Drawer>
    </div>
  );
}

export default App
