import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/image-1-rocky-coast.jpg";

const BannerContainer = styled.banner`
  hight: 223px;
  width: 1240px;
  border-radius: 25px;
  opacity: 60%;
  display: flex;
  align-items: center;
`;

const BannerInfo = styled.img`
  height: 68px;
`;

function Banner() {
  return <BannerContainer>
    <BannerInfo text="At home, everywhere, and anywhere" src={bannerImage} alt="rocky coast" />
  </BannerContainer>;
}

export default Banner;
