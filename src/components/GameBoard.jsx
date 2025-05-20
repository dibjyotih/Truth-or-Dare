import React, { useState } from "react";
import "./GameBoard.css";
import Bottle from "./Bottle";

const GameBoard = ({ players }) => {
  const [rotation, setRotation] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [selectedPair, setSelectedPair] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinBottle = () => {
    const totalPlayers = players.length;
    const segmentAngle = 360 / totalPlayers;

    // Randomly pick a player index
    const targetIndex = Math.floor(Math.random() * totalPlayers);
    const playerAngle = targetIndex * segmentAngle;

    // Rotate so the bottom (180°) points to that player
    const desiredAngle = 180 + playerAngle;
    const fullSpins = 4 * 360;

    const newRotation = currentAngle + fullSpins + desiredAngle;

    setSpinning(true);
    setRotation(newRotation);
    setCurrentAngle(newRotation);

    // Wait for bottle animation to complete, then show result
    setTimeout(() => {
      const angleAfterSpin = newRotation % 360;
      let landedIndex = (Math.floor(((angleAfterSpin - 180 + 360) % 360) / segmentAngle))-1;
      if (landedIndex == null){
        landedIndex = totalPlayers;
      }
      const answerer = players[landedIndex];
      const askerIndex = ((landedIndex + Math.floor(totalPlayers / 2)) % totalPlayers) ;     
      const asker = players[askerIndex];

      setSelectedPair({ answerer, asker });
      setSpinning(false);
    }, 3000);
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
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {player}
            </div>
          );
        })}

        <Bottle rotation={rotation} />

        {!spinning && (
          <button className="spin-button" onClick={spinBottle}>
            Spin
          </button>
        )}

        {selectedPair && (
          <div className="result">
            <strong>{selectedPair.answerer}</strong> will ask{" "}
            <strong>{selectedPair.asker}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
