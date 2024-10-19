import React from "react";
import FooterLogo from "../../assets/LOGO-bw-footer.png";

function Footer() {
  return (
    <div className="FooterContainer">
      <img className="KasaLogo" src={FooterLogo} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
