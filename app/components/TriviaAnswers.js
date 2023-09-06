import { useCallback } from "react";
import { checkAnswer } from "../helpers/checkAnswer";
import { playingStore } from "../store/playingStore";

export const TriviaAnswers = ({ title, answer }) => {
  const toggle = playingStore((state) => state.toggle);
  const playing = playingStore((state) => state.playing);

  const handleClick = useCallback(
    (answer) => {
      checkAnswer(answer, title); // Comprueba la respuesta (ajusta los parámetros según tus necesidades)
      toggle(); // Cambia el estado del juego
    },
    [title, toggle]
  );

  return (
    <button
      disabled={!playing}
      onClick={(e) => handleClick(e)}
      className={`transition duration-100 ease-out ${
        !playing && answer === title && "correct-answer"
      } text-white font-bold uppercase w-full md:w-[45%] md:mb-2 py-2 px-4 rounded-xl bg-[#fc6812] disabled:bg-[#b46638] disabled:text-gray-400`}
    >
      {answer}
    </button>
  );
};
