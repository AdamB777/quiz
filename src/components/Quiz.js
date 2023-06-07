import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Question from "./Question";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("qs:", quizState);
  return (
    <div className="quiz">
        {quizState.showResults && (
            <div className="results">
                <div className="score results-info">
                    Uzyskałeś {quizState.correctAnswersCount} na {""}
                    {quizState.questions.length} poprawnych odpowiedzi
                </div>
                <div className="next-button" onClick={() => window.location.reload()}>
                    Restart
                </div>
            </div>
        )}
      {!quizState.showResults && (
        <div >
          <div className="score">
            Pytanie {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Nasępne pytanie
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
