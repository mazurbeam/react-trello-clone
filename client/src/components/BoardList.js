// @flow

import React from "react";
import Board from "./Board";
import { Grid, Col, Row } from "react-bootstrap";

const BoardList = (props: { boards: Array<any> }) => {
  console.log(props.boards);
  return (
    <div>
      <h1>Boards</h1>
      <Grid>
        {props.boards.map(board => (
          <Col xs={6} md={4}>
            <Board key={board._id} {...board} />
          </Col>
        ))}
        <Col xs={6} md={4}>
          <p>Create new board</p>
        </Col>
      </Grid>
    </div>
  );
};

export default BoardList;
