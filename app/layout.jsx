import { Outfit } from "next/font/google";
import "./globals.css";
// component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// themeprovider
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Anuradha Jayathunga | Portfolio",
  description: "Modern portfolio showcasing my work and expertise",
  keywords: "nextjs, react, ui/ux",
  authors: "Anuradha Jayathunga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
