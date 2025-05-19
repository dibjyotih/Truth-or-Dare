import React, { useState } from "react";

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
    <div className="flex flex-col items-center gap-4 mt-10">
      {!submitted ? (
        <form onSubmit={handleNumPlayersSubmit} className="flex flex-col gap-2">
          <label className="text-xl font-semibold">How many players?</label>
          <input
            type="number"
            min="2"
            max="12"
            value={numPlayers}
            onChange={(e) => setNumPlayers(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Next
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-center">Enter Player Names</h2>
          {playerNames.map((name, index) => (
            <input
              key={index}
              placeholder={`Player ${index + 1}`}
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="border px-3 py-2 rounded"
            />
          ))}
          <button
            onClick={handleStartGame}
            className="bg-green-600 text-white py-2 rounded mt-4"
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerSetup;
