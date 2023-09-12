import { ThemeProvider } from "./context/Context";

import SibComB from "./components/SibComB";
import SibComC from "./components/SibComC";

import ThemeBtn from "./components/ThemeBtn";

function App() {
  return (
    <>
      <ThemeProvider>
        <SibComB></SibComB>
        <SibComC></SibComC>
        <ThemeBtn />
      </ThemeProvider>
    </>
  );
}

export default App;
