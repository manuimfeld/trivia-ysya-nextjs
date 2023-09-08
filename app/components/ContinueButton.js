import { timerStore } from "../store/timerStore";
import { randomVideo } from "../helpers/randomVideo";
import { useAnswerStore } from "../store/answerStore";

export const ContinueButton = () => {
  const { timer, reset, isPlaying, toggleIsPlaying } = timerStore();
  const setCurrentQuestion = useAnswerStore(
    (state) => state.setCurrentQuestion
  );

  const handleChange = () => {
    // Detener el temporizador y resetearlo
    toggleIsPlaying();
    reset();
    // Cargar una nueva question aleatoria
    setCurrentQuestion(randomVideo());
  };

  return (
    // Renderizar el botón solo si el temporizador se agota o el juego no está en curso
    (isPlaying === false || timer === 0) && (
      <button
        onClick={handleChange}
        className="text-white font-bold uppercase w-full py-2 px-4 rounded-xl bg-[#fc6812] disabled:bg-[#b46638] disabled:text-gray-400"
      >
        Siguiente
      </button>
    )
  );
};
