"use client";

import { Float, Line, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function NeuralCore() {
  const core = useRef<Group>(null);
  const halo = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y = elapsed * 0.22 + pointer.x * 0.18;
      core.current.rotation.x = Math.sin(elapsed * 0.35) * 0.1 + pointer.y * 0.12;
    }
    if (halo.current) halo.current.rotation.z = elapsed * 0.15;
  });

  const nodes: [number, number, number][] = [
    [-1.2, 0.35, 0.2], [1.15, 0.5, -0.15], [-0.7, -0.95, 0.55], [0.78, -0.9, 0.35], [0, 1.3, -0.2],
  ];

  return (
    <group ref={core}>
      <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.65}>
        <mesh>
          <icosahedronGeometry args={[0.88, 2]} />
          <meshStandardMaterial color="#101d34" emissive="#225b87" emissiveIntensity={0.35} metalness={0.8} roughness={0.18} wireframe />
        </mesh>
        <mesh scale={0.34}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#d8f8ff" emissive="#41d9ff" emissiveIntensity={2.4} roughness={0.22} />
        </mesh>
        <mesh ref={halo} rotation={[1.15, 0.1, 0.2]}>
          <torusGeometry args={[1.32, 0.02, 10, 80]} />
          <meshBasicMaterial color="#a998ff" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[-0.35, 0.7, 0.4]}>
          <torusGeometry args={[1.62, 0.015, 8, 80]} />
          <meshBasicMaterial color="#57e7bb" transparent opacity={0.55} />
        </mesh>
        {nodes.map((position, index) => (
          <group key={position.join("-")}>
            <mesh position={position}>
              <sphereGeometry args={[0.105, 16, 16]} />
              <meshBasicMaterial color={index % 2 === 0 ? "#55dfff" : "#b8a7ff"} />
            </mesh>
            <Line points={[[0, 0, 0], position]} color={index % 2 === 0 ? "#45d7ff" : "#ac9cff"} transparent opacity={0.32} lineWidth={0.8} />
          </group>
        ))}
      </Float>
    </group>
  );
}

export function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 42 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.35} />
      <pointLight position={[2.5, 2.5, 3]} color="#73e4ff" intensity={8} distance={10} />
      <pointLight position={[-3, -2, 2]} color="#a898ff" intensity={5} distance={9} />
      <NeuralCore />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} minPolarAngle={1.1} maxPolarAngle={2.1} />
    </Canvas>
  );
}
