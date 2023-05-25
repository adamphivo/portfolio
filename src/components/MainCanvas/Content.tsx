import { PrimitiveProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, SpotLight } from "three";

function Model() {
  const [gltf, gltf1] = useLoader(GLTFLoader, ["/models/cheum.gltf", "/models/superCheum.gltf"]);
  const cheumRef = useRef<PrimitiveProps>(null!);

  useFrame((_, delta) => {
    console.log(delta);
    cheumRef.current.rotation.x += delta;
    cheumRef.current.rotation.y -= delta;
  });

  return (
    <>
      <primitive ref={cheumRef} scale={0.5} position={[4, 0, 0]} object={gltf.scene} />
      <primitive scale={0.5} position={[-4, 0, 0]} object={gltf1.scene} />
    </>
  );
}

export default function Content() {
  const trucCheumRef = useRef<Group>(null!);
  const lightRed = useRef<SpotLight>(null!);

  useFrame((_, delta) => {
    trucCheumRef.current.rotation.y += delta;
  });

  return (
    <>
      <ambientLight intensity={1} color={"#94e734"}></ambientLight>
      <pointLight intensity={1} color={"blue"}></pointLight>
      <spotLight ref={lightRed} intensity={1} color={"purple"}></spotLight>
      <group ref={trucCheumRef} position={[0, 0, -5]} scale={0.7}>
        <Model />
      </group>
    </>
  );
}
