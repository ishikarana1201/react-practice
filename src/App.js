import "./App.css";
import Counter from "./components/Counter";
import DigitalClock from "./components/DigitalClock";
import Gallary from "./components/Gallary";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import ToDo from "./components/ToDo";
import UseStateHook from "./hooks/UseStateHook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UseStateHook />
      <DigitalClock />
      <Counter />
      <ToDo />
      <Gallary />
      <Posts />
    </div>
  );
}

export default App;
