const removeClasses = () => {
  // Busco todos los botones en el DOM que contengan las siguientes clases
  const buttonsToRemoveClasses = document.querySelectorAll(
    ".incorrect-answer, .correct-answer"
  );

  // Elimino las clases de los botones cada nuevo vídeo
  buttonsToRemoveClasses.forEach((button) => {
    button.classList.remove("incorrect-answer", "correct-answer");
  });
};
export default removeClasses;
