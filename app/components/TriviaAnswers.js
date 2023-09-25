import { checkAnswer } from "../helpers/checkAnswer";
import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

export const TriviaAnswers = ({ answer }) => {
  const isPlaying = timerStore((state) => state.isPlaying);
  const timer = timerStore((state) => state.timer);
  const { saveUserSelection } = useAnswerStore();

  const handleAnswer = (e) => {
    checkAnswer(e);
    saveUserSelection(answer);
  };

  return (
    <button
      disabled={!isPlaying || timer === 0}
      onClick={(e) => handleAnswer(e)}
      className={`my-2 transition duration-100 ease-out  text-white font-bold uppercase w-full md:w-[45%] md:mb-2 py-2 px-4 rounded-xl bg-[#fc6812]  
      `}
    >
      {answer}
    </button>
  );
};
