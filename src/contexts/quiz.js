import { createContext, useReducer } from "react";
import questions from "../data";
import { getRandomQuestions, shuffleAnswers } from "../helpers";

const numberOfQuestions = 8; // Ilość losowych pytań
const randomQuestions = getRandomQuestions(questions, numberOfQuestions);

const initialState = {
  questions: randomQuestions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: shuffleAnswers(randomQuestions[0]),
  currentAnswer: "",
};



const reducer = (state, action) => {
  console.log("reducer:", state, action);
  switch (action.type) {
    case "SELECT_ANSWER":
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    case "NEXT_QUESTION":
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
        const answers = showResults?[]:shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    case "PLAY_AGAIN":
      return initialState;

    default:
  }

  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
