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

      {/* Presidential Ribbon Line with Crest Logo Seal */}
      <div className="absolute left-6 md:left-14 top-full flex flex-col items-center pointer-events-none z-20 drop-shadow-2xl">
        {/* Vertical Ribbon Stripes */}
        <div className="relative flex flex-row gap-[3px] h-[340px] md:h-[450px]">
          {/* Left Red Ribbon Stripe with Swallowtail cut */}
          <div 
            className="w-4 md:w-5 h-full bg-[#B91C1C]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 14px), 0 100%)' }}
          />
          {/* Right Navy Ribbon Stripe with Swallowtail cut */}
          <div 
            className="w-4 md:w-5 h-full bg-[#1E3A8A]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 14px), 0 100%)' }}
          />

          {/* Circular Gold Crest Logo Emblem Seal */}
          <div className="absolute top-[80px] md:top-[110px] left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#FFFBF4] border-2 border-[#C5A059] shadow-2xl flex items-center justify-center p-2 z-30">
            {/* Outer Gold Stars Ring SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none p-1">
              <circle cx="50" cy="50" r="46" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
              {/* Ring of 24 Stars */}
              {[...Array(24)].map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const r = 44;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <path
                    key={i}
                    d="M0,-2.2 L0.6,-0.6 L2.2,-0.6 L0.9,0.4 L1.4,2 L0,1 L-1.4,2 L-0.9,0.4 L-2.2,-0.6 L-0.6,-0.6 Z"
                    fill="#C5A059"
                    transform={`translate(${x}, ${y}) scale(0.8)`}
                  />
                );
              })}
            </svg>
            {/* Crest Logo */}
            <img 
              src={crestLogo} 
              alt="Crest Seal Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" 
            />
          </div>
        </div>

        {/* Vertical Floating Script Black Name at the Bottom of Ribbon */}
        <div 
          className="mt-3 flex flex-col items-center justify-center gap-1 font-script text-lg md:text-xl font-extrabold text-black leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
          style={{ fontFamily: '"Pinyon Script", "Great Vibes", "Alex Brush", cursive' }}
        >
          <span className="hover:scale-110 transition-transform">S</span>
          <span className="hover:scale-110 transition-transform">R</span>
          <span className="hover:scale-110 transition-transform">I</span>
          <span className="hover:scale-110 transition-transform">R</span>
          <span className="hover:scale-110 transition-transform">A</span>
          <span className="hover:scale-110 transition-transform">M</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black my-1 opacity-90 shadow-sm" />
          <span className="hover:scale-110 transition-transform">M</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
