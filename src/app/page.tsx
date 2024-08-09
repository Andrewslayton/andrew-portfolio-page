"use client"
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
      <div className="relative">
        <CubeCanvas onClickFace={handleCubeClick} />
      </div>
      <div className="flex-1 flex items-center justify-center">
        {renderSection()}
      </div>
    </div>
  );
};

export default HomePage;
