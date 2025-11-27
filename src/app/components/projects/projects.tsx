"use client";
import React from "react";
import { projectEntries } from "../../data/monopolyData";

export function Projects() {
  return (
    <div className="bg-[#D7BDE2] p-4 rounded-lg w-full text-white pb-20">
      <h2 className="text-lg sm:text-xl font-bold text-[#4A235A] mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projectEntries.map((project) => (
          <div key={project.id} className="rounded-lg shadow-lg p-4">
            <a
              href={project.url}
              className="text-base sm:text-lg md:text-xl font-bold text-[#4A235A] hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <p className="text-sm text-[#4A235A] mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}