import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/coding club dp copy 2.svg";

const Header = ({ setVisible }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container flex h-20 xl:h-28 items-center px-6 xl:px-14">
      <img
        src="/logo.png"
        className="w-40  mr-auto cursor-pointer"
        alt="logo"
        onClick={() => navigate("/")}
      ></img>
      <button className="sm:hidden" onClick={() => setVisible(true)}>
        <span className="pi pi-bars"></span>
      </button>
      <div className="hidden sm:flex text-xs md:gap-4 lg:text-base lg:gap-6 xl:gap-11 transition-all">
        <Link to="/" className="relative  group cursor-pointer">
          Home
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>
        {/* <a className="relative hover:text-yellow-400 group cursor-pointer">
          About Us
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a> */}
        <Link to="/events" className="relative  group cursor-pointer">
          Events
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link to="/events" className="relative  group cursor-pointer">
          NewsLetter
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link to="/execom" className="relative  group cursor-pointer">
          Execom
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link to="/contacts" className="relative  group cursor-pointer">
          Contact
          <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </Link>

        <Link
          to="/admin-login"
          className="bg-gradient-to-r from-blue-600 to-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-red-600 transition-colors duration-200 -mt-1"
        >
          Admin-Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
