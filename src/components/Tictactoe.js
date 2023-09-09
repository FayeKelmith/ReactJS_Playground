import React from "react";
const Tictactoe = () => {
  return (
    <div>
      <div>
        <Board />

        <hr style={{ margin: " 50px auto", width: "40vw" }} />
        <Player />
      </div>
    </div>
  );
};

//for the main board now
const Board = () => {
  return (
    <div className="board">
      <Line />
      <Line />
      <Line />
    </div>
  );
};
//for each row:
const Line = () => {
  return (
    <div className="line">
      <Box status="X" />
      <Box />
      <Box />
    </div>
  );
};

//defining props
//for each box:
const Box = ({ status }) => {
  return <p className="box">{status}</p>;
};

//for the player buttons;

const Player = () => {
  return (
    <div className="playerbox">
      <span className="player player1">Player 1</span>
      <span className="player player1">Player 2</span>
    </div>
  );
};

export default Tictactoe;
