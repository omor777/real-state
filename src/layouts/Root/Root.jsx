import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      {/* <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div> */}
      <Outlet />
    </div>
  );
};

export default Root;
