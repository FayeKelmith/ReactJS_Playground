import { useContext } from "react";
import ThemeContext from "../context/Context";
function SibComA() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentA", theme);
  return (
    <>
      <h1 className={`${theme === "light" ? "dark" : "light"}`}>
        Sibling Component A
      </h1>
    </>
  );
}

export default SibComA;
