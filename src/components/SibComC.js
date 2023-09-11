import { useContext } from "react";
import ThemeContext from "../context/Context";
function SibComC() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentC", theme);
  return (
    <>
      <h1 className={`${theme === "light" ? "dark" : "light"}`}>
        Sibling Component C
      </h1>
    </>
  );
}

export default SibComC;
