import React from "react";
import "./banner.scss";
import bannerImage from "../../assets/image-1-rocky-coast.jpg";

function Banner() {
  return (
    <div className="BannerContainer">
      <img className="BannerImage" src={bannerImage} alt="rocky coast" />
      <div className="darken"></div>
      <h1>At home, everywhere, and anywhere</h1>
    </div>
  );
}

export default Banner;
