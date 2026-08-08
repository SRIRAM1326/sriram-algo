import { motion } from 'framer-motion';
import crestLogo from '../assets/crest.png';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      <div className="px-6 py-4 md:py-6 flex justify-between items-center bg-vintage-burgundy shadow-md border-b border-vintage-gold/20">
        <div className="flex items-center gap-4 text-xl font-serif font-bold text-vintage-gold tracking-widest uppercase">
          <img src={crestLogo} alt="Crest Logo" className="h-12 w-auto md:h-14 max-w-[56px] object-contain drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]" />
          <a href="#" className="tracking-widest">S R I R A M &nbsp; M</a>
        </div>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-vintage-gold/90">
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
          <a href="#education" className="hover:text-white transition-colors duration-300">Education</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </nav>
      </div>

      {/* Colored Decorative Lines - Vertical */}
      <div className="absolute left-6 md:left-12 top-full flex flex-row h-screen pointer-events-none z-0 drop-shadow-md">
        {/* Deep Olive line */}
        <div className="w-[10px] md:w-[14px] h-full bg-[#4B5320]"></div>
        {/* Camel line */}
        <div className="w-[6px] md:w-[8px] h-full bg-[#C19A6B]"></div>
        {/* Dark Navy line */}
        <div className="w-[4px] md:w-[6px] h-full bg-[#111827]"></div>
      </div>
    </motion.header>
  );
};

export default Header;
