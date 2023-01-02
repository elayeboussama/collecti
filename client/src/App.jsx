import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Drawer from "./components/shared/Drawer";
import Footer from "./components/shared/Footer";
import Modal from "./components/shared/Modal";

import Navbar from "./components/shared/Navbar";
import { checkToken } from "./features/authSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return (
    <div>
      <Drawer>
        {/* <Navbar /> */}
        {/* <Home/> */}
        <Outlet />
        <Footer />
      </Drawer>
      <Modal />
      <ToastContainer />
    </div>
  );
}

export default App
