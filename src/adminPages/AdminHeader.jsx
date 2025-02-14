import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const AdminHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = (to) => {
    setIsVisible(!isVisible);
    navigate(to);
  };

  return (
    <div className="header-container flex h-20 xl:h-28 items-center px-6 xl:px-14">
          <img
            src="/ccLogo.svg"
            className="w-40  mr-auto cursor-pointer"
            alt="logo"
            onClick={() => navigate("/")}
          ></img>
          <button className="md:hidden" onClick={() => setIsVisible(!isVisible)}>
            <IoMenu size={30} />
          </button>
          <div className="hidden md:flex text-xs md:gap-4 lg:text-base lg:gap-6 xl:gap-11 transition-all">
            <Link to="/admin-dashboard" className="relative  group cursor-pointer">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            {/* <a className="relative hover:text-yellow-400 group cursor-pointer">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </a> */}
            <Link to="/admin-events" className="relative  group cursor-pointer">
              Events
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
    
            <Link to="/" className="relative  group cursor-pointer">
              Admin-out
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
    
            
          </div>
    
          <div
            className={`md:hidden fixed top-0 flex flex-col h-screen w-screen justify-between items-center p-10 text-xs md:gap-4 lg:text-base lg:gap-6 xl:gap-11 transition-all bg-black z-[1000] ${
              isVisible ? "right-0" : "-right-[150%]"
            }`}
          >
            <div className="flex w-full justify-end">
              <button
                className="md:hidden"
                onClick={() => setIsVisible(!isVisible)}
              >
                <IoClose size={30} />
              </button>
            </div>
            <div className="flex flex-col gap-5 justify-evenly items-center h-full">
              <button
                className="relative  group cursor-pointer"
                onClick={() => handleOnClick("/admin-dashboard")}
              >
                Home
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </button>
              {/* <a className="relative hover:text-yellow-400 group cursor-pointer">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </a> */}
              <button
                className="relative  group cursor-pointer"
                onClick={() => handleOnClick("/admin-events")}
              >
                Events
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </button>
    
              <button
                className="relative  group cursor-pointer"
                onClick={() => handleOnClick("/")}
              >
                Admin-out
                <span className="absolute bottom-2 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
  );
};

export default AdminHeader;
