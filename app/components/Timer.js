import { useEffect } from "react";
import { timerStore } from "../store/timerStore";
import { useAnswerStore } from "../store/answerStore";

export const Timer = () => {
  const { timer, decrement, isPlaying, toggleIsPlaying } = timerStore();
  const incrementIncorrectAnswer = useAnswerStore(
    (state) => state.incrementIncorrectAnswer
  );

  useEffect(() => {
    let timerInterval;

    // Función para manejar el temporizador
    const handleTimer = () => {
      // Decrementa el temporizador solo si el juego está en curso
      if (isPlaying && timer > 0) {
        decrement();
      }

      // Si el temporizador llega a 0 y el juego está en curso, activa el toggle
      if (timer === 0 && isPlaying) {
        incrementIncorrectAnswer();
        toggleIsPlaying();
        clearInterval(timerInterval); // Detiene el intervalo
      }
    };

    // Iniciar el temporizador
    timerInterval = setInterval(handleTimer, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, decrement, isPlaying, toggleIsPlaying]);

  return (
    <div className="my-4 md:my-0 md:mb-2 md:mt-6 w-full text-center">
      <span className="md:mx-auto md:grow-1 text-white mt-4 bg-red-500 px-4 py-1 rounded-full">
        {timer}
      </span>
    </div>
  );
};
