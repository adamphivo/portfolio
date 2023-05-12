import styled, { keyframes } from "styled-components";
import { useState } from "react";

const wheel = keyframes`
    to {
	    opacity: 0;
		top: 60px;
	}
`;

const Icon = styled.div`
  width: 50px;
  height: 90px;
  border: 3px solid #333;
  border-radius: 60px;
  position: absolute;
  bottom: 4rem;
  transition-duration: 1s;
  transform: scale(0.7);
  &.invisible {
    opacity: 0;
  }
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    border-radius: 50%;
    opacity: 1;
    animation: ${wheel} 2s infinite;
    -webkit-animation: ${wheel} 2s infinite;
  }
`;

export default function ScrollDownIcon() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    window.scrollY ? setScrolled(true) : setScrolled(false);
  });

  return <Icon className={`${scrolled ? "invisible" : ""} scrollIcon`} />;
}
