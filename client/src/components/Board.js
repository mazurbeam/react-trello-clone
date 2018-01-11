// @flow

import React from "react";

const Board = (props: { _id: string, name: string }) => {
  console.log(props.name);
  return (
    <div className="board">
      <h3>{props.name}</h3>
    </div>
  );
};

export default Board;
