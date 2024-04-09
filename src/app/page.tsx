"use client";
import { ConnectedButton } from "./components/expand/connectButton";
import { HyperspaceBackground } from "./components/background/animatedback";
import React, { useState } from "react";
import Experience from "./components/experience/experiences";
import Projects from "./components/projects/projects";
import Education from "./components/education/education";
import Aboutme from "./components/about/aboutme";


const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  
const renderContent = () => {
  switch (currentView) {
    case "experience":
      return <Experience />;
    case "projects":
      return <Projects />;
    case "education":
      return <Education />;
    case "about":
      return <Aboutme />;
    default:
      return null; 
  }
};
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      <HyperspaceBackground isVisible={isExpanded} />




      <div className="z-10 flex flex-wrap items-center justify-center space-x-4 space-y-20">
        <div
          className={`flex-1 flex justify-between ${
            isExpanded ? "visible" : "invisible"
          }`}
        >
          <ConnectedButton
            label="Experience"
            additionalClasses={
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }
          />
          <ConnectedButton
            label="Projects"
            additionalClasses={
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }
          />
        </div>

        <div className="flex justify-center w-full">
          <button
            onClick={toggleExpand}
            className="p-6 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-out"
          >
            Dive In
          </button>
        </div>

        <div
          className={`flex-1 flex justify-between ${
            isExpanded ? "visible" : "invisible"
          }`}
        >
          <ConnectedButton
            label="Education"
            additionalClasses={
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }
          />
          <ConnectedButton
            label="About Me"
            additionalClasses={
              isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
