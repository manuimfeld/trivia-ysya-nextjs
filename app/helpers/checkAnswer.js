import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

export const checkAnswer = (e) => {
  const answerButton = e.target;
  const { currentQuestion } = useAnswerStore.getState().answerData; // Llama a la función para incrementar la respuesta correcta
  const { incrementCorrectAnswer, incrementIncorrectAnswer } =
    useAnswerStore.getState();
  const toggleIsPlaying = timerStore.getState().toggleIsPlaying;

  const handleAnswer = () => {
    const isCorrectAnswer = answerButton.innerHTML === currentQuestion.title;
    if (isCorrectAnswer) {
      incrementCorrectAnswer();
      answerButton.classList.add("correct-answer");
      toggleIsPlaying();
    } else {
      incrementIncorrectAnswer();
      answerButton.classList.add("incorrect-answer");
      toggleIsPlaying();
    }

    answerButton.classList.add("selected-answer");
  };

  handleAnswer();
};
//
