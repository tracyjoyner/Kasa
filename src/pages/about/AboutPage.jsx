import React from "react";
import Banner from "../../components/banner/Banner";
import aboutImage from "../../assets/Image-2-mtns.jpg";
import aboutContent from "../../assets/about-content.json";
import Collapse from "../../components/collapse/Collapse";

function About() {
  return (
    <div className="about-container">
      <main>
        <Banner text="" bannerImage={aboutImage} />
        <ul className="about-content">
          {aboutContent.map((content) => (
            <li key={content.id}>
              <div to={`/aboutContent/${content.id}`}>
                <Collapse title={content.title} content={content.description} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default About;
