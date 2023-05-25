import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";
import { Rock } from "../Models/Rock";

function getRandomPosition(): number {
  return Math.random() > 0.5 ? Math.random() * 30 : Math.random() * 30 * -1;
}

function Models() {
  return (
    <>
      {Array(500)
        .fill(null)
        .map((_, index) => {
          const position: [number, number, number] = [getRandomPosition(), getRandomPosition(), getRandomPosition()];
          return <Rock key={index} position={position} scale={Math.random()} rotation-x={Math.PI * Math.random() * 360}></Rock>;
        })}
    </>
  );
}

export default function Content() {
  const content = useRef<Group>(null!);

  useFrame((_, delta) => {
    content.current.rotation.y += delta * 0.2;
    content.current.rotation.x -= delta * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.3} color={"#94e734"}></ambientLight>
      <pointLight intensity={1} color={"#94e734"}></pointLight>
      <spotLight intensity={1} color="#34e1e7"></spotLight>
      <spotLight intensity={1} position={[0, 10, 0]} color="red"></spotLight>
      <group ref={content} position={[0, 0, 0]}>
        <Models />
      </group>
    </>
  );
}
