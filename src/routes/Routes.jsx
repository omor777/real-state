import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/update_profile",
        element: <UpdateProfile />,
      },
      {
        path: "/user_profile",
        element: <UserProfile />,
      },
      {
        path: "/property_details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/estateData.json"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
