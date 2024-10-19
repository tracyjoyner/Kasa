import React from "react";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/propertyCardGallery/Gallery";

function Home() {
  return (
    <div className="HomeContainer">
      <main>
        <Banner />
        <Gallery />
      </main>
    </div>
  );
}

export default Home;
