import React from "react";

const Scoreboard = ({ score ,scoreData}) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-gray-100 text-center">
    <h1 className="text-xl font-semibold"
      style={{
        textAlign: "center",
        fontSize:"30px"
    }}>Scoreboard</h1>
      <div className="text-lg"
      style={{
        textAlign: "center",
        fontWeight: "600",
        fontSize:"20px"
        }}>Hello ! {scoreData?.username}</div>
          <div className="text-lg"
      style={{
        textAlign: "center",
        fontWeight: "600",
        fontSize: "18px",
        color: "blue",
        marginTop:"30px"
        }}>Total Score: {scoreData?.score}</div>
      <div className="text-lg"
      style={{
        textAlign: "center",
        color: "green",
        fontWeight: "600",
        fontSize:"18px"
    }}>Correct Answers: {scoreData?.correct_score}</div>
      <div className="text-lg"
      style={{
        textAlign: "center",
         color: "red",
        fontWeight: "600",
        fontSize:"18px"
    }}>Wrong Answers: {scoreData?.incorrect_score}</div>
    </div>
  );
};

export default Scoreboard;
