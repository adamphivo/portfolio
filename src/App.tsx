import useSmoothScroll from "./hooks/useSmoothScroll";
import { sections } from "./sections";
import Grain from "./components/Grain";
import Experience from "./components/MainCanvas/Canvas";

function App() {
  useSmoothScroll();

  const elements = sections.map((item, index) => (
    <div data-scene key={index} id={`section-${index}`}>
      <slot children={item()}></slot>
    </div>
  ));

  return (
    <>
      <main className="app">{elements}</main>
      {/* Fixed elements */}
      <Experience />
      <Grain />
    </>
  );
}

export default App;
