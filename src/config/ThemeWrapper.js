"use client";

import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import GlobalStyles from "@/config/GlobalStyles";
import AppContext from "@/config/AppContext";

export default function ThemeWrapper({ children }) {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={{ theme }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
