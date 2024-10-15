import React from "react";
import styled from "styled-components";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Gallery from "../../components/propertyCardGallery/gallery";
import Footer from "../../components/footer/footer";

const HomeContainer = styled.home`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <main>
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;