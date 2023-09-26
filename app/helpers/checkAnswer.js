import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

// Función para verificar la respuesta seleccionada por el usuario
export const checkAnswer = (e, currentQuestion) => {
  const answerButton = e.target;

  // Verifica si la respuesta seleccionada es correcta
  const isCorrectAnswer = answerButton.innerHTML === currentQuestion;

  // Obtiene las funciones para sumar puntos por respuestas correctas e incorrectas
  const { incrementCorrectAnswerCount, incrementIncorrectAnswerCount } =
    useAnswerStore.getState();

  // Obtiene la función para pausar o reanudar el temporizador
  const toggleIsPlaying = timerStore.getState().toggleIsPlaying;

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
