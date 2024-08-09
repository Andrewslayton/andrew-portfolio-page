import React from "react";
export function Blog() {
  return (
    <div className="flex justify-center items-center h-auto pb-20">
      {" "}
      <div className="bg-[#1f8278] p-4 rounded-lg w-full max-w-4xl">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
          My Blog
        </h2>
        <div className="bg-black p-4 rounded-lg mb-4">
          <p className="text-sm sm:text-base text-white">
            As I adventure through life, I will be posting my experiences here.
          </p>
        </div>
        
      </div>
    </div>
  );
}
