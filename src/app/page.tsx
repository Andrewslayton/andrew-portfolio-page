"use client";
import React, { useState } from "react";
import { Aboutme } from "./components/about/aboutme";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experiences";
import { Projects } from "./components/projects/projects";
import { WhatsNew } from "./components/whatsnew/whatsnew";
import { Blog } from "./components/blog/blog";
import MonopolyBoard from "./components/monopoly/MonopolyBoard";

type Section =
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "whats-new"
  | "blog"
  | null;

const HomePage = () => {
  const [isSimpleExperience, setIsSimpleExperience] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 font-mono text-lg">
      <button
        className="p-2 m-4 bg-gray-800 shadow-lg text-white rounded"
        onClick={() => setIsSimpleExperience((prev) => !prev)}
      >
        {isSimpleExperience ? "Monopoly experience" : "Simple experience"}
      </button>
      <div className="flex-1 flex items-center justify-center">
        {isSimpleExperience ? (
          <div className="w-full h-full overflow-y-auto flex justify-center">
            <div className="flex flex-col space-y-4 p-4 max-w-4xl w-full">
              <Aboutme />
              <Education />
              <Experience />
              <Projects />
              <WhatsNew />
              <Blog />
            </div>
          </div>
        ) : (
          <MonopolyBoard />
        )}
      </div>
    </div>
  );
};

export default HomePage;