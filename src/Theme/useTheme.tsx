import { create } from "zustand";

const initialTheme = localStorage.getItem("theme");

type ThemeState = {
  theme: string;
  setDarkMode: () => void;
  setLightMode: () => void;
};

const useTheme = create<ThemeState>((set) => ({
  theme: initialTheme || "light",
  setDarkMode: () => {
    set({ theme: "dark" });
    localStorage.setItem("theme", "dark");
  },
  setLightMode: () => {
    set({ theme: "light" });
    localStorage.setItem("theme", "light");
  },
}));

export default useTheme;
