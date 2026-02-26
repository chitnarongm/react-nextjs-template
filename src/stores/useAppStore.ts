import { create } from "zustand";

interface AppState {
  sidebarOpen: boolean;
  locale: string;
  toggleSidebar: () => void;
  setLocale: (locale: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  locale: "en",
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setLocale: (locale: string) => set({ locale }),
}));
