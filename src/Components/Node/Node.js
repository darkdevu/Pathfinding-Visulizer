import React from "react";
import "./Node.css";

const Node = (props) => {
	const { isStart, isEnd, isWall, row, col } = props;
	const { handleMouseUp, handleMouseDown, handleMouseEnter } = props;

	let css = "Node ";

	if (isStart) {
		css += "start";
	} else if (isEnd) {
		css += "end ";
	} else if (isWall) {
		css += "wall ";
	}

	return (
		<div
			className={css}
			onMouseDown={() => handleMouseDown(row, col)}
			onMouseUp={() => handleMouseUp(row, col)}
			onMouseEnter={() => handleMouseEnter(row, col)}
		></div>
	);
};

export default Node;
