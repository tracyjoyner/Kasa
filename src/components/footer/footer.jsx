import React from "react";
import styled from "styled-components";
import FooterLogo from "../../assets/LOGO-bw-footer.jpg";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const KasaLogo = styled.img`
  height: 209px;
`;

function Footer() {
  return (
    <FooterContainer>
      <KasaLogo src={FooterLogo} alt="Kasa Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}

export default Footer;
