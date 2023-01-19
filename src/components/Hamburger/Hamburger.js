import { slide as Menu } from "react-burger-menu";
import "./Hamburger.css";

export default function Hamburger() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Menu>
      <div data-list="1" onClick={() => scrollTo("header")}>
        <span className="material-icons">home</span>
        <span>Home</span>
      </div>
      <div data-list="2" onClick={() => scrollTo("timeline")}>
        <span className="material-icons">timeline</span>
        <span>Timeline</span>
      </div>
      <div data-list="3" onClick={() => scrollTo("sideProjects")}>
        <span className="material-icons">dashboard</span>
        <span>Projects</span>
      </div>
      <div data-list="4" onClick={() => scrollTo("contact")}>
        <span className="material-icons">call</span>
        <span>Contact</span>
      </div>
    </Menu>
  );
}
