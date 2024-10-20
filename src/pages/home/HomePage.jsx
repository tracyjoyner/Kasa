import React from "react";
import Banner from "../../components/banner/Banner";
import homeImage from "../../assets/image-1-rocky-coast.jpg";
import Gallery from "../../components/propertyCardGallery/Gallery";

function Home() {
  return (
    <div className="HomeContainer">
      <main>
        <Banner text="At home, everywhere, and anywhere" bannerImage={homeImage} />
        <Gallery />
      </main>
    </div>
  );
}

export default Home;
