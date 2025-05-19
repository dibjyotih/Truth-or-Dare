import React, { useState } from "react";
import { truthQuestions } from "../data/truthQuestions";
import { dareChallenges } from "../data/dareChallenges";
import "./TruthDareModal.css"; // Add this line

const TruthDareModal = ({ asker, answerer, onClose }) => {
  const [prompt, setPrompt] = useState(null);

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleChoice = (type) => {
    const picked =
      type === "truth" ? getRandom(truthQuestions) : getRandom(dareChallenges);
    setPrompt(picked);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">
          {asker} asks {answerer}:
        </h2>

        {!prompt ? (
          <>
            <p className="modal-subtitle">Choose one:</p>
            <div className="modal-buttons">
              <button
                onClick={() => handleChoice("truth")}
                className="btn truth-btn"
              >
                Truth
              </button>
              <button
                onClick={() => handleChoice("dare")}
                className="btn dare-btn"
              >
                Dare
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="modal-prompt">{prompt}</p>
            <button onClick={onClose} className="btn next-btn">
              Spin Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TruthDareModal;
