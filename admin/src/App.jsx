import { Outlet } from "react-router";
import Drawer from "./components/Drawer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function App() {

  return (
    <>
      <Drawer>
        <Outlet />
      </Drawer>
      <ToastContainer />
    </>
  );
}

export default App;
