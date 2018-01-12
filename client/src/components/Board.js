// @flow

import React from "react";
import { Panel } from "react-bootstrap";

const Board = (props: { _id: string, name: string }) => {
  console.log(props.name);
  return (
    <Panel className="board">
      <h3>{props.name}</h3>
    </Panel>
  );
};

export default Board;
