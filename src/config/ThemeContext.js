"use client";

import { createContext, useReducer, useEffect, useState } from "react";
import themeList from "@/config/themeList"; // pastikan path benar

const ThemeContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === darkTheme ? lightTheme : darkTheme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify(newTheme));
      }
      return { theme: newTheme };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (storedTheme) {
        try {
          return JSON.parse(storedTheme);
        } catch {
          return prefersDark ? darkTheme : lightTheme;
        }
      }

      return prefersDark ? darkTheme : lightTheme;
    }

    return lightTheme; // default fallback during SSR
  };

  const [state, dispatch] = useReducer(themeReducer, {
    theme: lightTheme, // sementara
  });

  useEffect(() => {
    // Set theme dari localStorage setelah mounting (client-side only)
    dispatch({ type: "INIT", theme: getInitialTheme() });
    setIsReady(true);
  }, []);

  const value = {
    theme: state.theme,
    toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
  };

  if (!isReady) return null; // Hindari render sebelum client ready

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeContextProvider };
