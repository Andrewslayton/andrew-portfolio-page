import React, { useRef, useEffect, useState, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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
  const [hasSpun, setHasSpun] = useState(false);

  useEffect(() => {
    const initialLabels = [
      "", // Blank initially for other faces
      "",
      "",
      "",
      "Rotate Me", // First face initially says "Rotate Me"
      "",
    ];

    const spunLabels = [
      "Blog", // Change to "Blog" after spun
      "Education",
      "Experience",
      "Projects",
      "What's New",
      "About",
    ];

    const labels = hasSpun ? spunLabels : initialLabels;

    const materials = labels.map((label) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 512;
      canvas.height = 512;
      context!.fillStyle = "#FFFFFF"; // White background
      context!.fillRect(0, 0, canvas.width, canvas.height);
      context!.font = "48px Arial";
      context!.textAlign = "center";
      context!.fillStyle = "#000000"; // Black text color
      context!.fillText(label, 256, 256);

      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;

      return new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
    });

    if (meshRef.current) {
      meshRef.current.material = materials;
    }
  }, [hasSpun]);

  const handlePointerDown = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handlePointerMove = useCallback((event: MouseEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    setIsDragging(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    if (isDragging) {
      setHasSpun(true); // Set the state to true if the cube has been spun
    }
  }, [isDragging]);

  const handleClick = useCallback(() => {
    if (!isDragging && meshRef.current) {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(meshRef.current);

      if (intersects.length > 0) {
        const intersectedFaceIndex = intersects[0].face!.materialIndex;
        const sections: Section[] = [
          "blog", // Change to "blog" after spin
          "education",
          "experience",
          "projects",
          "whats-new",
          "about",
        ];
        onClickFace(sections[intersectedFaceIndex]);
      }
    }
  }, [camera, pointer, raycaster, onClickFace, isDragging]);

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", handlePointerDown);
    gl.domElement.addEventListener("mousemove", handlePointerMove);
    gl.domElement.addEventListener("mouseup", handlePointerUp);
    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("mousedown", handlePointerDown);
      gl.domElement.removeEventListener("mousemove", handlePointerMove);
      gl.domElement.removeEventListener("mouseup", handlePointerUp);
      gl.domElement.removeEventListener("click", handleClick);
    };
  }, [handlePointerDown, handlePointerMove, handlePointerUp, handleClick, gl]);

  return (
    <mesh ref={meshRef} scale={[3, 3, 3]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* The rest of the faces are rendered based on the materials */}
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
