"use client";

import React, { useEffect, useMemo, useState } from "react";
import { boardSquares, BoardSquare } from "../../data/monopolyData";

type Coord = { row: number; col: number };

function buildPerimeterCoords(squareCount: number): Coord[] {
  // Find the smallest square grid whose perimeter can fit all squares
  let side = 3;
  // Perimeter cell count for an N x N grid
  const perimeterCells = (n: number) => 4 * n - 4;

  while (perimeterCells(side) < squareCount) {
    side += 1;
  }

  const coords: Coord[] = [];

  // Bottom row: left -> right
  for (let col = 0; col < side; col++) {
    coords.push({ row: side - 1, col });
  }
  // Right column: bottom-1 -> top
  for (let row = side - 2; row >= 0; row--) {
    coords.push({ row, col: side - 1 });
  }
  // Top row: right-1 -> left
  for (let col = side - 2; col >= 0; col--) {
    coords.push({ row: 0, col });
  }
  // Left column: top+1 -> bottom-1
  for (let row = 1; row <= side - 2; row++) {
    coords.push({ row, col: 0 });
  }

  return coords.slice(0, squareCount);
}

function getSectionColor(section: BoardSquare["section"]): string {
  switch (section) {
    case "about":
      return "#FDE68A"; // warm yellow
    case "education":
      return "#BFDBFE"; // soft blue
    case "experience":
      return "#FCA5A5"; // soft red
    case "projects":
      return "#A7F3D0"; // mint green
    case "whats-new":
      return "#DDD6FE"; // soft purple
    case "blog":
      return "#F9A8D4"; // pink
    case "meta":
      return "#111827"; // dark meta tiles (start/spacers)
    default:
      return "#E5E7EB";
  }
}

function getTileColor(index: number): string {
  const square = boardSquares[index];

  // Explicit colors for special kinds
  if (square.kind === "start") {
    return "#111827";
  }
  if (square.kind === "end") {
    return "#111827";
  }

  if (square.kind === "spacer") {
    // Inherit the color from the previous non-spacer tile
    for (let i = index - 1; i >= 0; i--) {
      const prev = boardSquares[i];
      if (prev.kind === "content") {
        return getSectionColor(prev.section);
      }
      if (prev.kind === "start") {
        return "#111827";
      }
    }
    return "#111827";
  }

  // Regular content tiles
  return getSectionColor(square.section);
}

