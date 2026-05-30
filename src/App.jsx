import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EducationSkills from './components/EducationSkills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-hidden selection:bg-vintage-gold/30 selection:text-vintage-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
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
