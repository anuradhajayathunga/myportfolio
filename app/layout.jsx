import { Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} scroll-smooth `}
    >
      <body className=" antialiased leading-8 overflow-x-hidden min-h-screen transition-colors duration-500 bg-light-base text-light-text dark:bg-dark-base dark:text-dark-text ">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
