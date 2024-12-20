import React from "react";

function Banner({ bannerImage, text }) {
  return (
    <div className="banner-container">
      <img className="banner-image" src={bannerImage} alt="rocky coast" />
      <div className="darken"></div>
      <h1>{text}</h1>
    </div>
  );
}

export default Banner;
