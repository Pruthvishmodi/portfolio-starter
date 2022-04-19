import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Wave from "../../img/wave.png";

function Footer() {
  return (
    <div className="Footer">
      <img
        src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765904/new%20portfolio/wave_uw841b.webp"
        alt="waves"
        style={{ width: "100%" }}
      />
      <div className="f-content">
        <span className="great"> OK, LET'S CREAT SOMETHING GREAT</span>
        <span>
          <a href="mailto:iampruthvish@gmail.com">
            <span>iampruthvishmodi@gmail.com</span>
          </a>
        </span>
        <div className="f-icons">
          <a
            target="_blank"
            href="https://instagram.com/modi.pruthvish26@gmail.com"
            rel="noreferrer"
          >
            <Insta color="white" size="1.5rem" />
          </a>
          <a
            target="_blank"
            href="https://facebook.com/Pruthvishmodi/Pruthvishmodi"
            rel="noreferrer"
          >
            <Facebook color="white" size="1.5rem" />
          </a>
          <a
            target="_blank"
            href="https://github.com/Pruthvishmodi/Pruthvishmodi"
            rel="noreferrer"
          >
            <Github color="white" size="1.5rem" />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/Pruthvishmodi/Pruthvishmodi"
            rel="noreferrer"
          >
            <Linkedin color="white" size="1.5rem" />
          </a>
          <span className="hr">
            <hr></hr>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
