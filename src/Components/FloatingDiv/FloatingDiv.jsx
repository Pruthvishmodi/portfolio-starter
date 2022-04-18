import React from "react";
import "./floating.css";


function FloatingDiv({ image, txt1, txt2 }) {
 
  return (
    <div className="floatingdiv">
      <img
        src="https://res.cloudinary.com/pruthvish/image/upload/q_75/v1649765901/new%20portfolio/crown_kketps.webp"
        alt="crown"
      />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
}

export default FloatingDiv;
