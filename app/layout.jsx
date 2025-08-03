import { Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional: choose what you need
  display: "swap",
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
    <html lang="en" suppressHydrationWarning className="transition-colors duration-300 scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
