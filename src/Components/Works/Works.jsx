import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

export const Work = () => {
  return (
    <div className="Works">
      {/*left side*/}
      <div className="awesome">
        <span>Work For All These</span>
        <span>Brands & Clients</span>
        <span>
          Work with local, as well as, international clients has become an
          amazing opportunity that I don't take for granted. Take a look at my
          latest projects that I’ve been busy working on.
        </span>

        <button className="button s-button">Hire Me</button>
        <div
          className="blur s-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>
      {/*right side path */}
      <div className="w-right">
        <div className="w-maincircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
      </div>
      {/*background parth */}
      <div className="w-backCircle bluCircle"></div>
      <div className="w-backCircle yellowCircle"></div>
    </div>
  );
};
