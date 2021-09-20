import "./Board.css";
import Node from "../Node/Node";
import {
  ROW_SIZE,
  COL_SIZE,
  START_COL,
  START_ROW,
  END_COL,
  END_ROW,
} from "../../Constants/Constants";

// Create the node of the board, contains all the information
// <Node/> is only used to display on screen, all the information is sent
// via props
const createNode = (row, col) => {
  return {
    row: row,
    col: col,
    isStart: row === START_ROW && col === START_COL,
    isEnd: row === END_ROW && col === END_COL,
    isWall: false
  };
};

// Make a 2D array of Nodes and return
const createBoard = (row, col) => {
  const res = [];

  for (let i = 0; i < row; ++i) {
    const temp = [];
    for (let j = 0; j < col; ++j) {
      temp.push(createNode(i, j));
    }
    res.push(temp);
  }

  return res;
};

const Board = () => {
  const nodes = createBoard(ROW_SIZE, COL_SIZE);

  return (
    <div className="board">
      {nodes.map((row, rowId) => {
        return (
          <div key={rowId} className="board-row">
            {row.map((node, nodeId) => {
              const { row, col, isEnd, isStart } = node;
              return (
                <Node row={row} col={col} isEnd={isEnd} isStart={isStart} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
