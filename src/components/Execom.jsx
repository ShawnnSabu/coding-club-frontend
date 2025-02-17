import { useState } from "react";
import Header from "./Header";
import "../styles/execom.css";

import Shameem from "../assets/images/Shameem.png";
import Sangeeth from "../assets/images/Sangeeth.png";
import Sona from "../assets/images/Sona.png";
import Amit from "../assets/images/Amit.png";
import Aron from "../assets/images/Aron.png";
import Rohit from "../assets/images/Rohit.png";
import Afeef from "../assets/images/Afeef.png";
import Sreeresh from "../assets/images/Sreeresh.png";
import Mizhab from "../assets/images/Mizhab.png";
import Vishnu from "../assets/images/Vishnu.png";
import Hridya from "../assets/images/Hridya.png";
import Angelina from "../assets/images/Angelina.png";
import Jeff from "../assets/images/Jeff.png";
import Shikha from "../assets/images/Shikha.png";
import Alan from "../assets/images/Alan.png";
import Jobin from "../assets/images/Jobin.png";
import Swarag from "../assets/images/Swarag.png";
import Johan from "../assets/images/Johan.png";
import Aditya from "../assets/images/Aditya.png";
import Liya from "../assets/images/Liya.png";
import Fathima from "../assets/images/Fathima.png";

const Execom = () => {
  const [execomList, setExecomList] = useState([
    {
      title: "Faculty Incharge",
      members: [
        {
          id: 0,
          name: "Dr. Shameem Ansar A",
          role: "Faculty Coordinator",
          image: Shameem,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Chief Coordinators",
      members: [
        {
          id: 1,
          name: "Sangeeth",
          //   role: "Faculty Coordinator",
          image: Sangeeth,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          //   id: 1,
          name: "Sona",
          //   role: "Faculty Coordinator",
          image: Sona,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Program Coordinators",
      members: [
        {
          name: "Aron",
          image: Aron,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Rohit",
          image: Rohit,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Finance Head",
      members: [
        {
          name: "Afeef",
          image: Afeef,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Web Heads",
      members: [
        {
          name: "Sreeresh",
          image: Sreeresh,
          linkedin: "https://www.linkedin.com/in/sreeresh-ss-65b5b9257",

        },
        {
          name: "Amit",
          image: Amit,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Tech Team",
      members: [
        {
          name: "Mizhab",
          image: Mizhab,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Vishnu",
          image: Vishnu,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Design Team",
      members: [
        {
          name: "Hridya",
          position: "Head",
          image: Hridya,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },

        {
          name: "Jeff",
          image: Jeff,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },

        {
          name: "Angelina",
          image: Angelina,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
       
      ],
    },
    {
      title: "Execom Representatives",
      members: [
        {
          name: "Shikha",
          image: Shikha,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Alan",
          image: Alan,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Jobin",
          image: Jobin,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Swarag",
          image: Swarag,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Publicity Coordinators",
      members: [
        {
          name: "Johan",
          image: Johan,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Aditya",
          image: Aditya,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
    {
      title: "Documentatino Team",
      members: [
        {
          name: "Liya",
          position: "Head",
          image: Liya,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
        {
          name: "Fathima",
          image: Fathima,
          linkedin: "https://www.linkedin.com/in/sreeresh-profile",

        },
      ],
    },
  ]);

  const [items, setItems] = useState([
    { id: 0, title: 2022 },
    { id: 1, title: 2023 },
    { id: 2, title: 2024 },
    { id: 3, title: 2025 },
    { id: 4, title: 2026 },
  ]);

  const [currentYear, setCurrentYear] = useState(2024);

  const renderedCards = execomList.map((execom, index) => (
    <div key={index} className="flex flex-col items-center">
      <span className="text-xl font-bold">{execom.title}</span>

      <div className="execom-card flex gap-5 bg-whit rounded-lg shadow-lg p-3 ">
        {execom.members.map((member, index) => (
          <div
            className="flex flex-col items-center justify-between gap-2 transition-transform duration-300 transform hover:scale-105"
            key={index}
          >
            <span className="text-xs text-center">
              {member.position || " "}
            </span>

            <div className="flex flex-col items-center gap-2 justift-between">
              <img
                src={member.image}
                alt={member.name}
                className="execom-card-image w-32 object-cover shadow-md"
              />

              <span>{member.name} </span>
              
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Check LinkedIn profile"
                >
                  <img
                    src="/linkedIn.png"
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain rounded-lg"
                  />
                </a>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex flex-col gap-20 p-3 sm:px-14">
        <div className="flex">
          <div className="font-black text-4xl sm:text-6xl">EXECOM</div>
          <div className="flex-auto border-b-4 mb-2 ml-2"></div>
        </div>

        <div className=" ">
          <span className="rounded-lg bg-white p-2 px-4 text-black">
            {currentYear}
          </span>
        </div>

        <div className="flex justify-center">
          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
            {renderedCards}
          </div>
        </div>
      </div>
    </>
  );
};

export default Execom;
