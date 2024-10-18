import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <ParticlesBackground />
      <div className="flex w-screen flex-wrap justify-center gap-10">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
