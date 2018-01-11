// @flow

import React from "react";
import Boards from "./Boards";
import Header from "./Header";

const Home = (props: { boards: Array<any> }) => {
  return (
    <div className="home">
      <Header />
      <Boards boards={props.boards} />
    </div>
  );
};

export default Home;
