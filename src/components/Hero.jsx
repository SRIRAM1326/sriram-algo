import { motion } from 'framer-motion';
import AnalogClock from './AnalogClock';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-vintage-gold/5 rounded-full opacity-50 pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-vintage-gold/10 rounded-full opacity-50 pointer-events-none mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10 max-w-3xl"
      >
        <p className="font-sans text-vintage-gold uppercase tracking-[0.3em] text-xs mb-6 font-semibold">
          Portfolio
        </p>
        <h1 className="text-6xl md:text-8xl mb-8 tracking-tighter text-shadow-elegant">
          Sriram M
        </h1>
        <h2 className="font-serif text-vintage-burgundy text-lg md:text-xl lg:text-2xl font-medium tracking-wide mb-4 text-shadow-sm">
          Where Quantitative Engineering Meets Modern Artificial Intelligence
        </h2>
        <p className="font-sans text-vintage-charcoal/70 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto font-light">
          Algorithmic Trading Developer specializing in low-latency event-driven architectures, AI integrations, and production-grade trading systems.
        </p>

        <div className="flex flex-row flex-nowrap gap-2 md:gap-4 justify-center items-center font-sans text-[10px] md:text-xs text-vintage-charcoal/80 mb-12 w-full max-w-full">
          <a href="tel:+919677207948" className="flex items-center gap-2 hover:text-vintage-gold transition-colors whitespace-nowrap">
            <PhoneIcon />
            +91 9677207948
          </a>
          <span className="w-1 h-1 bg-vintage-gold/50 rounded-full shrink-0"></span>
          <a href="mailto:Sriram1326.io@gmail.com" className="flex items-center gap-2 hover:text-vintage-gold transition-colors whitespace-nowrap">
            <MailIcon />
            Sriram1326.io@gmail.com
          </a>
          <span className="w-1 h-1 bg-vintage-gold/50 rounded-full shrink-0"></span>
          <a href="https://www.linkedin.com/in/sriramio" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-vintage-gold transition-colors whitespace-nowrap">
            <LinkedinIcon />
            linkedin.com/in/sriramio
          </a>
          <span className="w-1 h-1 bg-vintage-gold/50 rounded-full shrink-0"></span>
          <span className="flex items-center gap-2 whitespace-nowrap">
            <MapPinIcon />
            Chennai, India
          </span>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="/sriramAlgodev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 border border-vintage-burgundy/30 hover:border-vintage-gold bg-vintage-burgundy text-vintage-cream text-xs uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-vintage-gold/20 flex items-center justify-center gap-3"
          >
            <span className="relative z-10">View Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>

        <div className="flex justify-center mb-8">
          <AnalogClock />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-vintage-gold"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-vintage-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
