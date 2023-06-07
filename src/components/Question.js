import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Answer from "./Answer";
const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState.questions); // dodane tutaj
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  if (!currentQuestion) {
    return <div>No question found</div>;
  }

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
