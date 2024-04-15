import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import useAuthContext from "../../hooks/useAuthContext";
import { AiOutlineMail } from "react-icons/ai";
import placeholderImage from "../../assets/user.png";
import PageTitle from "../../components/PageTitle/PageTitle";

const UserProfile = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="container  min-h-[calc(100vh-370px)] flex items-center justify-center px-4 md:px-0">
      <PageTitle title={'User profile | Nestwise'}/>
      <div className="w-full mt-36">
        <div className="flex flex-col justify-center max-w-2xl p-6 shadow-cardShadow mx-auto sm:px-12 bg-gray-50 text-gray-800">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={user?.photoURL || placeholderImage}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y divide-gray-300">
            <div className="my-2 space-y-1">
              <h2
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1200"
                className="text-xl font-semibold sm:text-2xl"
              >
                {user?.displayName}
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1500"
                className="px-5 text-xs sm:text-base text-gray-600 flex items-center justify-center gap-2"
              >
                <AiOutlineMail />
                {user?.email || "Not available!"}
              </p>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
              <a
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1700"
                rel="noopener noreferrer"
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaFacebookF />
              </a>
              <a
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="1900"
                rel="noopener noreferrer"
                href="#"
                aria-label="Dribble"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaTwitter />
              </a>
              <a
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="2100"
                rel="noopener noreferrer"
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-md text-gray-800 hover:text-default-600"
              >
                <FaInstagram />
              </a>
              <a
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="2300"
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
    </section>
  );
};

export default UserProfile;
