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
          <a
            href="https://www.linkedin.com/in/yael-lotan-030266132/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="36px"
              height="36px"
              className="linkedin-btn"
            >
              <path
                className="linkedin-box"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              />
              <path
                className="linkedin-text"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="avatar"></div>
    </div>
  );
}