export const MonopolyBoard: React.FC = () => {
  const initialIndex =
    boardSquares.findIndex((s) => s.kind === "start") === -1
      ? 0
      : boardSquares.findIndex((s) => s.kind === "start");

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [showPopup, setShowPopup] = useState(false);
  const [lastDirection, setLastDirection] = useState<
    "up" | "down" | "left" | "right"
  >("right");

  const { coords, side, indexByCoord } = useMemo(() => {
    const count = boardSquares.length;
    let gridSide = 3;
    const perimeterCells = (n: number) => 4 * n - 4;
    while (perimeterCells(gridSide) < count) {
      gridSide += 1;
    }
    const coords = buildPerimeterCoords(count);

    const indexByCoord: Record<string, number> = {};
    coords.forEach((coord, index) => {
      indexByCoord[`${coord.row}-${coord.col}`] = index;
    });

    return { coords, side: gridSide, indexByCoord };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let direction: "up" | "down" | "left" | "right" | null = null;
      if (event.key === "ArrowUp") direction = "up";
      if (event.key === "ArrowDown") direction = "down";
      if (event.key === "ArrowLeft") direction = "left";
      if (event.key === "ArrowRight") direction = "right";

      if (!direction) return;

      setActiveIndex((prev) => {
        const currentCoord = coords[prev];
        if (!currentCoord) return prev;

        let nextRow = currentCoord.row;
        let nextCol = currentCoord.col;

        if (direction === "up") nextRow -= 1;
        if (direction === "down") nextRow += 1;
        if (direction === "left") nextCol -= 1;
        if (direction === "right") nextCol += 1;

        const key = `${nextRow}-${nextCol}`;
        const maybeNext = indexByCoord[key];

        if (maybeNext === undefined) {
          return prev;
        }

        const square = boardSquares[maybeNext];
        if (square.kind === "content") {
          setShowPopup(true);
        } else {
          setShowPopup(false);
        }

        setLastDirection(direction);
        return maybeNext;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [coords, indexByCoord]);

  const activeSquare = boardSquares[activeIndex];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4">
      <div className="mb-4 text-center text-gray-200 text-sm sm:text-base">
        <p className="font-semibold">Monopoly Experience</p>
        <p>
          Use the arrow keys to drive the car around the board. Landing on a
          space opens its details.
        </p>
      </div>

      <div
        className="relative w-full max-w-4xl aspect-square bg-gray-900 rounded-xl shadow-2xl border-4 border-gray-700"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${side}, 1fr)`,
          gridTemplateRows: `repeat(${side}, 1fr)`,
          padding: "0.5rem",
          boxSizing: "border-box",
        }}
      >
        {boardSquares.map((square, index) => {
          const coord = coords[index];
          const isActive = index === activeIndex;
          const tileColor = getTileColor(index);

          return (
            <div
              key={square.id}
              style={{
                gridRow: coord.row + 1,
                gridColumn: coord.col + 1,
              }}
              className="relative flex items-center justify-center"
            >
              <div
                className="w-full h-full rounded-md border border-gray-800 flex flex-col items-center justify-center text-center px-1 py-1 cursor-default transition-transform duration-150"
                style={{
                  backgroundColor: tileColor,
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                  boxShadow:
                    square.kind === "spacer"
                      ? isActive
                        ? "0 0 0 2px #111827, 0 10px 15px rgba(0,0,0,0.5)"
                        : "0 4px 6px rgba(0,0,0,0.4)"
                      : isActive
                      ? "0 0 0 2px #111827, 0 10px 15px rgba(0,0,0,0.5)"
                      : "0 4px 6px rgba(0,0,0,0.4)",
                }}
              >
                {square.kind === "content" && (
                  <>
                    <p className="text-[0.55rem] sm:text-xs font-semibold text-gray-900 uppercase tracking-wide">
                      {square.section.replace("-", " ")}
                    </p>
                    <p className="text-[0.60rem] sm:text-[0.70rem] font-bold text-gray-900 leading-snug">
                      {square.title}
                    </p>
                  </>
                )}
                {(square.kind === "start" || square.kind === "end") && (
                  <p className="text-[0.65rem] sm:text-xs font-bold text-gray-100 uppercase tracking-wide">
                    {square.title}
                  </p>
                )}
              </div>

              {isActive && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <img
                    src="/board-car.jpg"
                    alt="Player car"
                    className="w-8 h-auto sm:w-10"
                    style={{
                      transform:
                        lastDirection === "up"
                          ? "rotate(90deg)"
                          : lastDirection === "down"
                          ? "rotate(-90deg)"
                          : lastDirection === "right"
                          ? "scaleX(-1)"
                          : "rotate(0deg)",
                      mixBlendMode: "multiply",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}

        <div
          className="absolute inset-[18%] bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center text-center px-4"
          style={{ pointerEvents: "none" }}
        >
          <div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Andrew Slayton • Software Engineer
            </p>
            <p className="text-gray-400 text-[0.65rem] sm:text-xs mt-1">
              Navigate the board to explore experience, projects, education,
              blog, and GitHub activity.
            </p>
          </div>
        </div>
      </div>

      {showPopup && activeSquare && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-gray-900 text-gray-100 max-w-lg w-[90%] rounded-xl shadow-2xl border border-gray-700 p-5 z-50">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-sm"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
              {activeSquare.section.replace("-", " ")}
            </p>
            <h2 className="text-xl font-bold mb-1">{activeSquare.title}</h2>
            {activeSquare.subtitle && (
              <p className="text-sm text-gray-300 mb-2">
                {activeSquare.subtitle}
              </p>
            )}
            {activeSquare.description && (
              <p className="text-sm text-gray-200 whitespace-pre-line">
                {activeSquare.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonopolyBoard;
