"use client";
import React, { useState } from "react";
import {HyperspaceBackground} from "./components/background/animatedback";
import {Aboutme} from "./components/about/aboutme";
import {Education} from "./components/education/education";
import {Experience} from "./components/experience/experiences";
import {Projects} from "./components/projects/projects";
import { ConnectedButton } from "./components/expand/connectButton";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-black relative">
      <HyperspaceBackground isVisible={isExpanded} />

      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="z-10 absolute p-6 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-out"
        >
          Dive In
        </button>
      )}

      {isExpanded && (
        <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-full absolute">
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg">
            <Aboutme />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg">
            <Experience />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg">
            <Education />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg">
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;