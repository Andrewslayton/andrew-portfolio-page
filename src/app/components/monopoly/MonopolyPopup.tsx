import React from "react";
import { BoardSquare } from "../../data/monopolyData";

interface MonopolyPopupProps {
  activeSquare: BoardSquare;
  onClose: () => void;
}

export const MonopolyPopup: React.FC<MonopolyPopupProps> = ({
  activeSquare,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 text-gray-100 max-w-lg w-[90%] rounded-xl shadow-2xl border border-gray-700 p-5 z-50">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-sm"
          onClick={onClose}
        >
          Close
        </button>
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
          {activeSquare.section.replace("-", " ")}
        </p>
        <h2 className="text-xl font-bold mb-1">{activeSquare.title}</h2>
        {activeSquare.subtitle && (
          <p className="text-sm text-gray-300 mb-2">{activeSquare.subtitle}</p>
        )}
        {activeSquare.description && (
          <p className="text-sm text-gray-200 whitespace-pre-line">
            {activeSquare.description}
          </p>
        )}
      </div>
    </div>
  );
};
