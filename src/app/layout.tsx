import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"; // if you added the Footer previously

export const metadata: Metadata = {
  title: "GeoSurvey Kosovo",
  description: "Matje Precize për Zhvillim Modern",
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
