import React from "react";
import "./About.css";

import flowerCake from "../images/flowerCake.png";
import chocolateCake from "../images/chocolateCake.png";
import austria from "../images/austria.png";
import sheep from "../images/sheep.png";
import butterfly from "../images/butterfly.png";

const About: React.FC = () => (
  <div className="about-page">
    <div className="butterfly-space">
      {/* Butterflies flying across the top */}
      <img src={butterfly} alt="" className="butterfly top-butterfly-1" />
      <img src={butterfly} alt="" className="butterfly top-butterfly-2" />
    </div>

    <div className="page">
      <h3>Hi, I'm Saan Lily Popović!</h3>
      <p>
        I'm a fourth-year undergraduate student and teaching assistant at the
        Paul G. Allen School of Computer Science at the University of
        Washington.
      </p>

      <h3>Current Work</h3>
      <p>
        I'm currently working on a speech-to-text full-stack website to
        translate from English to Serbo-Croatian (and other languages coming
        soon)!
      </p>

      <h3>Hobbies</h3>
      <p>
        I like to bake and experiement with new recipes. You can see some of my
        baking projects on my Instagram:{" "}
        <a
          href="https://www.instagram.com/frosted.bylily/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @frosted.bylily
        </a>
      </p>

      <div className="photo-row">
        <img
          src={flowerCake}
          alt="Vanilla cake with frosting roses and strawberries around the sides."
        />
        <img src={chocolateCake} alt="Chocolate cake with frosting roses." />
      </div>

      <p>I also enjoy hiking and exploring the world in my free time.</p>

      <div className="photo-row">
        <img src={austria} alt="Scenic river between Austria and Serbia." />
        <img src={sheep} alt="Sheep on a mountain in New Zealand." />
      </div>
    </div>
  </div>
);

export default About;
