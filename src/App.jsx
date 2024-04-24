import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex">
        <div class=" min-h-[1020px] bg-red-600 w-[30vw]">
          <h1 class="font-serif text-2xl text-center mt-20 ">Pratik Ghotane</h1>
        </div>
        <div class="">
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}

export default App;
