import React, { useState } from "react";
import ArrowOpen from "../../assets/Arrow-Open.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse">
        <h2>{title}</h2>
        <div onClick={display} className="dropdown-arrows">
          {isOpen ? (
            <img src={ArrowOpen} alt="Open Dropdown" className="arrow-open" />
          ) : (
            <img src={ArrowOpen} alt="Close Dropdown" className="arrow-close" />
          )}
        </div>
      </div>
      <div>{isOpen && <div className="content">{content}</div>}</div>
    </div>
  );
}

export default Collapse;
