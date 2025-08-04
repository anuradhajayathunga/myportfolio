import { Poppins } from "next/font/google";
import "./globals.css";

// components
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Anuradha Jayathunga | Portfolio",
  description: "Modern portfolio showcasing my work and expertise",
  keywords: "nextjs, react, ui/ux",
  authors: "Anuradha Jayathunga",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth dark`}>
      <body className="font-poppins antialiased leading-8 overflow-x-hidden min-h-screen transition-colors duration-500 bg-light-base text-light-text dark:bg-dark-base dark:text-dark-text">
        <Header />
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
