import "./App.css";
import React, { useCallback } from "react";
import { useSpring } from "react-spring";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Timeline from "./components/Timeline/Timeline";
import ChatBot from "./components/ChatBot/ChatBot";

function App() {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    [set]
  );
  const onScroll = useCallback(
    (e) => set({ st: e.target.scrollTop / 30 }),
    [set]
  );

  return (
    <div className="app-container" onMouseMove={onMove} onScroll={onScroll}>
      <div className="hero-section">
        <NavBar />
        <Header />
      </div>
      <Timeline />
      <ChatBot st={st} xy={xy} />
    </div>
  );
}

export default App;
