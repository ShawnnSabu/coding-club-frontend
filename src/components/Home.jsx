import "../styles/home.css";
import AboutUsPic from "../assets/Code typing-bro (1) 1.svg";
import VisionPic from "../assets/To the stars-rafiki (1).svg";
import AboutUsPic2 from "../assets/Code typing-bro.svg";
import VisionPic2 from "../assets/To the stars-rafiki(2).svg";
import { useEffect, useState } from "react";
import Header from "./Header";

const Home = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true); 
  }, []);

  return (
    <>
      <div>
        <div data-aos="fade-down" data-aos-duration="1500">
          <Header />
        </div>
      </div>

      <div className="flex-auto overflow-hidden h-full">
        <div className="flex flex-col justify-center items-center h-screen w-screen pb-44 sm:pb-32 overflow-x-hidden">
          <div
            className={`flex flex-col items-center justify-center transition-all duration-1000 ${
              showLogo ? "fade-in-move-down" : "translate-y-[9px] sm:translate-y-[-48px]"
            }`}
          >
            <span className="text-[36px] sm:text-[60px] font-source">
              Welcome to
            </span>
            <img
              src="/logo.png"
              alt="logo"
              className="w-[280px] sm:w-[430px]"
            ></img>
          </div>
        </div>

        <div className="relative hidden sm:block">
          <img
            src={AboutUsPic}
            className="absolute right-0 z-10 h-[55%] hidden xl:block"
            alt="About Us"
          />
          <div className="about-us h-[58rem] bg-gradient-to-r from-white to-slate-300 text-black relative">
            <div className="absolute top-32 min-[1000px]:max-xl:top-60 left-9 w-[65%] xl:w-[35%]">
              <div className="text-4xl sm:text-5xl font-black">
                <span className="text-[#112EAF]">{"<"}</span>About Us
                <span className="text-[#112EAF]">{">"}</span>
              </div>
              <p className="font-montserrat text-xl 2xl:text-2xl mt-7">
                <span className="text-[#112EAF] font-bold">
                  Coding club TKMCE
                </span>{" "}
                is an initiative to inculcate the culture of programming and
                development in our institute. We create a platform which allows
                students to gain assistance and mentorship to enhance their
                coding ability. We ensure that every student here at TKMCE
                should have an opportunity to learn how to code and develop a
                passion for it. Our aim is to impart and instill this culture of
                learning-by-practice among students and professionals alike, and
                to that end, our team organizes a multitude of events throughout
                the year.
              </p>
            </div>
          </div>
          <div className="h-screen"></div>
          <img
            src={VisionPic}
            className="absolute bottom-[14%] left-0 h-[35%] hidden xl:block"
            alt="Vision"
          />
          <div className="absolute w-[35%] left-[5%] xl:left-[35%] bottom-[35%]">
            <div className="text-5xl font-black">
              Vision<span className="text-[#E5245A]">{">"}</span>
            </div>
            <p className="font-montserrat text-xl 2xl:text-2xl mt-7">
              To inculcate the culture of programming and development among
              students and to enhance their coding ability.
            </p>
          </div>
          <div className="absolute w-[35%] text-right right-[10%] min-[840px]:right-[5%] bottom-[16%]">
            <div className="text-5xl font-black">
              <span className="text-[#E5245A]">{"<"}</span>Mission
            </div>
            <p className="font-montserrat text-xl 2xl:text-2xl mt-7">
              To create a platform to impart and instill this culture of
              learning-by-practice among students and professionals alike, and
              to that end, our team organizes a multitude of events throughout
              the year.
            </p>
          </div>
        </div>

        <div className="sm:hidden">
          <div className="bg-white text-black min-h-screen flex flex-col justify-center items-center px-7 pt-7 pb-14">
            <img src={AboutUsPic2} className="h-64" alt="About Us Mobile" />
            <div className="text-4xl font-black mb-7">
              <span className="text-[#112EAF]">{"<"}</span>About Us
              <span className="text-[#112EAF]">{">"}</span>
            </div>
            <p className="font-montserrat">
              <span className="text-[#112EAF] font-bold">
                Coding club TKMCE
              </span>{" "}
              is an initiative to inculcate the culture of programming and
              development in our institute. We create a platform which allows
              students to gain assistance and mentorship to enhance their coding
              ability. We ensure that every student here at TKMCE should have an
              opportunity to learn how to code and develop a passion for it. Our
              aim is to impart and instill this culture of learning-by-practice
              among students and professionals alike, and to that end, our team
              organizes a multitude of events throughout the year.
            </p>
          </div>
          <div className="min-h-screen flex flex-col justify-center items-center text-center px-7 py-24 pb-32">
            <div className="text-4xl font-black mb-7">
              <span className="text-[#E5245A]">{"<"}</span>Vision
              <span className="text-[#E5245A]">{">"}</span>
            </div>
            <p className="font-montserrat">
              To inculcate the culture of programming and development among
              students and to enhance their coding ability.
            </p>
            <img src={VisionPic2} className="h-64" alt="Vision Mobile" />
            <div className="text-4xl font-black mb-7">
              <span className="text-[#E5245A]">{"<"}</span>Mission
              <span className="text-[#E5245A]">{">"}</span>
            </div>
            <p className="font-montserrat">
              To create a platform to impart and instill this culture of
              learning-by-practice among students and professionals alike, and
              to that end, our team organizes a multitude of events throughout
              the year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
