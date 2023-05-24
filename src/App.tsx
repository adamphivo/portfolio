import useSmoothScroll from "./hooks/useSmoothScroll";
import { sections } from "./sections";
import Grain from "./components/Grain";

function App() {
  useSmoothScroll();

  const elements = sections.map((item) => (
    <div data-scene>
      <slot children={item()}></slot>
    </div>
  ));
  return (
    <>
      <main className="app">{elements}</main>
      {/* Fixed elements */}
      <Grain />
    </>
  );
}

export default App;
