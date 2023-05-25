import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Content from "./Content";

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
    <CanvasContainer>
      <Canvas>
        <Content />
      </Canvas>
    </CanvasContainer>
  );
}
