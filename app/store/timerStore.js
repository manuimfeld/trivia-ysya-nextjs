import { create } from "zustand";

export const timerStore = create((set) => ({
  timer: 10,
  decrement: () =>
    set((state) => ({ timer: state.timer > 0 ? state.timer - 1 : 0 })), // Función para decrementar el contador
  reset: () =>
    set(() => ({
      timer: 10, // Reiniciar el temporizador a 10
    })),
}));
