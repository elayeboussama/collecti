import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Drawer from "./components/shared/Drawer";
import Modal from "./components/shared/Modal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkToken } from "./features/authSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <div>
      <Drawer>
        <Navbar />
        <Outlet />
        <Footer />
      </Drawer>
      <Modal />
    </div>
  );
}

export default App
