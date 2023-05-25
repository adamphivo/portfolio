import useSmoothScroll from "./hooks/useSmoothScroll";
import { sections } from "./sections";
import Grain from "./components/Grain";
import Experience from "./components/MainCanvas/Canvas";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";

function App() {
  useSmoothScroll();

  const elements = sections.map((item) => (
    <div data-scene>
      <slot children={item()}></slot>
    </div>
  ));

  return (
    <>
      <Suspense fallback={<Loader />}>
        <main className="app">{elements}</main>
        {/* Fixed elements */}
        <Experience />
      </Suspense>
      <Grain />
    </>
  );
}

export default App;
