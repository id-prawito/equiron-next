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
