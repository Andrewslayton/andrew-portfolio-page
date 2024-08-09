import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Background = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ mouse }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = mouse.y * 0.1;
      pointsRef.current.rotation.y = mouse.x * 0.1;
    }
  });

  const vertices = Array.from({ length: 1000 }, () => [
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
    (Math.random() - 0.5) * 10,
  ]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(vertices.flat())}
          count={vertices.length}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
};

const BackgroundCanvas = () => (
  <Canvas
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
    }}
    camera={{ position: [0, 0, 5] }}
  >
    <ambientLight />
    <Background />
  </Canvas>
);

export default BackgroundCanvas;
