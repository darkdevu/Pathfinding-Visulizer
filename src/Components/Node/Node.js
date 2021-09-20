import "./Node.css";

const Node = (props) => {
  const { isStart, isEnd, isWall } = props;

  let css = "Node ";

  if (isStart) {
    css += "start";
  } else if (isEnd) {
    css += "end ";
  } else if(isWall) {
    css += "wall ";
  }

  return <div className={css}></div>;
};

export default Node;
