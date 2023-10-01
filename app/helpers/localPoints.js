import { useAnswerStore } from "../store/answerStore";

export const savePoints = async () => {
  const { correctAnswers } = useAnswerStore.getState().answerData;
  let localPoints = localStorage.getItem("points");
  if (typeof window !== "undefined") {
    if (localPoints !== null) {
      localPoints = parseInt(localPoints);
      localStorage.setItem("points", (localPoints += correctAnswers));
    } else {
      localStorage.setItem("points", parseInt(correctAnswers));
    }
  }
};

export const deletePoints = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("points");
  }
};

export const getLocalPoints = () => {
  let localPoints = localStorage.getItem("points");
  if (typeof window !== "undefined") {
    if (localPoints !== null) {
      return parseInt(localPoints);
    } else {
      return null;
    }
  }
};
