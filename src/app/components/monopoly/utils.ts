import { BoardSquare } from "../../data/monopolyData";

export type Coord = { row: number; col: number };

export function buildPerimeterCoords(squareCount: number): Coord[] {
  let side = 3;
  const perimeterCells = (n: number) => 4 * n - 4;

  while (perimeterCells(side) < squareCount) {
    side += 1;
  }

  const coords: Coord[] = [];

  for (let col = 0; col < side; col++) {
    coords.push({ row: side - 1, col });
  }
  for (let row = side - 2; row >= 0; row--) {
    coords.push({ row, col: side - 1 });
  }
  for (let col = side - 2; col >= 0; col--) {
    coords.push({ row: 0, col });
  }
  for (let row = 1; row <= side - 2; row++) {
    coords.push({ row, col: 0 });
  }

  return coords.slice(0, squareCount);
}

export function getSectionColor(section: BoardSquare["section"]): string {
  switch (section) {
    case "about":
      return "#FDE68A";
    case "education":
      return "#BFDBFE";
    case "experience":
      return "#FCA5A5";
    case "projects":
      return "#A7F3D0";
    case "whats-new":
      return "#DDD6FE";
    case "blog":
      return "#F9A8D4";
    case "meta":
      return "#111827";
    default:
      return "#E5E7EB";
  }
}

export function getTileColor(index: number, squares: BoardSquare[]): string {
  const square = squares[index];

  if (square.kind === "start") {
    return "#111827";
  }
  if (square.kind === "end") {
    return "#111827";
  }

  if (square.kind === "spacer") {
    for (let i = index - 1; i >= 0; i--) {
      const prev = squares[i];
      if (prev.kind === "content") {
        return getSectionColor(prev.section);
      }
      if (prev.kind === "start") {
        return "#111827";
      }
    }
    return "#111827";
  }
  return getSectionColor(square.section);
}
