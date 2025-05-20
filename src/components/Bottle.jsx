import React from "react";
import "./Bottle.css";
import bottleImg from "../assets/bottle.png";

const Bottle = ({ rotation }) => {
  return (
    <img
      src={bottleImg}
      alt="Bottle"
      className="bottle"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    />
  );
};

export default Bottle;
