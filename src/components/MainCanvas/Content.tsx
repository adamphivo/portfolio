import { PrimitiveProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
  const [gltf, gltf1] = useLoader(GLTFLoader, ["/models/cheum.gltf", "/models/superCheum.gltf"]);
  const cheumRef = useRef<PrimitiveProps>(null!);
  const cheumRef2 = useRef<PrimitiveProps>(null!);

  useFrame((_, delta) => {
    cheumRef.current.rotation.x += delta;
    cheumRef.current.rotation.y -= delta;
    cheumRef2.current.rotation.y += delta;
  });

  return (
    <>
      <primitive ref={cheumRef} scale={0.5} position={[10, 0, 0]} object={gltf.scene} />
      <primitive ref={cheumRef2} scale={0.5} position={[-10, 0, 0]} object={gltf1.scene} />
    </>
  );
}

export default function Content() {
  return (
    <>
      <ambientLight intensity={1} color={"#94e734"}></ambientLight>
      <pointLight intensity={1} color={"blue"}></pointLight>
      <spotLight intensity={1} color={"purple"}></spotLight>
      <group position={[0, 0, -5]} scale={0.7}>
        <Model />
      </group>
    </>
  );
}
