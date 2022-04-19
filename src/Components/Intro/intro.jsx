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
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Pruthvish Modi</span>
          <span>I'm a Lead Frontend Developer based in India</span>
          <span>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services, and
            mobile applications.
          </span>
          <span>
            My passion is to design digital user experiences through bold
            interface and meaningful interactions. Check out my{" "}
            <a href="#" className="link">
              PORTFOLIO
            </a>
          </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="svg-inline--fa fa-twitter fa-w-16 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#FCA61F"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
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
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765903/new%20portfolio/glassesimoji_ii6lhb.webp"
          alt="glassemojis"
        />
        <motion.div
          initial={{ top: "-4%", left: "80%" }}
          whileInView={{ left: "59%" }}
          transition={transition}
          style={{ top: "-4%", left: "80% " }}
          className="floating-div"
        >
          <FloatingDiv
            img="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765901/new%20portfolio/crown_kketps.webp"
            txt1="Web Developer"
          />
        </motion.div>

        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem " }}
          className="floating-div"
        >
          <FloatingDiv
            img="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765904/new%20portfolio/thumbup_icz4gl.webp"
            txt1="Best Design"
            txt2="Award"
          />
        </motion.div>
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
