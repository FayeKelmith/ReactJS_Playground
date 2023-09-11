import "./App.css";
import { ThemeProvider } from "./context/Context";

import SibComB from "./components/SibComB";
import SibComC from "./components/SibComC";
import SibComA from "./components/SibComA";

import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <>
      <ThemeProvider>
        <SibComA></SibComA>
        <SibComB></SibComB>
        <SibComC></SibComC>

        <ThemeBtn />
      </ThemeProvider>
    </>
  );
}

export default App;
