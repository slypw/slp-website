import React from "react";
import butterfly from "../images/butterfly.png";
import "./Butterfly.css";

const Butterfly: React.FC = () => {
  return (
    <>
      <div className="butterfly-wrapper leader">
        <img src={butterfly} className="butterfly-img" alt="Big butterfly" />
      </div>

      <div className="butterfly-wrapper follower">
        <img src={butterfly} className="butterfly-img" alt="Small butterfly" />
      </div>
    </>
  );
};

export default Butterfly;
