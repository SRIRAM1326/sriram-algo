import { motion } from 'framer-motion';
import AnalogClock from './AnalogClock';
import heroBg from '../../download (6).jpg';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-12 overflow-hidden w-full">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Dark overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-[#0B0C0E]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0C0E] opacity-90"></div>
      </div>

      {/* Abstract Glowing Orbs for Visual Drama (kept for extra effect) */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-granger-primary/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none mix-blend-screen z-0" />
      <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white/10 rounded-full blur-[80px] translate-y-1/2 pointer-events-none mix-blend-screen z-0" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-center z-10 max-w-6xl w-full flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/20 mb-8 md:mb-10 backdrop-blur-md shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-granger-primary animate-pulse shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
          <span className="font-sans text-white uppercase tracking-widest text-[10px] font-bold">Available for new ventures</span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] mb-6 tracking-[-0.04em] leading-[0.85] text-white font-sans font-extrabold relative drop-shadow-2xl">
          <span className="relative z-10">SRIRAM M</span>
        </h1>
        
        <h2 className="font-sans text-white text-lg md:text-2xl lg:text-3xl font-semibold tracking-tight mb-8 max-w-3xl leading-snug drop-shadow-lg">
          Where Quantitative Engineering Meets Modern Artificial Intelligence
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center items-center font-sans text-xs font-bold text-white mb-12 max-w-3xl">
          <a href="tel:+919677207948" className="group flex items-center gap-2 px-4 py-2.5 bg-black/30 hover:bg-black/50 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-lg hover:border-white/40">
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-6"><PhoneIcon /></span>
            +91 9677207948
          </a>
          <a href="mailto:Sriram1326.io@gmail.com" className="group flex items-center gap-2 px-4 py-2.5 bg-black/30 hover:bg-black/50 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-lg hover:border-white/40">
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-6"><MailIcon /></span>
            Sriram1326.io@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/sriramio" target="_blank" rel="noreferrer" className="group flex items-center gap-2 px-4 py-2.5 bg-black/30 hover:bg-black/50 border border-white/20 rounded-full transition-all whitespace-nowrap backdrop-blur-md shadow-lg hover:border-white/40">
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:-rotate-6"><LinkedinIcon /></span>
            linkedin.com/in/sriramio
          </a>
          <div className="group flex items-center gap-2 px-4 py-2.5 bg-black/30 border border-white/20 rounded-full whitespace-nowrap cursor-default backdrop-blur-md shadow-lg transition-all hover:bg-black/50 hover:border-white/40">
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"><MapPinIcon /></span>
            Chennai, India
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href="/Sriramio-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-granger-primary hover:bg-granger-primary/90 text-white text-sm font-sans font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg w-full sm:w-auto"
          >
            <span className="relative z-10 tracking-wider">View Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
          <a
            href="#projects"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-sans font-bold rounded-full transition-all duration-300 w-full sm:w-auto tracking-wider backdrop-blur-sm"
          >
            Selected Works
          </a>
        </div>

        <div className="mt-4 opacity-70 hover:opacity-100 transition-opacity">
          <AnalogClock />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-sans font-bold">Scroll</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-gray-500/50 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
