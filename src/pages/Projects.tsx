import React from "react";
import chefmate from "../images/chefmate.png";

const Projects: React.FC = () => (
  <div className="page">
    <h2>Projects</h2>
    <h3>ChefMate</h3>
    <img
      src={chefmate}
      alt="A family standing together smiling in front of a smart fridge (ChefMate)."
      style={{
        width: "30%", // image takes full width of its container
        maxWidth: "600px", // but never exceeds 600px
        height: "auto", // maintain aspect ratio
        display: "block", // removes small gaps below image
        margin: "0 auto", // centers the image
      }}
    />
    <p>
      Designed UX for ChefMate, a smart-fridge application, focusing on creating
      a seamless user expereince. My group conducted extensive user research
      including surveys, interviews, and usability testing to iteratively refine
      deisngs based on real user feedback. including surveys, interviews, and
      usability tests. We finalized our design with a fully interactive Figma
      prototype.
    </p>
    <p>
      My team was awarded <strong>Best User Research</strong> in our
      Human-Computer Interaction course for the depth and quality of our
      research insights.
    </p>
    <p>
      Read the full project article on{" "}
      <a
        href="https://cse440.medium.com/designing-kitchens-for-families-a-ux-journey-into-smart-grocery-shopping-cooking-innovation-with-b8199884bcfd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium{" "}
      </a>
      for a detailed description of our research methods, design decisions, and
      final outcomes.
    </p>
    {/* <h3>ResNet MNIST Classifier</h3> */}
  </div>
);

export default Projects;
