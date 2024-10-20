import React from "react";
import DropArrow from "../../assets/DropdownArrow.svg";

function Collapse({ title, content }) {
  return (
    <div className="CollapseContainer">
      <div className="collapse">
        <h2>{title}</h2>
        <img src={DropArrow} alt="Dropdown Arrow" />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;
