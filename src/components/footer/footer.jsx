import React from "react";
import FooterLogo from "../../assets/LOGO-bw-footer.png";

function Footer() {
  return (
    <div className="footer-container">
      <img className="kasa-logo" src={FooterLogo} alt="Kasa Logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
