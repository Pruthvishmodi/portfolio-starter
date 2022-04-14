import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="Experience">
      <div className="achievement">
        <div className="circle">3+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Companies</span>
        <span>Work</span>
      </div>
      <div
        className="blur y-blur2"
        style={{ background: "var(--blueCard)" }}
      ></div>
    </div>
  );
};
