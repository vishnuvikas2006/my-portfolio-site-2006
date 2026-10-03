"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Points } from "three";
import { AdditiveBlending, BufferAttribute, BufferGeometry } from "three";

function StarField() {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positionArray = new Float32Array(66 * 3);
    for (let index = 0; index < positionArray.length; index += 3) {
      const angle = (index / 3) * 2.399;
      const radius = 3 + ((index / 3) % 11) * 0.34;
      positionArray[index] = Math.cos(angle) * radius;
      positionArray[index + 1] = ((index / 3) % 8 - 4) * 0.66;
      positionArray[index + 2] = Math.sin(angle) * radius - 3;
    }
    const result = new BufferGeometry();
    result.setAttribute("position", new BufferAttribute(positionArray, 3));
    return result;
  }, []);

  useFrame(({ clock }) => {
    if (points.current) points.current.rotation.y = clock.getElapsedTime() * 0.012;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color="#45d7ff" size={0.035} transparent opacity={0.55} depthWrite={false} blending={AdditiveBlending} />
    </points>
  );
}

function Shapes() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.03;
      group.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.06;
    }
  });

  return (
    <group ref={group} position={[0, 0, -4]}>
      <mesh position={[-4.6, 1.9, -2]} rotation={[0.5, 0.3, 0.2]}>
        <icosahedronGeometry args={[0.25, 1]} />
        <meshBasicMaterial color="#b7a7ff" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[4.8, -1.8, -2]} rotation={[0.2, 0.7, 0]}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshBasicMaterial color="#9cf0be" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh position={[3.8, 3.2, -3]} rotation={[0.2, 0.4, 0.8]}>
        <tetrahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#45d7ff" wireframe transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="background-canvas" aria-hidden="true">
      <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 7], fov: 50 }} gl={{ alpha: true, antialias: false }}>
        <StarField />
        <Shapes />
      </Canvas>
    </div>
  );
}
