"use client";
import React, { useState, useEffect } from "react";

type GitHubProject = {
  html_url: string;
  name: string;
  description: string | null;
};

export function Projects() {
  // State to hold your projects
  const [projects, setProjects] = useState<GitHubProject[]>([] as GitHubProject[]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Andrewslayton/repos?sort=created&per_page=3"
        );
        if (!response.ok) {
          throw new Error("womp womp");
        }
        const data: GitHubProject[] = await response.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full">
      <div className="space-y-4">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            Project Name
          </a>
          <p className="text-sm text-white mt-2">
            Project description goes here. This is a short summary of the
            project, its goals, and technologies used.
          </p>
        </div>
      </div>

      <h2 className="text-lg sm:text-l font-bold mt-6 mb-2 text-center">
        Most Recent Github Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg p-4">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-white hover:text-gray-300"
            >
              {project.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
