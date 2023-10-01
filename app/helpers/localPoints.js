import { useAnswerStore } from "../store/answerStore";

const { correctAnswers } = useAnswerStore.getState().answerData;
let localPoints = localStorage.getItem("points");

export const savePoints = () => {
  if (localPoints !== null) {
    localPoints = parseInt(localPoints);
    localStorage.setItem("points", (localPoints += correctAnswers));
  } else {
    localStorage.setItem("points", parseInt(correctAnswers));
  }
};

export const deletePoints = () => {
  localStorage.removeItem("points");
};

export const getLocalPoints = () => {
  return parseInt(localPoints);
};