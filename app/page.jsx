//components
import About from "@/components/About";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Work from "@/components/Work";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <Review />
      <Contactme />
      <Footer />
    </main>
  );
}
