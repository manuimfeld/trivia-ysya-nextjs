import { useAnswerStore } from "../store/answerStore";

export const savePoints = async () => {
  const { correctAnswers } = useAnswerStore.getState().answerData;
  let localPoints = localStorage.getItem("points");

  if (localPoints !== null) {
    localPoints = parseInt(localPoints);
    localStorage.setItem("points", (localPoints += correctAnswers));
  } else {
    localStorage.setItem("points", parseInt(correctAnswers));
  }
};

export const deletePoints = async () => {
  localStorage.removeItem("points");
};

export const getLocalPoints = () => {
  let localPoints = localStorage.getItem("points");

  if (localPoints !== null) {
    return parseInt(localPoints);
  } else {
    return null;
  }
};
