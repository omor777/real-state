import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
