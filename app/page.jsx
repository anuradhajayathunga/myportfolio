//components
import About from "@/components/About";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Work from "@/components/Work";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="">
        <Hero />
        <About />
        <Services />
        <Work />
        <Review />
        <Contactme />
      </div>
    </main>
  );
}
