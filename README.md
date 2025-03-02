# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Globetrotter Frontend

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Framer Motion**: A production-ready motion library for React.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Components

### ChallengeFriend

The `ChallengeFriend` component allows users to invite a friend to play a game by generating an invite link.

#### Props

- `friendName` (string): The name of the friend to be invited.
- `setFriendName` (function): A function to update the `friendName` state.

#### Usage

```jsx
import React, { useState } from "react";
import ChallengeFriend from "./src/components/ChallengeFriend";

const App = () => {
  const [friendName, setFriendName] = useState("");

  return (
    <ChallengeFriend friendName={friendName} setFriendName={setFriendName} />
  );
};

export default App;
```

#### Functions

- `copyToClipboard`: Copies the invite link to the clipboard and shows an alert.
- `inviteFriend`: Navigates to the challenge page with the friend's name as a query parameter.

#### Example

```jsx
<ChallengeFriend friendName="JohnDoe" setFriendName={setFriendName} />
```

This will render an input field where the user can type the friend's name and a button to send the invite link.

### Feedback

The `Feedback` component provides feedback to the user based on their answer.

#### Props

- `isCorrect` (boolean): Indicates if the user's answer was correct.
- `funFact` (array): An array of fun facts related to the question.
- `onNext` (function): A function to fetch the next question.
- `scoreData` (object): An object containing the user's score data.
- `isLoading` (boolean): Indicates if the data is still loading.

#### Usage

```jsx
import React from "react";
import Feedback from "./src/components/Feedback";

const App = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [funFact, setFunFact] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    // Fetch the next question
  };

  return (
    <Feedback
      isCorrect={isCorrect}
      funFact={funFact}
      onNext={handleNext}
      isLoading={isLoading}
    />
  );
};

export default App;
```

### QuestionCard

The `QuestionCard` component displays a question and its possible answers.

#### Props

- `question` (object): The question object containing the question text, options, and correct answer.
- `onAnswer` (function): A function to handle the answer submission.
- `submitGuess` (function): A function to submit the user's guess.
- `isLoading` (boolean): Indicates if the data is still loading.

#### Usage

```jsx
import React from "react";
import QuestionCard from "./src/components/QuestionCard";

const App = () => {
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnswer = (correct, fact) => {
    // Handle the answer submission
  };

  const submitGuess = (id, answer) => {
    // Submit the user's guess
  };

  return (
    <QuestionCard
      question={question}
      onAnswer={handleAnswer}
      submitGuess={submitGuess}
      isLoading={isLoading}
    />
  );
};

export default App;
```

### Scoreboard

The `Scoreboard` component displays the user's score.

#### Props

- `score` (object): An object containing the user's score data.
- `scoreData` (object): An object containing additional score data.

#### Usage

```jsx
import React from "react";
import Scoreboard from "./src/components/Scoreboard";

const App = () => {
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [scoreData, setScoreData] = useState({ username: "JohnDoe", score: 10, correct_score: 5, incorrect_score: 5 });

  return (
    <Scoreboard score={score} scoreData={scoreData} />
  );
};

export default App;
```

## How to Use This Repository

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/globetrotter-frontend.git
   cd globetrotter-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

This repository provides a frontend for the Globetrotter application, built with React and Vite. It includes several components such as `ChallengeFriend`, `Feedback`, `QuestionCard`, and `Scoreboard` to create an interactive and engaging user experience.
