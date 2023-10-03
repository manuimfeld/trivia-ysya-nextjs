const { useAnswerStore } = require("../store/answerStore");

const { resetGameData } = useAnswerStore.getState();

export const resetGame = (router) => {
  resetGameData();
  router.push("/trivia");
};
