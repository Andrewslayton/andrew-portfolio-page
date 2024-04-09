"use client"
import ConnectedButton from "./components/expand/page";
import React, { useState } from 'react';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonAnimationClasses = isExpanded ? "opacity-100 scale-100" : "opacity-0 scale-0";

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-wrap items-center justify-center space-x- space-y-20">
        <div className={`flex-1 flex justify-between ${isExpanded ? 'visible' : 'invisible'}`}>
          <ConnectedButton label="Experience" additionalClasses={buttonAnimationClasses} />
          <ConnectedButton label="Projects" additionalClasses={buttonAnimationClasses} />
        </div>

        <div className="flex justify-center w-full">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-6 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-out"
          >
            Expand
          </button>
        </div>

        <div className={`flex-1 flex justify-between ${isExpanded ? 'visible' : 'invisible'}`}>
          <ConnectedButton label="Education" additionalClasses={buttonAnimationClasses} />
          <ConnectedButton label="About Me" additionalClasses={buttonAnimationClasses} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

