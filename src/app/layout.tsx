import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"; // if you added the Footer previously

export const metadata: Metadata = {
  title: "Gjeodeti",
  description: "Matje Precize për Zhvillim Modern",
  icons: { icon: "/gjeodeti-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
