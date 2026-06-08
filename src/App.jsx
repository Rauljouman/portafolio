import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <Navbar />

      <main className="app">
        <Hero />
        <Technologies />
        <Project />
      </main>
    </>
  );
}

export default App;