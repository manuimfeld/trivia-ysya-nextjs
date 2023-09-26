import { create } from "zustand";

export const useAnswerStore = create((set) => ({
  answerData: {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: null,
  },
  userSelection: null,
  setCurrentQuestionData: (data) => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        currentQuestion: data,
      },
    }));
  },

  setAnswerDataFields: (data) => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        ...data,
      },
    }));
  },

  incrementCorrectAnswerCount: () => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        correctAnswers: state.answerData.correctAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    }));
  },

  incrementIncorrectAnswerCount: () => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        incorrectAnswers: state.answerData.incorrectAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    }));
  },

  saveUserSelection: (selectedAnswer) => {
    set((state) => ({
      userSelection: selectedAnswer,
    }));
  },
}));
