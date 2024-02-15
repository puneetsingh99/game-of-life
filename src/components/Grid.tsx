import React from "react";

type GridProps = {
  cellSize: number;
  gridDimension?: {
    height: number;
    width: number;
  };
};

const DEFAULT_GRID_WIDTH = 800;
const DEFAULT_GRID_HEIGHT = 800;

export const Grid: React.FunctionComponent<GridProps> = ({
  cellSize,
  gridDimension,
}) => {
  let gridWidth = gridDimension?.width || DEFAULT_GRID_WIDTH;
  let gridHeight = gridDimension?.height || DEFAULT_GRID_HEIGHT;
  const numberOfValidHorizontalCells = Math.floor(gridWidth / cellSize);
  const numberOfValidVerticalCells = Math.floor(gridHeight / cellSize);
  const totalCells = numberOfValidHorizontalCells * numberOfValidVerticalCells;
  gridWidth = Math.min(numberOfValidHorizontalCells * cellSize, gridWidth);
  gridHeight = Math.min(numberOfValidVerticalCells * cellSize, gridHeight);

  return (
    <div
      style={{
        width: gridWidth,
        height: gridHeight,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {new Array(totalCells).fill("").map((_, index) => (
        <Cell key={index} size={cellSize} color={DEFAULT_CELL_COLOR} />
      ))}
    </div>
  );
};

type CellProps = {
  size: number;
  color: string;
};

const DEFAULT_CELL_COLOR = "lightgray";

const Cell: React.FunctionComponent<CellProps> = ({ size, color }) => {
  return (
    <div
      style={{
        width: size - 1,
        height: size - 1,
        backgroundColor: color,
        borderLeft: "solid 1px red",
        borderBottom: "solid 1px red",
      }}
    />
  );
};
