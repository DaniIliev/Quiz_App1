import React from "react";
import Timer from "../shared/Timer";
import Quiz from "../shared/Quiz";
import MoneyList from "../shared/MoneyList";

const GamePlay = () => {
  return (
    <>
      <div className="main">
        <div className="top">
          <Timer />
        </div>
        <div className="bottom">
          <Quiz />
        </div>
      </div>
      <div className="pyramide">
        <MoneyList />
      </div>
    </>
  );
};

export default GamePlay;
