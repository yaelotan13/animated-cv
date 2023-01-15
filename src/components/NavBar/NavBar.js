import { useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  useEffect(() => {
    let linkItems = document.getElementsByTagName("li");
    let selector = document.getElementById("selector");

    selector.style.top = 1 * 70 - 70 + "px";

    for (let linkItem of linkItems) {
      linkItem.addEventListener("click", (e) => {
        let listNum = e.target.dataset.list;
        selector.style.top = listNum * 70 - 70 + "px";
        e.target.classList.add("active");

        // remove active class from other links
        for (let linkItem of linkItems) {
          if (linkItem.dataset.list !== listNum) {
            linkItem.classList.remove("active");
          }
        }
      });
    }
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="navBar-container">
      <div className="navBar">
        <nav>
          <div className="selector" id="selector"></div>
          <ul>
            <li
              data-list="1"
              className="active"
              onClick={() => scrollTo("header")}
            >
              <span className="material-icons">home</span>
            </li>
            <li data-list="2" onClick={() => scrollTo("timeline")}>
              <span className="material-icons">timeline</span>
            </li>
            <li data-list="3" onClick={() => scrollTo("sideProjects")}>
              <span className="material-icons">dashboard</span>
            </li>
            <li data-list="4" onClick={() => scrollTo("contact")}>
              <span className="material-icons">call</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
