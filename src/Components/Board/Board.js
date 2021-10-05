import React from "react";
import { useState } from "react";
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
		isWall: false,
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

// Toggle Brick and return newNodes
const setBrickAndReturn = (row, col, Nodes) => {
	const newNodes = Nodes.slice();
	newNodes[row][col] = {
		...newNodes[row][col],
		isWall: !newNodes[row][col].isWall,
	};
	return newNodes;
};

const Board = () => {
	const [Nodes, setNodes] = useState(createBoard(ROW_SIZE, COL_SIZE));
	const [IsMouseDown, setIsMouseDown] = useState(false);

	const handleMouseDown = (row, col) => {
		setIsMouseDown(true);
		setNodes(setBrickAndReturn(row, col, Nodes));
	};

	const handleMouseUp = (row, col) => {
		setIsMouseDown(false);
	};

	const handleMouseEnter = (row, col) => {
		if (IsMouseDown !== true) return;
		setNodes(setBrickAndReturn(row, col, Nodes));
	};

	return (
		<div className="board">
			{Nodes.map((row, rowId) => {
				return (
					<div key={rowId} className="board-row">
						{row.map((node, nodeId) => {
							const { row, col, isEnd, isStart, isWall } = node;
							return (
								<Node
									row={row}
									col={col}
									isEnd={isEnd}
									isStart={isStart}
									isWall={isWall}
									setBrickAndReturn={(row, col) =>
										setNodes(
											setBrickAndReturn(row, col, Nodes)
										)
									}
									handleMouseDown={handleMouseDown}
									handleMouseUp={handleMouseUp}
									handleMouseEnter={handleMouseEnter}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Board;
