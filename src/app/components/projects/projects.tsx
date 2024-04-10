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
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full ">
      <div className="space-y-4 mt-6 ">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href="https://github.com/Andrewslayton/LetsLift"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            Lets Lift!
          </a>
          <p className="text-sm text-white mt-2">
            React and NextJs web app allowing users to interact with a Google
            map, select workouts, and connect with other users at the same
            location who chose similar workouts. All information is stored in
            AWS Dynamodb
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-6 ">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href="https://github.com/Andrewslayton/phoneChecker"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            PhoneChecker
          </a>
          <p className="text-sm text-white mt-2">
            Python executable program that is built upon real time video
            processing and predictions of a user’s eyes, chin, and forehead.
            Through various testing an algorithm was constructed to predict when
            a user is looking down at their phone. The application communicates
            through a connected web application for HTTP requests and displays a
            leaderboard hosted on Vercel.
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-6 ">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href="https://github.com/Andrewslayton/GVSU-CIS350-TeamTALK"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            Workout Social Media
          </a>
          <p className="text-sm text-white mt-2">
            Group project built through the entire software development process
            to understand how a software development team completes a task. The
            website has a leaderboard, daily challenges, and user storage. HTML,
            CSS, and Flask were the largest components for this task. Strava
            integration and SQL data storage was used for an interactive points
            system and public leaderboard.
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-6 ">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href="https://github.com/Andrewslayton/WhoWantsYou"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            Who Wants You
          </a>
          <p className="text-sm text-white mt-2">
            Python-Flask dating website with HTML, CSS, and Sqlite, enabling
            users to create profiles and facilitating mutual matches
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-6 ">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <a
            href="https://github.com/Andrewslayton/DiscBot"
            className="text-xl font-bold text-white hover:text-gray-300"
          >
            Discord Bots
          </a>
          <p className="text-sm text-white mt-2">
            Collection of all the discord bots I have created. Bots include a
            games bot, intro and outro bot, a games bot, and various others.
          </p>
        </div>
      </div>

      <h2 className="text-lg sm:text-l font-bold mt-6 mb-2 text-center">
        What I'm Working On
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
