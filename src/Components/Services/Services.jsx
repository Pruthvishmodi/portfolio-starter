import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Pruthvish.pdf";

const Services = () => {
  return (
    <div className="Services">
      {/*left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          I am a Front-End developer and love working with new technology. I do
          development to deliver a great end-to-end solution focused on user
          experience. My main focus these days is SEO, performance, type system,
          and code architecture.
        </span>
        <a className="download-link" href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <div style={{ left: "30rem", top: "66rem" }}>
          <Card
            img="https://res.cloudinary.com/pruthvish/image/upload/c_scale,q_75,w_130/v1649842364/new%20portfolio/frontend_mvoaiu.webp"
            heading={"Frontend Development"}
            detail={
              "I hold good proficiency in all the latest front-end technologies. I am also an expert in building any specific technology that you have in mind. I have great knowledge of React, Next , HTML5 and CSS3."
            }
          />
        </div>
        {/*secound card*/}
        <div style={{ left: "45rem", top: "61rem" }}>
          <Card
            img="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_130,q_75,w_130/v1649842366/new%20portfolio/mobail_app_hmseyv.webp"
            heading={"Mobile Application"}
            detail={
              " I can develop Android or IOS applications as promising with the latest technologies. My major technology is React Native"
            }
          />
        </div>
        {/*3rd card*/}
        <div style={{ left: "60rem", top: "56rem" }}>
          <Card
            img="https://res.cloudinary.com/pruthvish/image/upload/c_scale,q_75,w_130/v1649842365/new%20portfolio/Corporate_cwgvh4.webp"
            heading={"Corporate Projects"}
            detail={
              "I provide Corporate Projects on React, React-Native, HTML, CSS and Javascript. During the Projects session 90%, I provide hands on training and rest through PPT."
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
