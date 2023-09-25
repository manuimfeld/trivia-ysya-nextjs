import { timerStore } from "../store/timerStore";
import { randomVideo } from "../helpers/randomVideo";
import { useAnswerStore } from "../store/answerStore";

export const ContinueButton = () => {
  const { timer, reset, isPlaying, toggleIsPlaying } = timerStore();
  const setCurrentQuestion = useAnswerStore(
    (state) => state.setCurrentQuestion
  );
  const { saveUserSelection } = useAnswerStore();
  const answerData = useAnswerStore((state) => state.answerData);

  const handleChange = () => {
    // Detener el temporizador y resetearlo
    toggleIsPlaying();
    reset();
    // Cargar una nueva question aleatoria
    setCurrentQuestion(randomVideo());
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
