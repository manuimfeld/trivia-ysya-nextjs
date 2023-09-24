const removeClasses = () => {
  // Elimino las clases de los botones cada nuevo vídeo
  const buttonsToRemoveClasses = document.querySelectorAll(
    ".incorrect-answer, .correct-answer"
  );
  buttonsToRemoveClasses.forEach((button) => {
    button.classList.remove("incorrect-answer", "correct-answer");
  });
};
export default removeClasses;
