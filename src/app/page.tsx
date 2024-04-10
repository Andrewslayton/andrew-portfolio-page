"use client";
import React, { useState } from "react";
import {HyperspaceBackground} from "./components/background/animatedback";
import {Aboutme} from "./components/about/aboutme";
import {Education} from "./components/education/education";
import {Experience} from "./components/experience/experiences";
import {Projects} from "./components/projects/projects";
import {ProjectsHeader} from "./components/projects/projectsHead";
import {ExperienceHeader} from "./components/experience/experienceHead";
import {Base} from "./components/background/base";
import { EducationHeader } from "./components/education/educationHead";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen bg-black ">
      <HyperspaceBackground isVisible={isExpanded} />
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="z-10 absolute p-6 bg-black text-white rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-out"
        >
          Dive Deeper
        </button>
      )}
      {!isExpanded && (
        <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
          <div className="w-full h-1/5">
            <Base />
          </div>
        </div>
      )}

      {isExpanded && (
        <div className="w- 4/5 sm:w-1/2 relative h-screen bg-black">
          <div className="overflow-auto p-10  bg-opacity-0 bg-black text-white rounded-lg max-h-1/4">
            <Aboutme />
          </div>
          <div className="overflow-auto p-10 sm:p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <ExperienceHeader />
            <Experience />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <EducationHeader />
            <Education />
          </div>
          <div className="overflow-auto p-10 bg-opacity-90 bg-black text-white rounded-lg max-h-1/4">
            <ProjectsHeader />
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;