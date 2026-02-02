import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import HtmlLangWrapper from "../components/HtmlLangWrapper";

export const metadata = {
  title: "Villa Omaly – Private Nature Villa in Bogor",
  description:
    "Villa Omaly is a private nature villa near Rancamaya, Bogor, perfect for family stays and events.",
  openGraph: {
    title: "Villa Omaly – Private Nature Villa in Bogor",
    description:
      "Villa Omaly is a private nature villa near Rancamaya, Bogor, perfect for family stays and events.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <HtmlLangWrapper>{children}</HtmlLangWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
