import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="btnCounter">
      <div>{counter}</div>
      <button
        className="start btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        className="end btn"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <hr style={{ margin: "40px 0px" }} />
    </div>
  );
};

export default Counter;
