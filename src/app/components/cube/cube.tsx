import React, { useRef, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

type Section =
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "whats-new"
  | "blog"
  | null;

type CubeProps = {
  onClickFace: (section: Section) => void;
};

const Cube: React.FC<CubeProps> = ({ onClickFace }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const labels = [
      "About",
      "Education",
      "Experience",
      "Projects",
      "What's New",
      "Blog",
    ];
    const materials = labels.map((label) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 512; // Increased texture size for larger cube
      canvas.height = 512;
      context!.fillStyle = "#FFF";
      context!.font = "48px Arial"; // Increased font size
      context!.textAlign = "center";
      context!.fillText(label, 256, 256); // Centered text in larger texture

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      return new THREE.MeshBasicMaterial({ map: texture });
    });

    if (meshRef.current) {
      meshRef.current.material = materials;
    }
  }, []);

  const handlePointerDown = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerMove = useCallback((event: MouseEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    setIsDragging(true);
  }, []);

  const handleClick = useCallback(() => {
    if (!isDragging && meshRef.current) {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(meshRef.current);

      if (intersects.length > 0) {
        const intersectedFaceIndex = intersects[0].face!.materialIndex;
        const sections: Section[] = [
          "about",
          "education",
          "experience",
          "projects",
          "whats-new",
          "blog",
        ];
        onClickFace(sections[intersectedFaceIndex]);
      }
    }
  }, [camera, pointer, raycaster, onClickFace, isDragging]);

  useFrame(() => {
    gl.domElement.addEventListener("mousedown", handlePointerDown);
    gl.domElement.addEventListener("mousemove", handlePointerMove);
    gl.domElement.addEventListener("click", handleClick);
    return () => {
      gl.domElement.removeEventListener("mousedown", handlePointerDown);
      gl.domElement.removeEventListener("mousemove", handlePointerMove);
      gl.domElement.removeEventListener("click", handleClick);
    };
  });

  return (
    <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      {" "}
      {/* Increased size of the cube */}
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};

const CubeCanvas: React.FC<CubeProps> = ({ onClickFace }) => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "30vh", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube onClickFace={onClickFace} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  </div>
);

export default CubeCanvas;
