// Importing necessary modules and components
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../endpoint";

// HomePage component
const HomePage = ({ setUserName }) => {
  // State variables to store the username and error message
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to create a new user
  const createUser = async () => {
    try {
      console.log(BASE_URL);
      const response = await axios.post(`${BASE_URL}/user/register?username=${username}`);
      console.log("Response:", response.data);
      if (response?.data?.is_exist) {
        window.alert("User already exists");
      }
      setUserName(response?.data);
      navigate(`/game?username=${username}`);
      return response.data;
    } catch (error) {
      setError("ERROR");
      console.error("Error submitting guess:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6"
      style={{
        border: "2px solid green",
        width: "800px",
        height: "600px",
        margin: "auto",
        marginTop: "2%",
        backgroundColor: "yellow",
        color: "black"
      }}
    >
      <h1 className="text-2xl font-bold"
        style={{
          textAlign: "center"
        }}
      >
        Welcome to Globetrotter!
      </h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded-lg my-4"
        placeholder="Enter your username"
        style={{
          display: "block",
          margin: "auto",
          height: "20px",
          fontSize: "16px",
          alignContent: "center"
        }}
      />
      <div
        style={{
          fontSize: "24px",
          marginTop: "20px",
          fontWeight: "500",
          color: "red",
          textAlign: "center"
        }}
      >
        {error}
      </div>
      <button onClick={createUser} className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        style={{
          fontSize: "16px",
          marginTop: "30px",
          fontWeight: "500",
          color: "red",
          textAlign: "center",
          margin: "auto",
          display: "block",
          cursor: "pointer"
        }}
      >
        Start Game
      </button>
    </div>
  );
};

// Exporting the HomePage component as the default export
export default HomePage;
