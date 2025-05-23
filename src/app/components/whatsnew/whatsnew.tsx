"use client";
import React, { useState, useEffect } from "react";

type GitHubProject = {
  html_url: string;
  name: string;
  pushed_at: string | null;
  description: string;
  commit_message?: string;
};

export function WhatsNew() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Andrewslayton/repos?sort=pushed&per_page=10"
        );
        if (!response.ok) {
          throw new Error("Error fetching projects");
        }
        const data: GitHubProject[] = await response.json();

        const fetchCommitMessages = async (projects: GitHubProject[]) => {
          const projectsWithCommitMessages = await Promise.all(
            projects.map(async (project) => {
              try {
                const commitsResponse = await fetch(
                  `https://api.github.com/repos/Andrewslayton/${project.name}/commits?per_page=1`
                );
                if (!commitsResponse.ok) {
                  throw new Error("Error fetching commit message");
                }
                const commitsData = await commitsResponse.json();
                return {
                  ...project,
                  commit_message:
                    commitsData[0]?.commit?.message ||
                    "Forgot to write a message :D",
                };
              } catch (error) {
                return {
                  ...project,
                  commit_message: "No commit message available.",
                };
              }
            })
          );
          setProjects(projectsWithCommitMessages);
        };

        fetchCommitMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No recent commits";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const nextProjects = () => {
    if (startIndex + 4 < projects.length) {
      setTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex + 4);
        setTransitioning(false);
      }, 500); 
    }
  };

  const prevProjects = () => {
    if (startIndex > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => prevIndex - 4);
        setTransitioning(false);
      }, 500); 
    }
  };

 return (
   <div className="bg-[#D7BDE2] p-4 rounded-lg overflow-auto h-full max-w-4xl">
     <div className="flex justify-between items-center mb-4">
       <h2 className="text-lg sm:text-xl font-bold text-[#4A235A]">
         What&apos;s new on Github
       </h2>
       <div className="flex space-x-2">
         <button
           className={`p-1 rounded-full ${
             startIndex === 0 ? "text-gray-500" : "text-white"
           } transition-colors`}
           onClick={prevProjects}
           disabled={startIndex === 0}
         >
           &lt;
         </button>
         <button
           className={`p-1 rounded-full ${
             startIndex + 4 >= projects.length ? "text-gray-500" : "text-white"
           } transition-colors`}
           onClick={nextProjects}
           disabled={startIndex + 4 >= projects.length}
         >
           &gt;
         </button>
       </div>
     </div>
     <div className="relative">
       <div
         className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out ${
           transitioning ? "opacity-0" : "opacity-100"
         }`}
       >
         {projects.slice(startIndex, startIndex + 4).map((project, index) => (
           <a
             key={index}
             href={project.html_url}
             className="relative  rounded-lg shadow-lg p-4 h-48 group flex items-center justify-center"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="text-center">
               <span
                 className="text-l font-bold text-[#4A235A] group-hover:text-transparent break-words"
                 style={{ wordBreak: "break-word", maxWidth: "100%" }}
               >
                 {project.name}
               </span>
             </div>
             <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-[#4A235A] p-4 opacity-0 group-hover:opacity-100">
               <p className="text-sm">
                 {project.commit_message || "No description available."}
               </p>
               <p className="text-sm mt-2">
                 Last Commit: {formatDate(project.pushed_at)}
               </p>
             </div>
           </a>
         ))}
       </div>
     </div>
   </div>
 );

}