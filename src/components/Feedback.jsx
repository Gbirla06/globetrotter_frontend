// Importing necessary modules and components
import React from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

// Feedback component
const Feedback = ({ isCorrect, funFact, onNext, scoreData, isLoading }) => {
  const { width, height } = useWindowSize();

  // Display a loading message if the data is still loading
  if (isLoading) return <p style={{ textAlign: "center", fontWeight: "600", fontSize: "20px", marginTop: "50px" }}>Loading...</p>;

  return (
    <div className="mt-4 text-center">
      {/* Display confetti animation if the answer is correct */}
      {isCorrect && <Confetti width={width} height={height} />}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-lg font-bold p-2 rounded-md 
          ${isCorrect ? "text-green-600" : "text-red-600"}`}
        style={{
          textAlign: "center",
          fontWeight: "600",
          fontSize: "18px",
          marginTop: "50px"
        }}
      >
        {isCorrect ? "🎉 Correct! Well done!" : "😢 Oops! Try again next time."}
      </motion.p>
      <h2 className="text-xl font-semibold mb-4"
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginTop: "50px",
          fontWeight: "500"
        }}
      >
        <div style={{ color: "Blue" }}>Fun Fact:</div>
        <div>
          {funFact?.map((text, index) => {
            return <div key={index}>{text}</div>
          })}
        </div>
      </h2>
      <button onClick={onNext} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        style={{
          margin: "auto",
          display: "block",
          fontSize: "15px",
          height: "30px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Next Question
      </button>
    </div>
  );
};

// Exporting the Feedback component as the default export
export default Feedback;
