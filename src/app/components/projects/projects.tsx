"use client";
import React, { useState, useEffect } from "react";

type GitHubProject = {
  html_url: string;
  name: string;
  description: string | null;
};

const staticProjects = [
  {
    name: "Lets Lift!",
    url: "https://github.com/Andrewslayton/LetsLift",
    description:
      "React and NextJs web app allowing users to interact with a Google map, select workouts, and connect with other users at the same location who chose similar workouts. All information is stored in AWS DynamoDB.",
  },
  {
    name: "PhoneChecker",
    url: "https://github.com/Andrewslayton/phoneChecker",
    description:
      "Python executable program built upon real-time video processing to predict when a user is looking down at their phone, using an algorithm constructed through various testing. Includes a leaderboard hosted on Vercel.",
  },
  {
    name: "Workout Social Media",
    url: "https://github.com/Andrewslayton/GVSU-CIS350-TeamTALK",
    description:
      "Group project built to understand the software development process while working with a team in the Agile workflow. Features a leaderboard, daily challenges, user storage, user data manipulation, Strava integration, and SQL for data storage.",
  },
  {
    name: "Who Wants You",
    url: "https://github.com/Andrewslayton/WhoWantsYou",
    description:
      "Python-Flask dating website with HTML, CSS, and SQLite, enabling users to create profiles, facilitating mutual matches.",
  },
  {
    name: "Discord Bots",
    url: "https://github.com/Andrewslayton/DiscBot",
    description:
      "A collection of Discord bots including a games bot, intro and outro bot, and various others, enhancing Discord server interactions.",
  },
];

export function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>([] as GitHubProject[]);

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
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-min mt-6">
        {staticProjects.map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="bg-black rounded-lg shadow-lg p-2 h-full flex flex-col justify-between">
              <a
                href={project.url}
                className="text-xl font-bold text-white hover:text-gray-300"
              >
                {project.name}
              </a>
              <p className="text-sm text-white mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-lg sm:text-l font-bold mt-6 mb-2 text-center">
        Most Recent GitHub Activity
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg p-4">
            <a
              href={project.html_url}
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
