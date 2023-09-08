import { useEffect } from "react";
import { timerStore } from "../store/timerStore";
import { playingStore } from "../store/playingStore";

export const Timer = () => {
  const timer = timerStore((state) => state.timer);
  const decrement = timerStore((state) => state.decrement);
  const playing = playingStore((state) => state.playing);
  const toggle = playingStore((state) => state.toggle);

  useEffect(() => {
    let timerInterval;

    // Función para manejar el temporizador
    const handleTimer = () => {
      // Decrementa el temporizador solo si el juego está en curso
      if (playing && timer > 0) {
        decrement();
      }

      // Si el temporizador llega a 0 y el juego está en curso, activa el toggle
      if (timer === 0 && playing) {
        toggle();
        clearInterval(timerInterval); // Detiene el intervalo
      }
    };

    // Iniciar el temporizador
    timerInterval = setInterval(handleTimer, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, decrement, toggle, playing]);

  return (
    <div className="md:my-2 w-full text-center">
      <span className="md:mx-auto md:grow-1 text-white mt-4 bg-red-500 px-4 py-1 rounded-full">
        {timer}
      </span>
    </div>
  );
};
