import React, { useState } from "react";
import ArrowOpen from "../../assets/Arrow-Open.svg";

function Dropdowns({ description, equipments }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <h2>Description</h2>
        <div onClick={display} className="dropdown-arrows">
          {isOpen ? (
            <img src={ArrowOpen} alt="Open Dropdown" className="arrow-open" />
          ) : (
            <img src={ArrowOpen} alt="Close Dropdown" className="arrow-close" />
          )}
        </div>
      </div>
      <div>{isOpen && <p className="content">{description}</p>}</div>

      <div className="dropdown">
        <h2>Amenities</h2>
        <div onClick={display} className="dropdown-arrows">
          {isOpen ? (
            <img src={ArrowOpen} alt="Open Dropdown" className="arrow-open" />
          ) : (
            <img src={ArrowOpen} alt="Close Dropdown" className="arrow-close" />
          )}
        </div>
      </div>
      <div>{isOpen && <p className="content">{equipments}</p>}</div>
    </div>
  );
}

export default Dropdowns;
