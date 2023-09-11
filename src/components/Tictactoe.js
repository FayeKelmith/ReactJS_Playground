import { useState } from "react";
// < === fragment.
const Tictactoe = () => {
  return (
    <>
      <Board />
    </>
  );
};

//for the main board now
const Board = () => {
  //we need to create this state to manage all 9 boxes. we cannot manage them locally.
  const [isNext, setIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  //const [active, setActive] = useState(false);

  //button changing function
  const done = {
    backgroundColor: "#ff4747",
    color: "#f9f9f9",
  };
  const pending = {
    backgroundColor: "#008080",
    color: "#f9f9f9",
  };

  //button manipulation
  let active = null;
  if (isNext) {
    active = done;
  } else {
    active = pending;
  }

  //click handling
  const handleClick = (i) => {
    //working on winner;
    //to create a copy of the squares array:
    const nextSquares = squares.slice();

    //stopping condiditon.
    if (squares[i] || winner[squares[i]]) {
      return;
    }

    if (isNext) {
      nextSquares[i] = "X";
      setIsNext(false);
    } else {
      nextSquares[i] = "O";
      setIsNext(true);
    }

    setSquares(nextSquares);
  };

  let status;
  const win = winner(squares);
  if (win) {
    status = "Winner: " + win;
  }
  return (
    //using props we will now communicate between the super component board and the sub components box.
    <div>
      <div className="board">
        <div className="winner">{status}</div>
        <div className="line">
          {/*INFO: handleclick is a callback function else will be executed by js all the time without trigger.*/}
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
      <hr style={{ margin: " 50px auto", width: "40vw" }} />
      <Player play={active} />
    </div>
  );
};

const winner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Box = ({ value, onSquareClick }) => {
  return (
    <p className="box" onClick={onSquareClick}>
      {value}
    </p>
  );
};

//for the player buttons;

const Player = ({ play }) => {
  return (
    <div className="playerbox">
      <span className="player player1" style={play}>
        Player 1
      </span>
      <span className="player player1" style={play}>
        Player 2
      </span>
    </div>
  );
};

export default Tictactoe;
