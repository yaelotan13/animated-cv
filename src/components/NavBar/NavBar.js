import { useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  useEffect(() => {
    let linkItems = document.getElementsByTagName("li");
    let selector = document.getElementById("selector");

    selector.style.top = 3 * 70 - 70 + "px";

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

  return (
    <div className="navBar-container">
      <div className="navBar">
        <nav>
          <div className="selector" id="selector"></div>
          <ul>
            <li data-list="1">
              <span className="material-icons">dashboard</span>
            </li>
            <li data-list="2">
              <span className="material-icons">chat_bubble_outline</span>
            </li>
            <li data-list="3" className="active">
              <span className="material-icons">home</span>
            </li>
            <li data-list="4">
              <span className="material-icons">favorite_border</span>
            </li>
            <li data-list="5">
              <span className="material-icons">info</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
