// @flow

import React from "react";
import BoardList from "./BoardList";
import Header from "./Header";

const Home = (props: { boards: Array<any> }) => {
  return (
    <div className="home">
      <Header title="Boards" />
      <BoardList boards={props.boards} />
    </div>
  );
};

export default Home;
