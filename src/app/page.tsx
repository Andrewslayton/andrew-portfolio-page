"use client"
import ConnectedButton from "./components/expand/page";
import HyperspaceBackground from "./components/background/page";
import React, { useState } from "react";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // This function toggles the expanded state and, by extension, the visibility of the hyperspace background.
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      {/* Hyperspace background is shown based on isExpanded state */}
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

