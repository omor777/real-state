import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-5 shadow-navShadow">
      <nav className="container flex items-center justify-between">
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
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : " text-black/70 font-medium transition before:duration-500 relative before:absolute before:w-0 hover:before:w-full before:h-[2px] before:bg-primary before:-bottom-[2px]"
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="btn bg-primary text-white px-8 text-lg hover:bg-primary hover:border-primary">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
