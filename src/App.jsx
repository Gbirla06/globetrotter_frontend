import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import ChallengePage from "./pages/ChallengePage";

const App = () => {
  const [username, setUserName] = useState("")
  const [friendName,setFriendName]=useState("")
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setUserName={setUserName} />} />
        <Route path="/game" element={<GamePage scoreData={username} setUserName={setUserName} setFriendName={setFriendName} friendName={ friendName} />}  />
        <Route path="/challenge" element={<ChallengePage scoreData={username} setUserName={setUserName} friendName={friendName} />} />
      </Routes>
    </Router>
  );
};

export default App;
