import { useEffect } from "react";
import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

const ResultMessage = () => {
  const { userSelection } = useAnswerStore((state) => ({
    userSelection: state.userSelection,
  }));
  const { currentQuestion } = useAnswerStore((state) => state.answerData);
  const timer = timerStore((state) => state.timer);

  useEffect(() => {
    console.log(userSelection);
  }, [userSelection]);

  if (timer === 0) {
    return (
      <h2 className="uppercase md:mx-auto md:grow-1 text-white mt-2 mb-2 incorrect-answer px-4 py-1 rounded-full">
        Se acabó el tiempo
      </h2>
    );
  } else if (userSelection === null) {
    return null;
  }

  return userSelection === currentQuestion.title ? (
    <h2 className="uppercase md:mx-auto md:grow-1 text-white mt-2 mb-2  correct-answer px-4 py-1 rounded-full">
      Correcto
    </h2>
  ) : (
    <h2 className="uppercase md:mx-auto md:grow-1 text-white mt-2 mb-2  incorrect-answer px-4 py-1 rounded-full">
      Incorrecto
    </h2>
  );
};
export default ResultMessage;
