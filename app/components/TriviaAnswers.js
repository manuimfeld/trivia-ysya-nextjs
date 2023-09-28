import { checkAnswer } from "../helpers/checkAnswer";
import { useAnswerStore } from "../store/answerStore";
import { useTimerStore } from "../store/timerStore";
import { motion } from "framer-motion";

export const TriviaAnswers = ({ answer, currentQuestion }) => {
  // Obtener el estado del temporizador y si el juego está en curso
  const { isPlaying, timer } = useTimerStore();

  // Obtener la función para guardar la selección del usuario
  const { saveUserSelection } = useAnswerStore();

  // Manejar la selección de la respuesta
  const handleAnswer = (e) => {
    saveUserSelection(answer);
    checkAnswer(e, answer, currentQuestion);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      disabled={!isPlaying || timer === 0}
      onClick={(e) => handleAnswer(e)}
      className={`my-2 transition duration-100 ease-out  text-white font-bold uppercase w-full md:w-[45%] md:mb-2 py-2 px-4 rounded-xl bg-[#fc6812]  
      `}
    >
      {answer}
    </motion.button>
  );
};
