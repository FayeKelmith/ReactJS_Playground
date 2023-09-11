import { useContext } from "react";
import ThemeContext from "../context/Context";

function ThemeBtn() {
  //to get the ability to use the Theme context file
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}> Theme Button</button>;
}

export default ThemeBtn;
