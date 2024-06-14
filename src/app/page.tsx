"use client";
import React, { useState, } from "react";
import {HyperspaceBackground} from "./components/background/animatedback";
import {Aboutme} from "./components/about/aboutme";
import {Education} from "./components/education/education";
import {Experience} from "./components/experience/experiences";
import {Projects} from "./components/projects/projects";
import { CSSTransition } from "react-transition-group";
import {Quickbar} from "./components/quickbar/quickbar";
import {ProjectsHeader} from "./components/projects/projectsHead";
import {ExperienceHeader} from "./components/experience/experienceHead";
import {Base} from "./components/background/base";
import Image from 'next/image';
import { EducationHeader } from "./components/education/educationHead";
import { WhatsNew } from "./components/whatsnew/whatsnew";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerClass = isExpanded
    ? "flex flex-col items-center justify-center bg-black font-mono text-lg"
    : "flex items-center justify-center h-screen bg-black font-mono text-lg";

  return (
    <div className={containerClass}>
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="z-10 absolute p-6 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 hover:ring-1 hover:ring-[#1f8278] transition-all duration-300 ease-out"
        >
          Learn more
          <br></br>
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
        <div className="w-4/5 sm:w-1/2 relative h-full text-base">
          <div className="sm:sticky top-0 z-50">
            <Quickbar />
          </div>
          <div
            id="whats-new"
            className="overflow-auto p-10 text-white rounded-lg h-1/4">
            <WhatsNew />
          </div>
          <div className="overflow-auto p-10 bg-opacity-0 text-white rounded-lg max-h-1/4">
            <Aboutme />
          </div>
          <div
            id="experience"
            className="overflow-auto p-10 sm:p-10 bg-opacity-90 text-white rounded-lg max-h-1/4"
          >
            <Experience />
          </div>
          <div
            id="education"
            className="overflow-auto p-10 text-white rounded-lg max-h-1/4"
          >
            <Education />
          </div>
          <div
            id="projects"
            className="overflow-auto p-10 text-white rounded-lg max-h-1/4"
          >
            <Projects />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;