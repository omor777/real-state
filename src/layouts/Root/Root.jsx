import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
