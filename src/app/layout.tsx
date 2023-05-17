import { ReCaptchaProvider } from "next-recaptcha-v3";
import "./globals.css";
import { MainPage } from "@/components/MainPage";

export const metadata = {
  title: "Cactus Cycles",
  description: "Wir bieten Verkauf und Werkstatt für alle Arten von Fahrrädern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <ReCaptchaProvider reCaptchaKey="6Lf5nTQlAAAAAJSIdtCbFuT43dib7V1JOsaeUKJu">
          <MainPage>{children}</MainPage>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
