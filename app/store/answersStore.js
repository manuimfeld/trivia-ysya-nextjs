import { create } from "zustand";

export const answersStore = create((set) => ({
  answers: 0,
  increment: () =>
    set((state) => ({ answers: state.answers >= 0 && state.answers + 1 })), //
  answerResults: { correctAnswers: 0, incorrectAnswers: 0 },
  correctAnswer: () => {
    set((state) => ({
      answerResults: {
        ...state.answerResults,
        correctAnswers: state.answerResults.correctAnswers + 1,
      },
    }));
  },
  incorrectAnswer: () =>
    set((state) => ({
      answerResults: {
        ...state.answerResults,
        incorrectAnswers: state.answerResults.incorrectAnswers + 1,
      },
    })),
}));
//
