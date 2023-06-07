import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import Quiz from "./components/Quiz";
import reportWebVitals from "./reportWebVitals";
import { QuizProvider } from "./contexts/quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
reportWebVitals();
