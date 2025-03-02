import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Feedback from "../components/Feedback";
import Scoreboard from "../components/Scoreboard";
import ChallengeFriend from "../components/ChallengeFriend";
import { BASE_URL } from "../endpoint";
import axios from "axios";

const GamePage = ({ scoreData,setUserName,friendName ,setFriendName}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [funFact, setFunFact] = useState("");
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleAnswer = (correct, fact) => {
    setIsCorrect(correct);
    setFunFact(fact);
    setShowFeedback(true);
    setScore({
      correct: correct ? score.correct + 1 : score.correct,
      wrong: !correct ? score.wrong + 1 : score.wrong,
    });
  };

  const handleNext =async () => {
    setShowFeedback(false);
    setIsLoading(true)
    await  axios.get(`${BASE_URL}/destination/random`)
      .then(response => setQuestion(response.data))
          .catch(error => console.error("Error fetching question:", error));
   setIsLoading(false)
  };

  const submitGuess = async (id, answer) => {
    const body_obj = { id, user_guess:answer,username:scoreData?.username };
     setIsLoading(true)
    try {
          await axios.post(`${BASE_URL}/destination/submit-guess`, body_obj)
            .then(response => {
              setUserName({ ...response?.data, username: scoreData?.username })
if (response?.data?.is_guess_right) {
        setIsCorrect(true)
      } else {
        setIsCorrect(false)
      }
      setIsLoading(false)
      return response.data;
            })
            .catch(error => setIsLoading(false));
    } catch (error) {
      setIsLoading(false)
      console.error("Error submitting guess:", error);
    }
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/destination/random`)
    
      .then(response => {
        setQuestion(response.data);
      setFriendName("")})
      .catch(error => console.error("Error fetching question:", error));
  }, []);

  return (
    <div className="flex flex-col items-center p-6"
    style={{
      border: "2px solid green",
      width: "800px",
      height: "600px",
      margin: "auto",
      marginTop: "2%",
      backgroundColor: "yellow",
      color:"black"
    }}>
      <Scoreboard score={score} scoreData={scoreData} />
      {!showFeedback ? (
        <QuestionCard onAnswer={handleAnswer} question={question} submitGuess={submitGuess} scoreData={scoreData} isLoading={isLoading} />
      ) : (
          <Feedback isCorrect={isCorrect} funFact={scoreData?.fun_fact} isLoading={isLoading} onNext={handleNext} scoreData={scoreData} />
      )}
     {!isLoading && <ChallengeFriend friendName={friendName} setFriendName={setFriendName}  />}
    </div>
  );
};

export default GamePage;
