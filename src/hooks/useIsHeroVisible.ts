import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

export default function useIsHeroSectionVisible() {
  const ref = useRef(document.querySelector("#section-0"));
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isHeroSectionVisible = !!entry?.isIntersecting;
  return isHeroSectionVisible;
}
