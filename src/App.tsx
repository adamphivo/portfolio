import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Tools from "./components/Tools/Tools";
import Grain from "./components/Grain";

function App() {
  return (
    <>
      <Grain />
      <main>
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </main>
    </>
  );
}

export default App;
