import "./globals.scss";
import { AppContextProvider } from "@/config/AppContext";
import ThemeWrapper from "@/config/ThemeWrapper";
import { metadata } from "@/config/metadata";
import "@/assets/nprogress.css";
import NProgressProvider from "./NProgressProvider"; // ✅ pastikan file ini ada

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AppContextProvider>
          <ThemeWrapper>
            <NProgressProvider />
            {children}
          </ThemeWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
