import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


export const Work = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Works">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Work For All These
        </span>
        <span>Brands & Clients</span>
        <span>
          Work with local, as well as, international clients has become an
          amazing opportunity that I don't take for granted. Take a look at my
          latest projects that I’ve been busy working on.
        </span>

        <button className="button s-button">Hire Me</button>
        <div
          className="blur p-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>
      {/*right side path */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-maincircle">
            <div className="w-secCircle">
              <img
                src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_121,q_75,w_116/v1649935685/new%20portfolio/WhatsApp_Image_2022-04-14_at_4.56.05_PM-removebg-preview_egxzdc.webp"
                alt="scis"
              />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="fiverr 2" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="amazon 3" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={Shopify} alt="shopify 4" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="facebook 5" />
            </div>
          </div>
        </motion.div>
      </div>
      {/*background parth */}
      <div className="w-backCircle bluCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  );
};
