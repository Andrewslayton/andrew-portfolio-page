import React from "react";

const blogItems = [
  {
    image: "/arizona1.png",
    description: "Arizona, March 2025.",
  },
  {
    image: "/cali1.png",
    description: "Los Angeles, California February 2025.",
  },
  {
    image: "/camping.jpg",
    description: "Traverse city, Michigan August 2024.",
  }
];
export function Blog() {
  return (
    <div className="flex justify-center items-center h-auto pb-20">
      {" "}
      <div className="bg-[#D7BDE2] p-4 rounded-lg w-full max-w-4xl">
        <h2 className="text-lg sm:text-xl font-bold text-[#4A235A] mb-4">
          My Blog
        </h2>
        <div className="p-4 rounded-lg mb-4">
          <p className="text-sm sm:text-base text-[#4A235A]"></p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {blogItems.map((adv, index) => (
              <div key={index} className=" text-[#4A235A] rounded-lg shadow-lg p-4">
                <img
                  src={adv.image}
                  alt={adv.description}
                  className="rounded-lg w-[300px] h-[150px] object-cover"
                />
                <p className="text-sm mt-2">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
