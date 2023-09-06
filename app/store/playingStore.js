import { create } from "zustand";

export const playingStore = create((set) => ({
  playing: true,
  toggle: () => set((state) => ({ playing: !state.playing })), // Función para cambiar entre true y false
}));
