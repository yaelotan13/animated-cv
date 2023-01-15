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
              className="icon-btn"
            >
              <path
                className="icon-box"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              />
              <path
                className="icon-text"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/yaelotan13"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="icon-btn"
            >
              <path
                className="icon-box github-icon"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="avatar"></div>
    </div>
  );
}
