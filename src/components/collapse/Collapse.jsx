import React, { useState } from "react";
import ArrowOpen from "../../assets/ArrowOpen.svg";
import ArrowClose from "../../assets/ArrowClose.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  // TODO add arrow rotation and text slide-in?

  return (
    <div className="CollapseContainer">
      <div className="collapse">
        <h2>{title}</h2>
        <div onClick={display} className="dropdownArrows">
          {isOpen ? (
            <img src={ArrowOpen} alt="Open Dropdown" className="arrowOpen" />
          ) : (
            <img src={ArrowClose} alt="Close Dropdown" />
          )}
        </div>
      </div>
      <div>{isOpen && <p className="content">{content}</p>}</div>
    </div>
  );
}

export default Collapse;
