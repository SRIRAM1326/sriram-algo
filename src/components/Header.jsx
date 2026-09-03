import { motion } from 'framer-motion';
import crestLogo from '../assets/crest.png';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col px-4 md:px-8 pt-4 md:pt-6 pointer-events-none"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center glass-card rounded-full px-5 py-2.5 pointer-events-auto">
        <div className="flex items-center gap-3 text-lg font-sans font-extrabold text-granger-dark tracking-tight">
          <img src={crestLogo} alt="Crest Logo" className="h-7 w-auto object-contain drop-shadow-sm grayscale contrast-125" />
          <a href="#" className="tracking-tight hover:text-granger-primary transition-colors">SRIRAM M</a>
        </div>
        <nav className="hidden md:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-granger-text">
          {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative group hover:text-granger-dark transition-colors duration-300 py-1"
            >
              {item}
              <span className="absolute left-1/2 -bottom-1 w-1 h-1 bg-granger-primary rounded-full -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
