"use client";
import React, { useState } from "react";
import {HyperspaceBackground} from "./components/background/animatedback";
import {Aboutme} from "./components/about/aboutme";
import {Education} from "./components/education/education";
import {Experience} from "./components/experience/experiences";
import {Projects} from "./components/projects/projects";
import { ConnectedButton } from "./components/expand/connectButton";
import Image from "next/image";

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
        <div className="w-2/4 relative h-screen ">
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <Image src="/drawing.svg" alt="Andrew Slayton" width={200} height={200} className="rounded-full" />
            <Aboutme />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <h2 className="text-2xl mb-4">Experience</h2>
            <Experience />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <h2 className="text-2xl mb-4">Education</h2>
            <Education />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <h2 className="text-2xl mb-4">Projects</h2>
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;