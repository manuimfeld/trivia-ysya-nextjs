const Message = ({ type }) => {
  const messages = {
    timeUp: "Se acabó el tiempo",
    correct: "Correcto",
    incorrect: "Incorrecto",
  };

  return (
    <h2
      className={`uppercase md:mx-auto md:grow-1 text-white mt-2 mb-2 ${
        type === "timeUp"
          ? "incorrect-answer"
          : type === "correct"
          ? "correct-answer"
          : "incorrect-answer"
      } px-4 py-1 rounded-full`}
    >
      {messages[type]}
    </h2>
  );
};

export default Message;
