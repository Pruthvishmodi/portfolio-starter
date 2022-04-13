import React from "react";
import "./Works.css";

export const Work = () => {
  return (
    <div className="Works">
      {/*left side*/}
      <div className="awesome">
        <span>Work For All These</span>
        <span>Brands & Clients</span>
        <span>
          I am a Front-End developer and love working with new technology.{" "}
          <br /> I do development to deliver a great end-to-end solution focused
          on user experience.
          <br /> My main focus these days is SEO, performance, type system, and
          code architecture.
        </span>

        <button className="button s-button">Hire Me</button>
        <div
          className="blur s-blur1"
          style={{ background: "var(--blueCard)" }}
        ></div>
      </div>
    </div>
  );
};
