import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
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
