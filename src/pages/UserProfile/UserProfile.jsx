import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { FaInstagram } from "react-icons/fa6";
import useAuthContext from "../../hooks/useAuthContext";
import { AiOutlineMail } from "react-icons/ai";
import placeholderImage from "../../assets/user.png";

const UserProfile = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  console.log(user);

  return (
    <section className="min-h-screen  flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="container mt-36">
        <div className="flex flex-col justify-center max-w-2xl p-6 shadow-cardShadow mx-auto sm:px-12 bg-gray-50 text-gray-800">
          <img
            src={user?.photoURL || placeholderImage}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <p className="px-5 text-xs sm:text-base text-gray-600 flex items-center justify-center gap-2">
              <AiOutlineMail />
                {user?.email}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaFacebookF />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaTwitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaInstagram />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Email"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default UserProfile;
