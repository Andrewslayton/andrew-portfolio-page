"use client";
import React, { useState, useEffect } from "react";

type GitHubProject = {
  html_url: string;
  name: string;
  pushed_at: string | null;
};

const staticProjects = [
  {
    name: "Lets Lift!",
    url: "https://github.com/Andrewslayton/LetsLift",
    description:
      "React and NextJs web app allowing users to log in using google then interact with a Google map to select an exact location, select workouts, and connect with other users if they have selected the same muscle groups. All information is stored in AWS DynamoDB.",
  },
  {
    name: "PhoneChecker",
    url: "https://github.com/Andrewslayton/phoneChecker",
    description:
      "Python executable program built upon real-time video processing to predict when a user is looking down at their phone, using an algorithm constructed through various testing. Includes a connected website to handle api requests and display leaderboard.",
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
      "Python-Flask dating website with HTML, CSS, and SQLite, enabling users to create profiles and browse through a selection of other profiles to facilitate a match.",
  },
  {
    name: "Discord Bots",
    url: "https://github.com/Andrewslayton/DiscBot",
    description:
      "A collection of Discord bots including a games bot, intro and outro bot, and various others, enhancing Discord server interactions.",
  },
  {
    name: "GameMods",
    url: "https://thunderstore.io/c/repo/p/REPODEMON/EnhancedGodMode/",
    description:
      "Unity engine plugin for the game R.E.P.O that helps new players understand the game by making them invincible and spawning valuables. Hostered a community and over 40,000 downloads.",
  },
];

export function Projects() {
  return (
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full max-w-4xl text-white pb-20">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {staticProjects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg p-4">
            <a
              href={project.url}
              className="text-base sm:text-lg md:text-xl font-bold overflow-auto text-white hover:text-gray-300"
            >
              {project.name}
            </a>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}