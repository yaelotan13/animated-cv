import ContactIcons from "./ContactIcons";
import "./Header.css";

export default function Header() {
  return (
    <div className="container" id="header">
      <div className="content">
        <div className="subTitleContainer">
          <h2 className="subTitle">Hello World</h2>
        </div>
        <h1 className="mainTitle">I am Yael Lotan, a fullstack developer</h1>
        <p className="description">
          I absolutely loves frontend and enjoy seeing my work live on the
          screen. I also love playing beach volleyball, working out and reading
          books 🤓
        </p>
        <div className="buttons">
          <a
            className="cv-button"
            href="/Yael_Lotan_CV.pdf"
            download="Yael_Lotan_CV"
          >
            DOWNLOAD CV
          </a>
          <ContactIcons />
        </div>
      </div>
      <div className="avatar"></div>
    </div>
  );
}
