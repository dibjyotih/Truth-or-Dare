import React, { useState } from "react";
import PlayerSetup from "./components/PlayerSetup";
import GameBoard from "./components/GameBoard";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🎉 Truth or Dare Game 🎉</h1>
      {players.length === 0 ? (
        <PlayerSetup onStart={setPlayers} />
      ) : (
        <GameBoard players={players} />
      )}
    </div>
  );
}

export default App;
