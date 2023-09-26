import { create } from "zustand";

export const timerStore = create((set) => ({
  timer: 10,
  isPlaying: true, // Estado de juego, inicialmente en reproducción

  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),

  // Función para decrementar el temporizador, asegurándose de que no sea negativo
  decrement: () =>
    set((state) => ({ timer: state.timer > 0 ? state.timer - 1 : 0 })), // Función para decrementar el contador

  // Función para reiniciar el temporizador a 10 segundos
  reset: () =>
    set(() => ({
      timer: 10,
    })),
}));
//
