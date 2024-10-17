import React from "react";
import styled from "styled-components";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/propertyCardGallery/Gallery";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <main>
        <Banner />
        <Gallery />
      </main>
    </HomeContainer>
  );
}

export default Home;
