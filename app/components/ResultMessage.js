import { useAnswerStore } from "../store/answerStore";
import { useTimerStore } from "../store/timerStore";
import Message from "./Message";

const ResultMessage = () => {
  // Obtener la selección del usuario, la pregunta actual, y el tiempo
  const { userSelection, currentQuestion } = useAnswerStore();
  const timer = useTimerStore((state) => state.timer);

  if (timer === 0) {
    return <Message type="timeUp" />;
  } else if (userSelection === null) {
    return null;
  } else if (userSelection === currentQuestion.title) {
    return <Message type="correct" />;
  } else {
    return <Message type="incorrect" />;
  }
};

export default ResultMessage;
