export const checkAnswer = (e, title) => {
  const answerButton = e.target;

  const correctAnswer = () => {
    answerButton.classList.add("correct-answer", "selected-answer");
  };

  const incorrectAnswer = () => {
    answerButton.classList.add("incorrect-answer", "selected-answer");
  };

  answerButton.innerHTML === title ? correctAnswer() : incorrectAnswer();
};
