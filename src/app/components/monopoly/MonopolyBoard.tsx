"use client";

import React, { useEffect, useMemo, useState } from "react";
import { boardSquares as initialBoardSquares, BoardSquare } from "../../data/monopolyData";
import { buildPerimeterCoords, getTileColor } from "./utils";
import { useGithubCommits } from "./useGithubCommits";
import { MonopolyPopup } from "./MonopolyPopup";

export const MonopolyBoard: React.FC = () => {
  const initialIndex =
    initialBoardSquares.findIndex((s) => s.kind === "start") === -1
      ? 0
      : initialBoardSquares.findIndex((s) => s.kind === "start");

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [showPopup, setShowPopup] = useState(false);
  const [lastDirection, setLastDirection] = useState<
    "up" | "down" | "left" | "right"
  >("right");

  const githubCommits = useGithubCommits();

  const boardSquares = useMemo(() => {
    if (githubCommits.length === 0) return initialBoardSquares;
    let commitIndex = 0;
    return initialBoardSquares.map((square) => {
      if (square.section === "whats-new" && commitIndex < githubCommits.length) {
        const commit = githubCommits[commitIndex];
        commitIndex++;
        return {
          ...square,
          title: commit.message.length > 30 ? commit.message.substring(0, 30) + "..." : commit.message,
          subtitle: `Commit to ${commit.repo}`,
          description: `Date: ${commit.date}\nRepo: ${commit.repo}\nMessage: ${commit.message}`,
        };
      }
      return square;
    });
  }, [githubCommits]);

  const { coords, side, indexByCoord } = useMemo(() => {
    const count = initialBoardSquares.length;
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
  }, [coords, indexByCoord, boardSquares]);

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
          const tileColor = getTileColor(index, boardSquares);

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
        <MonopolyPopup
          activeSquare={activeSquare}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default MonopolyBoard;
