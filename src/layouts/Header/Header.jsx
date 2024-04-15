import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

import placeholderImg from "../../assets/user.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { user, setUser, logoutUser, setReload } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        setReload(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { displayName, photoURL } = user || {};

  return (
    <header className="bg-white py-5 shadow-navShadow fixed top-0 right-0 w-full z-50">
      <nav className="container flex items-center justify-between relative px-4 md:px-0">
        <Link to="/" className="text-2xl md:text-3xl font-bold ">
          Nest<span className="text-primary">Wise</span>
        </Link>
        <ul className=" hidden md:flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Agents
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/update_profile"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Update Profile
            </NavLink>
          </li>
        </ul>
        <div className="md:block hidden">
          {user ? (
            <div className="flex items-center space-x-3 relative">
              <Link to={"/user_profile"} className="peer duration-300">
                <img
                  className="size-12 rounded-full border-2 border-primary "
                  src={photoURL || placeholderImg}
                  alt="user-profile-picture"
                />
              </Link>
              <span className="absolute bg-white px-4 rounded-full py-2 font-medium shadow-md -bottom-[90%] -left-12 opacity-0 peer-hover:opacity-100 duration-300">
                {displayName}
              </span>
              <button
                onClick={handleLogout}
                className="btn bg-primary text-white px-8 text-lg hover:bg-primary hover:border-primary"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-primary text-white px-8 text-lg hover:bg-primary hover:border-primary">
                Login
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setToggleMenu(true)}
          className="block md:hidden "
        >
          <FaBars className="text-2xl" />
        </button>
      </nav>

      <div
        className={` bg-white absolute w-full shadow-cardShadow flex items-center md:hidden justify-center flex-col gap-y-5 top-0 ${
          toggleMenu ? "max-h-[600px] py-10" : "max-h-0"
        }  overflow-hidden  duration-300 transition-all ease-out`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agent"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Agent
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/update_profile"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Update Profile
            </NavLink>
          </li>
        </ul>
        <div>
          {user ? (
            <div className="flex items-center space-x-3 relative flex-col gap-4">
              <Link to={"/user_profile"} className="peer duration-300">
                <img
                  className="size-12 rounded-full border-2 border-primary "
                  src={photoURL || placeholderImg}
                  alt="user-profile-picture"
                />
              </Link>
              <span className="absolute bg-white px-4 rounded-full py-2 font-medium shadow-md -bottom-[90%] -left-12 opacity-0 peer-hover:opacity-100 duration-300">
                {displayName}
              </span>
              <button
                onClick={handleLogout}
                className="btn bg-primary text-white px-8 text-lg hover:bg-primary hover:border-primary"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn bg-primary text-white px-8 text-lg hover:bg-primary hover:border-primary">
                Login
              </button>
            </Link>
          )}
        </div>
        <button
          onClick={() => setToggleMenu(false)}
          className="absolute top-6 btn btn-ghost right-5"
        >
          <IoCloseSharp className="text-3xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
