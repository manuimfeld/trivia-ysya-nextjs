export const checkAnswer = (
  e,
  title,
  increment,
  correctAnswer,
  incorrectAnswer
) => {
  const answerButton = e.target;

  const isCorrect = () => {
    answerButton.classList.add("correct-answer", "selected-answer");
    increment();
    correctAnswer();
  };

  const isInvalid = () => {
    answerButton.classList.add("incorrect-answer", "selected-answer");
    increment();
    incorrectAnswer();
  };

  answerButton.innerHTML === title ? isCorrect() : isInvalid();
};
