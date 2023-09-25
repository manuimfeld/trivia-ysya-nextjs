import { useAnswerStore } from "../store/answerStore";
import { timerStore } from "../store/timerStore";

export const checkAnswer = (e) => {
  const answerButton = e.target;
  const { currentQuestion, incrementCorrectAnswer, incrementIncorrectAnswer } =
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
  };

  handleAnswer();
};
//
