import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

import placeholderImg from "../../assets/user.png";

const Header = () => {
  const { user, setUser, logoutUser } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { displayName, photoURL } = user || {};

  // console.log(user);

  return (
    <header className="bg-white py-5 shadow-navShadow fixed top-0 right-0 w-full z-10">
      <nav className="container flex items-center justify-between ">
        <Link to="/" className="text-3xl font-bold ">
          Real<span className="text-primary">State</span>
        </Link>
        <ul className="flex items-center gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
