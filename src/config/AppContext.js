"use client";

import { createContext, useReducer, useEffect, useState } from "react";
import themeList from "./themeList";

const AppContext = createContext();

const lightTheme = themeList.light;
const darkTheme = themeList.dark;

// Default/fallback state (saat SSR)
const defaultState = {
  theme: lightTheme,
  language: "id",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "TOGGLE_THEME": {
      const newTheme = state.theme === darkTheme ? lightTheme : darkTheme;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return { ...state, theme: newTheme };
    }
    case "TOGGLE_LANGUAGE": {
      const newLang = state.language === "id" ? "en" : "id";
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLang);
      }
      return { ...state, language: newLang };
    }
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const [isClient, setIsClient] = useState(false); // Untuk hindari SSR crash

  // Ambil data localStorage hanya saat client
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const theme =
        storedTheme === darkTheme || storedTheme === lightTheme
          ? storedTheme
          : prefersDark
          ? darkTheme
          : lightTheme;

      const lang = localStorage.getItem("language") || "id";

      dispatch({ type: "SET_THEME", payload: theme });
      dispatch({ type: "SET_LANGUAGE", payload: lang });
    }
  }, []);

  const value = {
    theme: state.theme,
    language: state.language,
    toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
    toggleLanguage: () => dispatch({ type: "TOGGLE_LANGUAGE" }),
  };

  // Hindari render premature saat SSR
  if (!isClient) return null;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
export { AppContextProvider };
