import { useTimerStore } from "../store/timerStore";
import { randomVideo } from "../helpers/randomVideo";
import { useAnswerStore } from "../store/answerStore";

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
      <button
        onClick={handleChange}
        className="mt-2 text-white font-bold uppercase w-full py-2 px-4 rounded-xl bg-[#fc6812] disabled:bg-[#b46638] disabled:text-gray-400"
      >
        {`${answerData.totalQuestions === 11 ? "Ver puntuaciòn" : "Siguiente"}`}
      </button>
    )
  );
};
