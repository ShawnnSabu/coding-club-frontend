import Logo from "../assets/coding club dp copy 2.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center min-[840px]:gap-28 px-7 relative pb-24">
      <img
        src="/logo.png"
        className="w-96 cursor-pointer"
        onClick={() => navigate("/")}
      ></img>
      <div className="flex gap-10 min-[850px]:gap-28 max-[640px]:text-center">
        <div className="flex flex-col items-center gap-2 sm:gap-7">
          <Link to="/" className="relative  group cursor-pointer">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link to="/events" className="relative  group cursor-pointer">
            Events
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
          <Link to="/execom" className="relative  group cursor-pointer">
            Team
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 sm:left-1/2 sm:translate-x-[-50%] flex flex-col">
        <hr className="border-white border-t-2"></hr>
        <div className="text-center text-xs mt-2">
          © Coding Club TKMCE - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
