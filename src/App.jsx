// Importing necessary modules from React and React Router
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing the page components
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ChallengePage from "./pages/ChallengePage";

// Main App component
const App = () => {
  // State variables to store the username and friend's name
  const [username, setUserName] = useState("");
  const [friendName, setFriendName] = useState("");

  return (
    // Setting up the Router to handle different routes
    <Router>
      <Routes>
        {/* Route for the HomePage component */}
        <Route path="/" element={<HomePage setUserName={setUserName} />} />
        {/* Route for the GamePage component */}
        <Route path="/game" element={<GamePage scoreData={username} setUserName={setUserName} setFriendName={setFriendName} friendName={friendName} />} />
        {/* Route for the ChallengePage component */}
        <Route path="/challenge" element={<ChallengePage scoreData={username} setUserName={setUserName} friendName={friendName} />} />
      </Routes>
    </Router>
  );
};

// Exporting the App component as the default export
export default App;
