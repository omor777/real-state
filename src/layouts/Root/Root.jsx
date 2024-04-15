import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Root = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Root;
