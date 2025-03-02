import { create } from "zustand";

interface MusicState {
  isPlaying: boolean;
  toggleMusic: () => void;
  setPlaying: (state: boolean) => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  isPlaying: false,
  toggleMusic: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setPlaying: (state) => set({ isPlaying: state }),
}));
