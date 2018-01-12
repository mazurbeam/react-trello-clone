// @flow

import React from "react";
import Board from "./Board";
import { Grid, Col, Row } from "react-bootstrap";

const BoardList = (props: { boards: Array<any> }) => {
  // console.log(props.boards);
  return (
    <div className="board-list">
      <Grid>
        {props.boards.map(board => (
          <Col key={board._id} xs={6} md={4}>
            <Board {...board} />
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
