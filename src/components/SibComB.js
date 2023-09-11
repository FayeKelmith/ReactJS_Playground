import { useContext } from "react";
import ThemeContext from "../context/Context";
function SibComB() {
  const { theme } = useContext(ThemeContext);
  console.log("SiblingComponentB", theme);
  return (
    <>
      <h1 className={`${theme === "light" ? "dark" : "light"}`}>Sibling Component B</h1>
    </>
  );
}

export default SibComB;
