// Importing necessary modules and components
import axios from "axios";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../endpoint";

// ChallengePage component
const ChallengePage = ({ scoreData, setUserName }) => {
  // Extracting query parameters from the URL
  const [searchParams] = useSearchParams();
  const name = searchParams.get("friendName");
  const navigate = useNavigate();

  // Function to create a new user
  const createUser = async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.post(`${BASE_URL}/user/register?username=${name}`);
      console.log("Response:", response.data);
      if (response?.data?.is_exist) {
        window.alert("User already exists");
      }
      setUserName(response?.data);
      navigate(`/game?username=${name}`);
      return response.data;
    } catch (error) {
      console.error("Error submitting guess:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center p-6"
      style={{
        border: "2px solid green",
        width: "800px",
        height: "600px",
        margin: "auto",
        marginTop: "2%",
        backgroundColor: "yellow",
        color: "black",
      }}
    >
      <h1 className="text-2xl font-bold">Challenge Mode</h1>
      <p
        style={{
          fontSize: "24px",
          marginTop: "20px",
          fontWeight: "500",
          color: "red",
        }}
      >
        Challenged Name: {scoreData?.username ? `${scoreData?.username} has challenged you!` : "No challenge found."}
      </p>
      <div
        style={{
          fontSize: "24px",
          marginTop: "20px",
          fontWeight: "500",
          color: "red",
        }}
      >
        Challenger Score: {scoreData?.score}
      </div>
      <button
        className={`p-2 border rounded-lg text-lg hover:bg-gray-200 transition-all duration-200`}
        style={{
          display: "block",
          fontSize: "15px",
          height: "30px",
          cursor: "pointer",
          marginTop: "40px",
        }}
        onClick={() => {
          createUser();
        }}
      >
        Start Game
      </button>
    </div>
  );
};

// Exporting the ChallengePage component as the default export
export default ChallengePage;
