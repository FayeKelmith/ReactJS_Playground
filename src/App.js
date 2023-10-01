import { ThemeProvider } from "./context/Context";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const btn = `border border-white text-3xl mx-20 rounded-md py-2`;
  const [value, setValue] = useState("");
  const { setItem, getItem } = useLocalStorage("value");

  return (
    <>
      <ThemeProvider>
        <input
          className="w-4/5 mx-auto my-10 rounded-sm border-yellow-400 border py-4"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <div className="grid grid-cols-3">
          <button className={btn} onClick={() => setItem(value)}>
            Set
          </button>
          <button className={btn} onClick={() => console.log(getItem())}>
            Get
          </button>
          <button className={btn}>Update</button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
