import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SkillComponent from "./components/SkillComponent";

function App() {
  const skills = [
    {
      name: "React",
      percentage: "w-[90%]",
    },
    {
      name: "JavaScript",
      percentage: "w-[90%]",
    },
    {
      name: "React Native",
      percentage: "w-[75%]",
    },
    {
      name: "TailwindCSS",
      percentage: "w-[90%]",
    },
    {
      name: "Bootstrap",
      percentage: "w-[90%]",
    },
    {
      name: "JQuery",
      percentage: "w-[90%]",
    },
    {
      name: "Rest API's",
      percentage: "w-[80%]",
    },
    {
      name: "Redux",
      percentage: "w-[85%]",
    },
    {
      name: "NodeJS",
      percentage: "w-[90%]",
    },
    {
      name: "Angular",
      percentage: "w-[70%]",
    },
    {
      name: "HTML/CSS",
      percentage: "w-[90%]",
    },
    {
      name: "MongoDB",
      percentage: "w-[80%]",
    },
    {
      name: "MySQL",
      percentage: "w-[90%]",
    },
    {
      name: "GIT",
      percentage: "w-[90%]",
    },
    {
      name: "SQL",
      percentage: "w-[90%]",
    },
  ];

  const Languages = [
    {
      name: "English",
      percentage: "w-[90%]",
    },
    {
      name: "Hindi",
      percentage: "w-[80%]",
    },
    {
      name: "Marathi",
      percentage: "w-[90%]",
    },
  ];

  return (
    <>
      <div class="flex">
        <div class=" min-h-[1028px] bg-red-600 w-[30vw] px-4">
          <h1 class="font-serif text-2xl text-center mt-10 text-white mb-[1vh]">
            Pratik Ghotane
          </h1>
          <div className="border mx-16 mb-[1vh]"></div>
          <p className="text-white text-sm text-center font-serif font-extralight ">
            Software Engineer(Frontend Developer)
          </p>
          <div className="mt-[3vh] text-white">
            <h3 className="font-serif text-white text-xl mb-2">Details</h3>
            <p className="text-sm">Belgaum, 591237</p>
            <p className="text-sm">India</p>
            <p className="text-sm">8660309675</p>
            <p className="text-sm">pratikghotaneo@gmail.com</p>
          </div>
          <div className="mt-[3vh]">
            <h3 className="font-serif text-white text-xl">Skills</h3>
            {skills.map((item) => (
              <SkillComponent skill={item} showProgress={true} />
            ))}
          </div>
          <div className="mt-[3vh]">
            <h3 className="font-serif text-white text-xl">Languages</h3>
            {Languages.map((item) => (
              <SkillComponent skill={item} showProgress={true} />
            ))}
          </div>
        </div>
        <div class="">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}

export default App;
