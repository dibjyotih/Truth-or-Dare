import React from "react";
import "./Bottle.css"; // Add this line

const Bottle = ({ rotation }) => {
  return (
    <div
      className="bottle"
      style={{
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      🍼
    </div>
  );
};

export default Bottle;
