import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Ad1 from "./components/Ad1";
import Ad2 from "./components/Ad2";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bio />
      <Ad1 />
      <Skills />
      <Ad2 />
      <Projects />
      <Services />
      <Stats />
      <Contact />
    </>
  );
}

export default App;