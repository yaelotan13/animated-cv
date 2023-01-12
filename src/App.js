import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app-container ">
      <div className="hero-section">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
