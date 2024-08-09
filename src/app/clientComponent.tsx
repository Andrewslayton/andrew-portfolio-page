"use client";
import React, { useState } from "react";

export default function ClientComponent() {
  // Removed children from props
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center p-4 z-50">
      <div className="relative">
        <button
          className="px-4 py-2 bg-[#1f8278] rounded hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          onMouseEnter={() => setIsDropdownOpen(true)}
        >
          Contacts
        </button>
        {isDropdownOpen && (
          <div
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="absolute left-0 mt-2 w-90 bg-white text-black rounded shadow-lg py-2"
          >
            <p className="px-4 py-2 border-b">
              Email: andrewslaywork@gmail.com
            </p>
            <a
              href="https://github.com/Andrewslayton"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-slayton03/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
