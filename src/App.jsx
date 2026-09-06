import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import EducationSkills from './components/EducationSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-hidden selection:bg-granger-primary/30 selection:text-granger-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Experience />
        <Projects />
        <EducationSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
