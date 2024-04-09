import React from "react";

export const ConnectedButton = ({
  label,
  additionalClasses,
  onClick,
}: {
  onClick?: () => void;
  label: string;
  additionalClasses?: string;
}) => (
  <button
    className={`p-4 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-out transform ${additionalClasses}`}
    onClick={onClick}
  >
    {label}
  </button>
);

