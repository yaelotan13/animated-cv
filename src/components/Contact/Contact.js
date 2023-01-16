import ContactIcons from "../Header/ContactIcons";
import "./Contact.css";
import Stars from "./Stars";

export default function Contact() {
  return (
    <div id="contact">
      <Stars>
        <div className="contactContainer">
          <h1 className="yaelTitle">Yael Lotan</h1>
          <h3 className="jobTitle">FULLSTACK DEVELOPER</h3>
          <div className="cvBtnWrapper">
            <a
              className="footerCv"
              href="/Yael_Lotan_CV.pdf"
              download="Yael_Lotan_CV"
            >
              DOWNLOAD CV
            </a>
          </div>
          <div className="iconsContactContainer">
            <ContactIcons />
          </div>
          <div className="personalInfo">
            <p>Phone number</p>
            <p>054-6323450</p>
          </div>
          <div className="personalInfo">
            <p>Email</p>
            <p>yaelotan19@gmail.com</p>
          </div>
        </div>
      </Stars>
    </div>
  );
}
