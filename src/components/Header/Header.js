import "./Header.css";
import HandSvg from "./hand";

export default function Header() {
  return (
    <div className="container">
      <div className="content">
        <div className="subTitleContainer">
          <h2 className="subTitle">Hello World</h2>
          <HandSvg />
        </div>
        <h1 className="mainTitle">I am Yael Lotan, fullstack developer</h1>
        <p className="description">
          I do bla bla bla, I also do bla bla, I enjoy playing beach volleyball
          and eating dim sums. I also want to say that I want world peace and I
          think this paragraph is long enough now.
        </p>
        <div className="buttons">
          <div className="cv-button">DOWNLOAD CV</div>
          <div className="linkedin-button">in</div>
        </div>
      </div>
      <div className="avatar"></div>
    </div>
  );
}
