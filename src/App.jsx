import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Project from "./components/Project/Project";
import ExperienceEducation from "./components/ExperienceEducation/ExperienceEducation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="app">
        <Hero />
        <Technologies />
        <Project />
        <ExperienceEducation />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;