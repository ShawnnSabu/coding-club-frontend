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
          name: "Sangeeth ",
          //   role: "Faculty Coordinator",
          image: Sangeeth,
          linkedin: "https://www.linkedin.com/in/sangeeth-s-872aa6282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

        },
        {
          //   id: 1,
          name: "Sona",
          //   role: "Faculty Coordinator",
          image: Sona,
          linkedin: "https://www.linkedin.com/in/sona-f-shukoor",

        },
      ],
    },
    {
      title: "Program Coordinators",
      members: [
        {
          name: "Aron",
          image: Aron,
          linkedin: "https://www.linkedin.com/in/amtom",

        },
        {
          name: "Rohit",
          image: Rohit,
          linkedin: "https://www.linkedin.com/in/rohith-mahesh-79b714291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

        },
      ],
    },
    {
      title: "Finance Head",
      members: [
        {
          name: "Afeef",
          image: Afeef,
          linkedin: "https://www.linkedin.com/in/mohamed-afeef-8638ba25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

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
          linkedin: "https://www.linkedin.com/in/amitstredz",

        },
      ],
    },
    {
      title: "Tech Team",
      members: [
        {
          name: "Mizhab",
          image: Mizhab,
          linkedin: "https://www.linkedin.com/in/muhammed-mizhab-m-m-39259a211",

        },
        {
          name: "Vishnu",
          image: Vishnu,
          linkedin: "https://www.linkedin.com/in/vishnumeta/",

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
          linkedin: "https://www.linkedin.com/in/hridyab",

        },

        {
          name: "Jeff",
          image: Jeff,
          linkedin: "https://in.linkedin.com/in/jeff-varghese-jo-92621b257",

        },

        {
          name: "Angelina",
          image: Angelina,
          linkedin: "https://www.linkedin.com/in/angelina-rose-9b312b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

        },
       
      ],
    },
    {
      title: "Execom Representatives",
      members: [
        {
          name: "Shikha",
          image: Shikha,
          linkedin: "https://www.linkedin.com/in/shikha-rajeev-586808300",

        },
        {
          name: "Alan",
          image: Alan,
          linkedin: "https://www.linkedin.com/in/alansj",

        },
        {
          name: "Jobin",
          image: Jobin,
          linkedin: " https://www.linkedin.com/in/jobin-a-j-75b249324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

        },
        {
          name: "Swarag",
          image: Swarag,
          linkedin: "https://www.linkedin.com/in/swarag-siby-667933291/",

        },
      ],
    },
    {
      title: "Publicity Coordinators",
      members: [
        {
          name: "Johan",
          image: Johan,
          linkedin: "https://www.linkedin.com/in/johan-sergi-7a3489271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

        },
        {
          name: "Aditya",
          image: Aditya,
          linkedin: "https://www.linkedin.com/in/adityacm",

        },
      ],
    },
    {
      title: "Documentation Team",
      members: [
        {
          name: "Liya",
          position: "Head",
          image: Liya,
          linkedin: "https://www.linkedin.com/in/liya-fathima-b8148a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

        },
        {
          name: "Fathima",
          image: Fathima,
          linkedin: "http://linkedin.com/in/fathima-hariz-15532729a",

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
