// @flow

import React from "react";
import Boards from "./Boards";
import Header from "./Header";

const Home = (props: { boards: Array<any> }) => {
  return (
    <div className="home">
      <Header />
      <Boards />
      <div>
        {props.boards.map(board => {
          board.name;
        })}
      </div>
      <p>{props.boards}</p>
    </div>
  );
};

export default Home;
