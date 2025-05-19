import React, { useState } from "react";
import "./GameBoard.css"; // Make sure this file exists
import bottleImg from "../assets/bottle.png"; // Replace with your image path

const GameBoard = () => {
  const players = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const [rotation, setRotation] = useState(0);

  const spinBottle = () => {
    const newRotation = rotation + 1440 + Math.floor(Math.random() * 360);
    setRotation(newRotation);
  };

  const radius = 150;
  const centerX = 200;
  const centerY = 200;

  return (
    <div className="game-container">
      <div className="circle">
        {players.map((player, index) => {
          const angle = (index / players.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <div
              key={index}
              className="player"
              style={{ left: x, top: y }}
            >
              {player}
            </div>
          );
        })}

        <img
          src={bottleImg}
          alt="bottle"
          className="bottle"
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        <button className="spin-button" onClick={spinBottle}>
          Spin
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
