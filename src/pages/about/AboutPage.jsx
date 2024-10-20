import React from "react";
import Banner from "../../components/banner/Banner";
import aboutContent from "../../assets/aboutContent.json";
import Collapse from "../../components/collapse/Collapse";

function About() {
  return (
    <div className="AboutContainer">
      <main>
        <Banner />
        <ul className="aboutContent">
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
