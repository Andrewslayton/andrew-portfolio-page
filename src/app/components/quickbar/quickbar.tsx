import React from "react";


export const Quickbar: React.FC = ({ }) => {
  return (
    <div className=" h-2/10 flex justify-center items-center p-3 w-full">
      <div className="grid grid-cols-4 gap-4 text-sm">
        <a
          href="#experience"
          className="bg-black text-white p-2 rounded-lg hover:outline-dotted "
        >
          Experience
        </a>
        <a
          href="education"
          className="bg-black text-white p-2 rounded-lg hover:outline-dotted"
        >
          Education
        </a>
        <a
          href="#projects"
          className="bg-black text-white p-2 rounded-lg hover:outline-dotted"
        >
          Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1YdebaFCW6xu1F_X3cdU-GEeouz8phz5L/view?usp=sharing"
          className="bg-black text-white p-2 rounded-lg hover:outline-dotted"
        >
          Resume
        </a>
      </div>
    </div>
  );
};