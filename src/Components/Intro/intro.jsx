import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Pruthvish Modi</span>
          <span>
            Frontend Developer with high level of experience in web development,
            producting the Quality work.
          </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            target="_blank"
            href="https://github.com/Pruthvishmodi/Pruthvishmodi"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,q_75,w_45/v1649765902/new%20portfolio/github_mzmx28.webp"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/pruthvish-modi-b95694193"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_45,q_75,w_45/v1649765903/new%20portfolio/linkedin_hsilnf.webp"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/modi.pruthvish26@gmail.com"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,q_75,w_45/v1649765902/new%20portfolio/instagram_bt5ebr.webp"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img
          src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765904/new%20portfolio/Vector1_x66clm.webp"
          alt="vector1"
        />
        <img
          src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765904/new%20portfolio/Vector2_aa4qyc.webp"
          alt="vector2"
        />
        <img
          src="https://res.cloudinary.com/pruthvish/image/upload/q_80/v1649765902/new%20portfolio/boy_vm6jt2.webp"
          alt="boy"
        />
        <img
          src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765903/new%20portfolio/glassesimoji_ii6lhb.webp"
          alt="glassemojis"
        />
        <div style={{ top: "-4%", left: "68% " }}>
          <FloatingDiv
            img="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765901/new%20portfolio/crown_kketps.webp"
            txt1="Web Developer"
          />
        </div>
        <div style={{ top: "18rem", left: "0rem " }}>
          <FloatingDiv
            img="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765904/new%20portfolio/thumbup_icz4gl.webp"
            txt1="Best Design"
            txt2="Award"
          />
        </div>
        {/*blur divs*/}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
