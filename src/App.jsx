import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useReveal from "./components/hooks/useReveal";

function App() {

  useReveal();
  
  return (
    <>
      <Navbar />

      <main className="app">
        <Hero />
        <Technologies />
        <Project />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;