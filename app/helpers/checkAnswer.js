import { useAnswerStore } from "../store/answerStore";
import { useTimerStore } from "../store/timerStore";

export const checkAnswer = (e, answer, currentQuestion) => {
  const answerButton = e.target;
  const isCorrectAnswer = answer === currentQuestion; // Verifica si la respuesta seleccionada es correcta

  const { incrementCorrectAnswerCount, incrementIncorrectAnswerCount } =
    useAnswerStore.getState();

  const toggleIsPlaying = useTimerStore.getState().toggleIsPlaying; // Obtiene la función para (en este caso) pausar el temporizador

  // Función para procesar la respuesta
  const handleAnswer = () => {
    if (isCorrectAnswer) {
      // Si la respuesta es correcta, sumamos puntos
      incrementCorrectAnswerCount();

      // Marca la respuesta como correcta agregandole un estilo
      answerButton.classList.add("correct-answer");

      // Pausa el temporizador
      toggleIsPlaying();
    } else {
      incrementIncorrectAnswerCount();
      answerButton.classList.add("incorrect-answer");
      toggleIsPlaying();
    }
  };

  // Llamo a la función para procesar la respuesta
  handleAnswer();
};
