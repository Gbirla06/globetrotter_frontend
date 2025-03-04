// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../endpoint";

// QuestionCard component
const QuestionCard = ({ question, onAnswer, submitGuess, isLoading }) => {
  // State variable to track if the question has been answered
  const [isAnswered, setIsAnswered] = useState(false);

  // Function to handle the answer submission
  const handleAnswer = (answer, id) => {
    submitGuess(id, answer);
    setIsAnswered(true);
    onAnswer(answer === question.correctAnswer, question.funFact);
  };

  // Display a loading message if the question is not available or is loading
  if (!question || isLoading) return <p style={{ textAlign: "center", fontWeight: "600", fontSize: "20px", marginTop: "50px" }}>Loading...</p>;

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white text-center">
      <h2 className="text-xl font-semibold mb-4"
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginTop: "50px",
          fontWeight: "500"
        }}
      >
        <div style={{ color: "Blue" }}>Hint :</div>
        <div>
          {question?.clues?.map((text, index) => {
            return <div key={index}>{text}</div>
          })}
        </div>
      </h2>
      <div className="grid grid-cols-2 gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          width: "400px",
          margin: "auto"
        }}
      >
        {question?.options?.map((option, index) => (
          <button
            key={index}
            className={`p-2 border rounded-lg text-lg hover:bg-gray-200 transition-all duration-200 
              ${isAnswered && option === question.correctAnswer ? "bg-green-300" : ""}
              ${isAnswered && option !== question.correctAnswer ? "bg-red-300" : ""}`}
            style={{
              display: "block",
              fontSize: "15px",
              height: "30px",
              cursor: "pointer",
            }}
            onClick={() => handleAnswer(option, question.id)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// Exporting the QuestionCard component as the default export
export default QuestionCard;
