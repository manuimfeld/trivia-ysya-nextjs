import { create } from "zustand";

export const useAnswerStore = create((set) => ({
  answerData: {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: null,
  },
  setCurrentQuestion: (data) =>
    set((state) => ({
      answerData: {
        ...state.answerData,
        currentQuestion: data,
      },
    })),
  setAnswerData: (data) =>
    set(() => ({
      answerData: {
        ...data,
      },
    })),
  incrementCorrectAnswer: () =>
    set((state) => ({
      answerData: {
        ...state.answerData,
        correctAnswers: state.answerData.correctAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    })),

  incrementIncorrectAnswer: () =>
    set((state) => ({
      answerData: {
        ...state.answerData,
        incorrectAnswers: state.answerData.incorrectAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    })),
}));
