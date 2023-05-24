import { useEffect } from "react";
import rolly from "rolly.js";

export default function useSmoothScroll() {
  useEffect(() => {
    const view = document.querySelector(".app");
    const r = rolly({
      view,
      native: true,
      // other options
    });
    r.init();
  }, []);
}
