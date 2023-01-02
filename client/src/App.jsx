import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Drawer from "./components/shared/Drawer";
import Modal from "./components/shared/Modal";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Drawer>
        {/* <Navbar /> */}
        {/* <Home/> */}
        <Outlet />
        <Footer />
      </Drawer>
      <Modal />
    </div>
  );
}

export default App
