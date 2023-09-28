import { motion } from "framer-motion";

const Message = ({ type }) => {
  const messages = {
    timeUp: "Se acabó el tiempo",
    correct: "Correcto",
    incorrect: "Incorrecto",
  };

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={`uppercase md:mx-auto md:grow-1 text-white mt-2 mb-2 ${
        type === "timeUp"
          ? "incorrect-answer"
          : type === "correct"
          ? "correct-answer"
          : "incorrect-answer"
      } px-4 py-1 rounded-full`}
    >
      {messages[type]}
    </motion.h2>
  );
};

export default Message;
