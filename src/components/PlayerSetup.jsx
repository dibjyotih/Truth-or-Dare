import React, { useState } from "react";
import "./PlayerSetup.css";
import bgImage from "../assets/bar.png";

const PlayerSetup = ({ onStart }) => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [playerNames, setPlayerNames] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleNumPlayersSubmit = (e) => {
    e.preventDefault();
    const names = Array.from({ length: numPlayers }, () => "");
    setPlayerNames(names);
    setSubmitted(true);
  };

  const handleNameChange = (index, value) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = value;
    setPlayerNames(updatedNames);
  };

  const handleStartGame = () => {
    const trimmedNames = playerNames.map((name, i) => name.trim() || `Player ${i + 1}`);
    onStart(trimmedNames);
  };

  return (
    <div
      className="player-setup-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <h1 className="game-title">Truth or Dare</h1>
      {!submitted ? (
        <form onSubmit={handleNumPlayersSubmit} className="player-count-form">
          <label className="form-label">How many players?</label>
          <input
            type="number"
            min="2"
            max="12"
            value={numPlayers}
            onChange={(e) => setNumPlayers(e.target.value)}
            className="player-count-input"
          />
          <button type="submit" className="player-count-button">
            Next
          </button>
        </form>
      ) : (
        <div className="player-name-grid">
          <h2 className="name-heading">Enter Player Names</h2>
          <div className="grid">
            {playerNames.map((name, index) => (
              <input
                key={index}
                placeholder={`Player ${index + 1}`}
                value={name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                className="player-name-input"
              />
            ))}
          </div>
          <button onClick={handleStartGame} className="start-game-button">
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerSetup;
