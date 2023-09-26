import { create } from "zustand";

export const useAnswerStore = create((set) => ({
  answerData: {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: null,
  },
  userSelection: null,

  // Establece la pregunta y las opciones actuales en el estado
  setCurrentQuestionData: (data) => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        currentQuestion: data,
      },
    }));
  },

  // Incrementar el contador de respuestas correctas
  incrementCorrectAnswerCount: () => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        correctAnswers: state.answerData.correctAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    }));
  },

  // Incrementar el contador de respuestas incorrectas
  incrementIncorrectAnswerCount: () => {
    set((state) => ({
      answerData: {
        ...state.answerData,
        incorrectAnswers: state.answerData.incorrectAnswers + 1,
        totalQuestions: state.answerData.totalQuestions + 1,
      },
    }));
  },

  // Guarda la respuesta que seleccionó el usuario
  saveUserSelection: (selectedAnswer) => {
    set((state) => ({
      userSelection: selectedAnswer,
    }));
  },
}));
