import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Content from "./Content";
import { Fade } from "react-awesome-reveal";

const CanvasContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
`;

export default function Experience() {
  return (
    <Fade duration={2000} triggerOnce>
      <CanvasContainer>
        <Canvas>
          <Content />
        </Canvas>
      </CanvasContainer>
    </Fade>
  );
}
