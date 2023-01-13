import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <div className="app-container ">
      <div className="hero-section">
        <NavBar />
        <Header />
      </div>
      <Timeline />
    </div>
  );
}

export default App;
