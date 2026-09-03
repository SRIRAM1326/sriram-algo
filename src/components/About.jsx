import { motion } from 'framer-motion';
import avatarImg from '../../Gemini_Generated_Image_7dlhxx7dlhxx7dlh.png';
import bannerImg from '../../download (2).jpg';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 relative flex justify-center items-center">
      {/* Background Orbs to emphasize the glassmorphism effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-granger-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl relative z-10"
      >
        {/* iOS Glassmorphic Card Container */}
        <div className="bg-white/70 backdrop-blur-3xl rounded-[40px] md:rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden relative">
          
          {/* Inner Highlight for depth */}
          <div className="absolute inset-0 rounded-[40px] md:rounded-[48px] pointer-events-none shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] z-20"></div>

          {/* Banner Section - Reduced Height */}
          <div className="h-32 md:h-44 relative w-full overflow-hidden bg-gray-100/50">
            <img 
              src={bannerImg} 
              alt="Banner Landscape" 
              className="w-full h-full object-cover object-center opacity-90"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
          </div>

          <div className="px-6 md:px-10 relative z-30">
            {/* Overlapping Avatar - Reduced Size */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[5px] md:border-[6px] border-white/70 backdrop-blur-xl -mt-12 md:-mt-16 overflow-hidden bg-white/50 relative z-10 shadow-lg shadow-black/5">
              <img 
                src={avatarImg} 
                alt="Sriram M" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Profile Header */}
            <div className="mt-4">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-gray-900 tracking-tight leading-tight">Sriram M</h2>
              <p className="text-[14px] md:text-[16px] font-sans font-semibold text-gray-600 mt-1.5 tracking-tight leading-[1.5] max-w-2xl">
                Python Backend & Algorithmic Trading Developer | FastAPI • WebSockets • Broker APIs | Building Real-Time, Scalable Systems
              </p>
              <p className="text-[13px] md:text-[14px] font-sans font-medium text-gray-400 mt-1">
                Chennai, Tamil Nadu, India
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <a 
                href="mailto:Sriram1326.io@gmail.com" 
                className="group px-5 py-2.5 rounded-full bg-[#0B0C0E] hover:bg-black text-white text-[13px] md:text-[14px] font-semibold flex items-center gap-2 transition-all shadow-md shadow-black/10 active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:rotate-6"><MailIcon /></span> Message
              </a>
              <a 
                href="https://linkedin.com/in/sriramio" 
                target="_blank" 
                rel="noreferrer"
                className="group px-5 py-2.5 rounded-full bg-black/5 hover:bg-black/10 backdrop-blur-md text-gray-900 text-[13px] md:text-[14px] font-semibold flex items-center gap-2 transition-all active:scale-95"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:-rotate-6"><LinkedinIcon /></span> LinkedIn
              </a>
            </div>

            {/* About Content - Reduced padding and tighter text */}
            <div className="mt-8 pb-10 border-t border-black/5 pt-6">
              <h3 className="text-xl font-sans font-bold text-gray-900 mb-4 tracking-tight">About</h3>
              
              <div className="font-sans text-[15px] md:text-[16px] text-gray-700 leading-[1.6] space-y-4 font-medium tracking-[-0.01em]">
                <p>
                  I’m a Full-Stack & Algorithmic Trading Developer passionate about building high-performance backend systems, real-time trading infrastructure, and AI-powered applications. I work across Python, FastAPI, WebSockets, PostgreSQL, quantitative trading, and applied AI, transforming complex ideas into reliable, scalable, production-ready products.
                </p>
                <p>
                  My journey began in financial markets and derivatives, where I developed algorithmic trading strategies and real-time systems for NIFTY and SENSEX derivatives. Over time, I expanded into building enterprise B2B platforms, RAG-powered AI assistants, voice AI applications, and modern full-stack products using technologies such as Next.js, React, LangChain, FAISS, and Docker.
                </p>
                <p>
                  I enjoy working at the intersection of quantitative engineering, backend architecture, real-time systems, and artificial intelligence. My goal is to build technology that goes beyond simply working — systems that are scalable, efficient, reliable, and ready for real-world use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
