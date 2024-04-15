import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-16 mt-24">
      <div className="footer  container ">
        <aside>
          <div>
            <h3 className="text-white/90 text-2xl font-bold">
              Nest<span className="text-primary">Wise</span>
            </h3>
            <p className="text-white/80 max-w-[265px] mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              molestiae ad odit cum ipsa, nobis expedita illum voluptatum esse
              dolorum?
            </p>
            <ul className="flex items-center gap-x-3 mt-5">
              <li className="size-10 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center ">
                <FaFacebookF className="text-xl text-white/70" />
              </li>
              <li className="size-10 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center ">
                <FaTwitter className="text-xl text-white/70" />
              </li>
              <li className="size-10 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center ">
                <FaInstagram className="text-xl text-white/70" />
              </li>
              <li className="size-10 rounded-full bg-gray-700 cursor-pointer flex items-center justify-center ">
                <FaGithub className="text-xl text-white/70" />
              </li>
            </ul>
          </div>
        </aside>
        <div>
          <h3 className="text-xl  text-white font-semibold">Discover</h3>
          <ul className="space-y-3 mt-3">
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              Miami
            </li>
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              Los Angels
            </li>
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              Chicago
            </li>
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              New York
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl  text-white font-semibold">Contact Us</h3>
          <ul className="space-y-3 mt-3">
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              774 NE 84th St Miami, FL 33879
            </li>
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              879 456 1349
            </li>
            <li className="text-white/80 cursor-pointer hover:underline font-medium">
              email@houzez.co
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white/90 text-2xl font-bold mb-4">Newsletter</h2>
          <form>
            <div className="flex items-center gap-3 lg:gap-0 flex-col lg:flex-row rounded overflow-hidden">
              <input
                type="text"
                placeholder="example@.com"
                className="input input-bordered rounded-none"
              />
              <button className="btn w-full lg:w-auto bg-primary border-primary text-white font-semibold  hover:bg-primary hover:border-primary rounded-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
