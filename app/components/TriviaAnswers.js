import { checkAnswer } from "../helpers/checkAnswer";
import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

export const TriviaAnswers = ({ answer }) => {
  const { currentQuestion } = useAnswerStore((state) => state.answerData);
  const isPlaying = timerStore((state) => state.isPlaying);

  return (
    <button
      disabled={!isPlaying}
      onClick={(e) => checkAnswer(e)}
      className={`${
        !isPlaying && answer === currentQuestion.title && "correct-answer"
      }  transition duration-100 ease-out  text-white font-bold uppercase w-full md:w-[45%] md:mb-2 py-2 px-4 rounded-xl bg-[#fc6812] disabled:bg-[#b46638] disabled:text-gray-400`}
    >
      {answer}
    </button>
  );
};
