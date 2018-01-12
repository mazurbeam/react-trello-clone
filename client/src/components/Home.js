// @flow

import React from "react";
import BoardList from "./BoardList";
import Header from "./Header";

const Home = (props: { boards: Array<any> }) => {
  return (
    <div className="home">
      <Header />
      <BoardList boards={props.boards} />
    </div>
  );
};

export default Home;
