import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Tools from "./components/Tools/Tools";
import Grain from "./components/Grain";
import rolly from "rolly.js";

function App() {
  useEffect(() => {
    const view = document.querySelector(".app");
    const r = rolly({
      view,
      native: true,
      // other options
    });
    r.init();
  }, []);
  return (
    <>
      <Grain />
      <main className="app">
        <div data-scene>
          <Hero />
        </div>
        <div data-scene>
          <Projects />
        </div>
        <div data-scene>
          <Tools />
        </div>
        <div data-scene>
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
