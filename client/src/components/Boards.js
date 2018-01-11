// @flow

import React from "react";
import Board from "./Board";

const Boards = (props: { boards: Array<any> }) => {
  console.log(props.boards);
  return (
    <div>
      <h1>Boards</h1>
      {props.boards.map(board => <Board key={board._id} {...board} />)}
    </div>
  );
};

export default Boards;
