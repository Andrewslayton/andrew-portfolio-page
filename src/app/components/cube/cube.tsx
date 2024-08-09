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
      canvas.width = 512;
      canvas.height = 512;
      context!.fillStyle = "#1f8278"; 
      context!.fillRect(0, 0, canvas.width, canvas.height);
      context!.font = "48px Arial";
      context!.textAlign = "center";
      context!.fillStyle = "#000000"; 
      context!.fillText(label, 256, 256);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      return material;
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
    <mesh ref={meshRef} scale={[3, 3, 3]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#1f8278" /> {/* Set the cube color here */}
    </mesh>
  );
};

const CubeCanvas: React.FC<CubeProps> = ({ onClickFace }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "40vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
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
