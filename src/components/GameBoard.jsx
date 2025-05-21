import React, { useState } from "react";
import "./GameBoard.css";
import Bottle from "./Bottle";
import truthQuestions from "../data/truthQuestions";
import dareQuestions from "../data/dareQuestions";
import bgImage from "../assets/bar.png";

const GameBoard = ({ players }) => {
  const [rotation, setRotation] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [selectedPair, setSelectedPair] = useState(null);
  const [questionType, setQuestionType] = useState(null);
  const [question, setQuestion] = useState("");
  const [spinning, setSpinning] = useState(false);

  const handleChoice = (type) => {
    setQuestionType(type);
    const questions = type === "truth" ? truthQuestions : dareQuestions;
    const random = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(random);
  };

  const spinBottle = () => {
    const totalPlayers = players.length;
    const segmentAngle = 360 / totalPlayers;
    const askerIndex = Math.floor(Math.random() * totalPlayers);
    const angleToAsker = askerIndex * segmentAngle;
    const spinCount = 4;
    const targetAngle = 180 + angleToAsker;
    const fullSpins = spinCount * 360;
    const finalRotation = currentAngle + fullSpins + targetAngle;

    setRotation(finalRotation);
    setCurrentAngle(finalRotation);
    setSpinning(true);

    setTimeout(() => {
      const angleAfterSpin = finalRotation % 360;
      const bottomAngle = (angleAfterSpin + 180) % 360;
      let k = Math.round(bottomAngle / segmentAngle) % totalPlayers;
      if (k === 0) k = totalPlayers;
      const askerIndexFinal = k - 1;
      const answererIndex = (askerIndexFinal + Math.floor(totalPlayers / 2)) % totalPlayers;

      setSelectedPair({
        asker: players[askerIndexFinal],
        answerer: players[answererIndex],
        askerIndex: askerIndexFinal,
        answererIndex: answererIndex,
      });

      setQuestion("");
      setQuestionType(null);
      setSpinning(false);
    }, 3000);
  };

  const radius = 150;
  const centerX = 200;
  const centerY = 200;

  const handleNewGame = () => {
    window.location.reload();
  };

  return (
    <div
      className="game-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <div className="header">
        <h1 className="game-title">    Truth or Dare</h1>
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
      </div>

      <div className="game-container">
        <div className="circle" onClick={() => !spinning && !selectedPair && spinBottle()}>
          {players.map((player, index) => {
            const angle = (index / players.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isAsker = selectedPair && index === selectedPair.askerIndex;
            const isAnswerer = selectedPair && index === selectedPair.answererIndex;

            return (
              <div
                key={index}
                className={`player ${isAsker ? "asker" : ""} ${isAnswerer ? "answerer" : ""}`}
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
        </div>

        <div className="controls">
          {selectedPair && !questionType && (
            <div className="result-box">
              <p>
                <strong>{selectedPair.asker}</strong> will ask {" "}
                <strong>{selectedPair.answerer}</strong>
              </p>
              <p>Choose one:</p>
              <div className="truth-dare-buttons">
                <button onClick={() => handleChoice("truth")}>Truth</button>
                <button onClick={() => handleChoice("dare")}>Dare</button>
              </div>
            </div>
          )}

          {questionType && (
            <div className="result-box">
              <p>
                <strong>{selectedPair.answerer}</strong> chose {" "}
                <strong>{questionType.toUpperCase()}</strong>
              </p>
              <p className="question-text">👉 {question}</p>
              <button
                className="continue-button"
                onClick={() => {
                  setSelectedPair(null);
                  setQuestion("");
                  setQuestionType(null);
                }}
              >
                Done — Spin Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
