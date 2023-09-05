//importing the data from utils

import { list } from "./utils.js";

const Properties = ({ show }) => {
  const people = list.map((person) => (
    <div style={combi}>
      <h3>I am {person.name}</h3>
      <p>I study at {person.school}</p>
      <p>I know these languages: {[person.language].join(" , ")}</p>
      <hr />
    </div>
  ));

  return <div className="people">{show ? people : "No information"}</div>;
};

const combi = {
  fontSize: "24px",
};
export default Properties;
