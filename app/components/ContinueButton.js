import { useTimerStore } from "../store/timerStore";
import { randomVideo } from "../helpers/randomVideo";
import { useAnswerStore } from "../store/answerStore";
import { motion } from "framer-motion";

export const ContinueButton = () => {
  const { timer, reset, isPlaying, toggleIsPlaying } = useTimerStore();
  const { setCurrentQuestionData, saveUserSelection, answerData } =
    useAnswerStore();

  const handleChange = () => {
    // Resetear el temporizador, e iniciarlo
    reset();
    toggleIsPlaying();
    // Cargar una nueva pregunta aleatoria y borrar la seleccionada
    setCurrentQuestionData(randomVideo());
    saveUserSelection(null);
  };

  return (
    // Renderizar el botón solo si el temporizador se agota o el juego no está en curso
    (isPlaying === false || timer === 0) && (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={handleChange}
        className="mt-2 hover:text-white duration-300 hover:bg-primary text-primary font-bold uppercase w-full py-2 px-4 rounded-xl bg-white disabled:bg-primaryDisabled disabled:text-gray-400"
      >
        {`${answerData.totalQuestions === 11 ? "Ver puntuaciòn" : "Siguiente"}`}
      </motion.button>
    )
  );
};
