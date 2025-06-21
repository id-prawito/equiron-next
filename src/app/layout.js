import "./globals.scss";
import { AppContextProvider } from "@/config/AppContext";
import ThemeWrapper from "@/config/ThemeWrapper";
import { metadata } from "@/config/metadata"; // ✅ opsional

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AppContextProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
