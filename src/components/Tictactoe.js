const Tictactoe = () => {
  return (
    <div style={{ textAlign: "center", fontSize: "32px" }}>
      <h2>Tic Tac Toe</h2>
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </table>
      <div>
        <span className="player player1">Player 1</span>{" "}
        <span className="player player2">Player 2</span>
      </div>
    </div>
  );
};

export default Tictactoe;
