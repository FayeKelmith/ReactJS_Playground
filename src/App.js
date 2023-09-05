import Header from "./components/Header";
import Properties from "./components/Properties";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Properties show={false} />
    </div>
  );
}

export default App;
