// @flow

import React from "react";
import { Panel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Board = (props: { _id: string, name: string }) => {
  // console.log(props.name);
  // console.log("from board", props._id);
  return (
    <Panel className="board">
      <Link to={`/b/${props._id}`}>
        <Panel.Heading>{props.name}</Panel.Heading>
      </Link>
    </Panel>
  );
};

export default Board;
