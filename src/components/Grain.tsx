import styled, { keyframes } from "styled-components";
import noise from "../assets/imgs/noise.png";

const grain = keyframes`
    0%,
  to {
    transform: translate(0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%);
  }
  70% {
    transform: translateY(15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
`;

const Section = styled.div`
  position: fixed;
  z-index: 9999;
  top: -300%;
  left: -150%;
  height: 600%;
  width: 600%;
  z-index: 9999;
  pointer-events: none;
  background-size: 200px;
  background-repeat: repeat;
  background-image: url(${noise});
  animation: ${grain} 7s steps(10) infinite;
  opacity: 0.1;
`;

export default function Grain() {
  return (
    <>
      <Section />
    </>
  );
}
