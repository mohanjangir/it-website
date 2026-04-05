import Navbar from "./components/Navbar";
// import Hero from "@/components/Hero";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Counter from "./components/Counter";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import FloatingButtons from "./components/FloatingButtons";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="pt-10">
      <Hero />
    </main>
    <About />
    <Counter />
    
    <Courses />
    <Reviews />
    <Contact />
    
    <Footer />
    <FloatingButtons />
  </>
  );
}