import { useState } from "react";
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
  //we need to create this state to manage all 9 boxes. we cannot manage them locally.
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    //to create a copy of the squares array:
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
  return (
    //using props we will now communicate between the super component board and the sub components box.
    <div className="board">
      <div className="line">
        <Box value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Box value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Box value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="line">
        <Box value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Box value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Box value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="line">
        <Box value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Box value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Box value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

const Box = ({ value, onSquareClick }) => {
  return (
    <p className="box" onClick={onSquareClick}>
      {value}
    </p>
  );
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
