import React from "react";
import "./Experience.css";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

export const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          3+
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          10+
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "black" : "" }}>
          5+
        </div>
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
