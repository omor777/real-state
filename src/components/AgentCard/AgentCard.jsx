import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
  FaPinterestP,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AgentCard = ({ agent }) => {
  const { image, name, phone_number, email, skype } = agent;
  console.log(agent);
  return (
    <div className="rounded-md shadow-cardShadow">
      <figure>
        <img
          src={image}
          className="h-64 w-full object-cover rounded-t-md peer-hover:scale-110"
        />
      </figure>
      <div className="flex flex-col justify-between mt-3">
        <div className="space-y-3 p-5">
          <h2 className="text-2xl font-bold text-black/80 capitalize">
            {name}
          </h2>
          <p className="flex items-center gap-2.5">
            <FaPhoneAlt className="text-gray-600" />
            {phone_number}
          </p>
          <p className="flex items-center gap-2.5">
            <MdEmail className="text-gray-600" />
            {email}
          </p>
          <p className="flex items-center gap-2.5">
            <FaSkype className="text-gray-600" />
            {skype}
          </p>
        </div>
        {/* bottom */}
        <ul className="grid grid-cols-5 mt-4 bg-[#111827] rounded-b-md">
          <li className="text-gray-300 cursor-pointer hover:bg-primary p-5 flex items-center justify-center hover:text-white duration-300">
            <FaFacebookF />
          </li>
          <li className="text-gray-300 cursor-pointer hover:bg-primary p-5 flex items-center justify-center hover:text-white duration-300">
            <FaTwitter />
          </li>
          <li className="text-gray-300 cursor-pointer hover:bg-primary p-5 flex items-center justify-center hover:text-white duration-300">
            <FaPinterestP />
          </li>
          <li className="text-gray-300 cursor-pointer hover:bg-primary p-5 flex items-center justify-center hover:text-white duration-300">
            <FaLinkedinIn />
          </li>
          <li className="text-gray-300 cursor-pointer hover:bg-primary p-5 flex items-center justify-center hover:text-white duration-300">
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgentCard;
