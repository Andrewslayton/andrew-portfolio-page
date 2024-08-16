"use client";
import React, { useState } from "react";
import { Aboutme } from "./components/about/aboutme";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experiences";
import CubeCanvas from "./components/cube/cube";
import { Projects } from "./components/projects/projects";
import { WhatsNew } from "./components/whatsnew/whatsnew";
import { Blog } from "./components/blog/blog";

type Section =
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "whats-new"
  | "blog"
  | null;

const HomePage = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("about");
  const [isCubeEnabled, setIsCubeEnabled] = useState(true);

  const handleCubeClick = (section: Section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "about":
        return <Aboutme />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "whats-new":
        return <WhatsNew />;
      case "blog":
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black font-mono text-lg">
      <button
        className="p-2 m-4 bg-gray-800 text-white rounded"
        onClick={() => setIsCubeEnabled(!isCubeEnabled)}
      >
        {isCubeEnabled ? "Disable Cube" : "Enable Cube"}
      </button>
      <div className="relative">
        {isCubeEnabled && <CubeCanvas onClickFace={handleCubeClick} />}
      </div>
      <div
        className={`flex-1 flex items-center justify-center ${
          isCubeEnabled ? "" : "overflow-y-auto"
        }`}
      >
        {isCubeEnabled ? (
          renderSection()
        ) : (
          <div className="flex flex-col space-y-4 p-4">
            <Aboutme />
            <Education />
            <Experience />
            <Projects />
            <WhatsNew />
            <Blog />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;