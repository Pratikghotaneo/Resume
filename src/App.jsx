import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SkillComponent from "./components/SkillComponent";

function App() {
  const skills = [
    {
      name: "React",
      percentage: "w-[80%]",
    },
    {
      name: "JavaScript",
      percentage: "w-[80%]",
    },
    {
      name: "React Native",
      percentage: "w-[60%]",
    },
    {
      name: "TailwindCSS",
      percentage: "w-[80%]",
    },
    {
      name: "Bootstrap",
      percentage: "w-[80%]",
    },
    {
      name: "JQuery",
      percentage: "w-[80%]",
    },
    {
      name: "Rest API's",
      percentage: "w-[80%]",
    },
    {
      name: "Redux",
      percentage: "w-[75%]",
    },
    {
      name: "NodeJS",
      percentage: "w-[70%]",
    },
    {
      name: "Angular",
      percentage: "w-[70%]",
    },
    {
      name: "HTML/CSS",
      percentage: "w-[80%]",
    },
    {
      name: "MongoDB",
      percentage: "w-[70%]",
    },
    {
      name: "MySQL",
      percentage: "w-[80%]",
    },
    {
      name: "GIT",
      percentage: "w-[80%]",
    },
    {
      name: "SQL",
      percentage: "w-[80%]",
    },
  ];

  return (
    <>
      <div class="flex">
        <div class=" min-h-[1020px] bg-red-600 w-[30vw] px-14">
          <h1 class="font-serif text-2xl text-center mt-10 text-white mb-[2vh]">
            Pratik Ghotane
          </h1>
          <div className="border mx-32 mb-[2vh]"></div>
          <p className="text-white text-sm text-center font-serif font-extralight ">
            Software Engineer(Frontend Developer)
          </p>
          <div className="mt-[3vh]">
            <h3 className="font-serif text-white text-xl">Skills</h3>
            {skills.map((item) => (
              <SkillComponent skill={item} showProgress={true}/>
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
