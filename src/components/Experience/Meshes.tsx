import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function Meshes() {
  const sphereRef = useRef<Mesh>(null!);
  const topSphere = useRef<Mesh>(null!);
  const bottomSphere = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta;
    bottomSphere.current.rotation.x += delta;
    topSphere.current.rotation.x -= delta;
  });

  return (
    <>
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="#94e734" wireframe />
      </mesh>
      <mesh ref={topSphere} position={[0, -2, 0]}>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshBasicMaterial color="#94e734" wireframe />
      </mesh>
      <mesh ref={bottomSphere} position={[0, 2, 0]}>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshBasicMaterial color="#94e734" wireframe />
      </mesh>
    </>
  );
}
